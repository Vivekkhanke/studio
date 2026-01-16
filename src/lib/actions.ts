'use server';

import * as z from 'zod';
import nodemailer from 'nodemailer';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  mobile: z.string().optional(),
  subject: z.string().min(1, 'Please select a subject.'),
  message: z.string().min(10, 'Message must be at least 10 characters.').max(500),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data. Please check your inputs.',
    };
  }

  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  if (!SMTP_EMAIL || !SMTP_PASSWORD) {
    console.error('SMTP credentials are not set in environment variables.');
    return {
      success: false,
      message: 'Server configuration error. Could not process your request.',
    };
  }
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  
  const { fullName, email, mobile, subject, message } = validatedFields.data;
  const recipientEmail = 'vickykhanke123@gmail.com';

  const mailOptions = {
    from: SMTP_EMAIL,
    to: recipientEmail,
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <h2>New Query from SQL Accelerator Website</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobile || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Your query has been submitted successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send your query. Please try again later.' };
  }
}
