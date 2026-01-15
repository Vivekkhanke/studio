"use server"

import * as z from "zod"

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

  // Simulate network delay and email sending
  await new Promise(res => setTimeout(res, 2000))
  
  console.log("Form submitted:", validatedFields.data);

  // In a real application, you would integrate with an email service like Resend here.
  // For example:
  //
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  //
  // try {
  //   await resend.emails.send({
  //     from: 'onboarding@resend.dev',
  //     to: 'vickykhanke123@gmail.com',
  //     subject: `New Query: ${validatedFields.data.subject}`,
  //     html: `<p>Name: ${validatedFields.data.fullName}</p>
  //            <p>Email: ${validatedFields.data.email}</p>
  //            <p>Message: ${validatedFields.data.message}</p>`
  //   });
  //   return { success: true, message: "Message sent successfully!" };
  // } catch (error) {
  //   return { success: false, message: "Failed to send email." };
  // }

  return {
    success: true,
    message: "Your query has been submitted successfully!",
  }
}
