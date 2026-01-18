import Link from 'next/link';

export default function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
      <Link href="#contact" className="hover:underline px-4">
        <span className="animate-pulse">
          <span role="img" aria-label="megaphone" className="mr-2">📢</span>Upcoming Batches Update → Enroll Now | Batch Starts from 1st February
        </span>
      </Link>
    </div>
  );
}
