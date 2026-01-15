"use server"

import * as z from "zod"
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  mobile: z.string().optional(),
  subject: z.string().min(1, "Please select a subject."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500),
})

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values)

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data. Please check your inputs.",
    }
  }

  const { fullName, email, mobile, subject, message } = validatedFields.data;

  try {
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, serviceAccountAuth);

    await doc.loadInfo(); 
    const sheet = doc.sheetsByIndex[0];

    await sheet.addRow({ 
      FullName: fullName, 
      Email: email,
      Mobile: mobile || '',
      Subject: subject,
      Message: message,
      Timestamp: new Date().toISOString()
    });

    return { success: true, message: "Your query has been submitted successfully!" };
  } catch (error) {
    console.error("Google Sheet writing error:", error);
    return { success: false, message: "Failed to save your query. Please try again later." };
  }
}
