import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

const siteUrl = 'https://sql-accelerator-demo.web.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SQL DB | Master SQL From Scratch (30-Day Course)',
    template: '%s | SQL DB',
  },
  description: 'Go from beginner to job-ready with our 30-day intensive SQL course. Gain hands-on mastery through real-world projects and expert-led training in data analysis and query optimization.',
  keywords: ['SQL course', 'learn SQL', 'SQL training', 'data analysis', 'SQL projects', 'database queries', 'query optimization', 'Vivek Khanke', 'beginner SQL'],
  
  openGraph: {
    title: 'SQL DB | Master SQL From Scratch',
    description: 'Join our 30-day intensive SQL course and go from beginner to job-ready with hands-on, real-world projects.',
    url: siteUrl,
    siteName: 'SQL DB',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHx8MTc2ODM2OTg3NHww&ixlib=rb-4.1.0&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'A person working on a laptop with data dashboards, representing the SQL DB course.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'SQL DB | Master SQL From Scratch (30-Day Course)',
    description: 'Go from beginner to job-ready with our 30-day intensive SQL course. Gain hands-on mastery through real-world projects.',
    images: ['https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHx8MTc2ODM2OTg3NHww&ixlib=rb-4.1.0&q=80&w=1200&h=630'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
