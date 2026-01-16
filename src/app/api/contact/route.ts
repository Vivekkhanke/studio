import {NextResponse} from 'next/server';
import * as z from 'zod';
import nodemailer from 'nodemailer';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits."),
  subject: z.string().min(1, 'Please select a subject.'),
  message: z.string().min(10, 'Message must be at least 10 characters.').max(500),
});

const subjectMappings: { [key: string]: string } = {
  'enrollment': 'SQL Accelerator | Enrollment',
  'course-details': 'SQL Accelerator | Course Details',
  'other': 'SQL Accelerator | Query',
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedFields = formSchema.safeParse(body);

    if (!validatedFields.success) {
      return NextResponse.json({
        success: false,
        message: 'Invalid form data. Please check your inputs.',
      }, {status: 400});
    }

    const {SMTP_EMAIL, SMTP_PASSWORD} = process.env;

    if (!SMTP_EMAIL || !SMTP_PASSWORD) {
      console.error('SMTP credentials are not set in environment variables.');
      return NextResponse.json({
        success: false,
        message: 'Server configuration error. Could not process your request.',
      }, {status: 500});
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    });

    const {fullName, email, mobile, subject, message} = validatedFields.data;
    const recipientEmail = 'vickykhanke123@gmail.com';
    const emailSubject = subjectMappings[subject] || 'SQL Accelerator | New Query';

    const mailOptions = {
      from: SMTP_EMAIL,
      to: recipientEmail,
      subject: emailSubject,
      html: `
        <h2>New Query from SQL Accelerator Website</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({success: true, message: 'Your query has been submitted successfully!'}, {status: 200});
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({success: false, message: 'Failed to send your query. Please try again later.'}, {status: 500});
  }
}
