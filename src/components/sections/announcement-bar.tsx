import Link from 'next/link';

export default function AnnouncementBar() {
  const announcementText = (
    <span className="whitespace-nowrap px-4">
      <span role="img" aria-label="megaphone" className="mr-2">📢</span>Upcoming Batches Update → Enroll Now | Batch Starts from 1st February
    </span>
  );

  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm font-medium overflow-hidden">
      <Link href="#contact" className="hover:underline inline-block animate-marquee">
          {announcementText}
      </Link>
    </div>
  );
}
