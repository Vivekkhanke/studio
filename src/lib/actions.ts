'use server';

import { addDocumentNonBlocking, getSdks } from '@/firebase';
import { firebaseConfig } from '@/firebase/config';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import * as z from 'zod';
import { v4 as uuidv4 } from 'uuid';

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

  const { fullName, email, mobile, subject, message } = validatedFields.data;
  const { firestore } = getSdks(initializeApp(firebaseConfig));
  const contactQueryId = uuidv4();

  try {
    const contactQueryRef = doc(firestore, 'contact_queries', contactQueryId);
    // The `setDocumentNonBlocking` function is not available in server actions.
    // We will use the `setDoc` function directly here.
    await setDoc(contactQueryRef, {
      id: contactQueryId,
      fullName,
      email,
      mobile: mobile || '',
      subject,
      message,
      submissionDate: new Date().toISOString(),
    });

    return { success: true, message: 'Your query has been submitted successfully!' };
  } catch (error) {
    console.error('Firestore writing error:', error);
    return { success: false, message: 'Failed to save your query. Please try again later.' };
  }
}
