'use server';

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import * as z from 'zod';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  mobile: z.string().optional(),
  subject: z.string().min(1, 'Please select a subject.'),
  message: z.string().min(10, 'Message must be at least 10 characters.').max(500),
});

// The user has to create a .env.local file and add the credentials
// The user also needs to share the sheet with the service account email
const SPREADSHEET_ID = '1gO0B3uxYFquWPNcNZHvseEUOSUMw7t4xQAVgjoHaDh4';
const SHEET_ID = '0'; // GID of the sheet

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data. Please check your inputs.',
    };
  }

  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
    console.error('Google credentials are not set in environment variables.');
    return {
      success: false,
      message: 'Server configuration error. Could not process your request.',
    };
  }

  const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);

  try {
    await doc.loadInfo();
    const sheet = doc.sheetsById[SHEET_ID];
    const { fullName, email, mobile, subject, message } = validatedFields.data;

    await sheet.addRow({
      'Full Name': fullName,
      'Email': email,
      'Mobile': mobile || '',
      'Subject': subject,
      'Message': message,
      'Timestamp': new Date().toLocaleString(),
    });

    return { success: true, message: 'Your query has been submitted successfully!' };
  } catch (error) {
    console.error('Error writing to Google Sheet:', error);
    return { success: false, message: 'Failed to save your query. Please try again later.' };
  }
}
