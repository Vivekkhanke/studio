"use server"

import * as z from "zod"
import { Resend } from 'resend';

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

  // NOTE: This is a placeholder for the Resend API key.
  // You should replace this with your actual Resend API key stored in environment variables.
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { fullName, email, mobile, subject, message } = validatedFields.data;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // This must be a verified domain on Resend
      to: 'vickykhanke123@gmail.com',
      subject: `New Query: ${subject}`,
      html: `<p>Name: ${fullName}</p>
             <p>Email: ${email}</p>
             ${mobile ? `<p>Mobile: ${mobile}</p>` : ''}
             <p>Message: ${message}</p>`
    });
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, message: "Failed to send email." };
  }
}
