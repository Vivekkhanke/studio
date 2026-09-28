const topics = [
  'SELECT · JOIN · GROUP BY',
  'Oracle SQL',
  'PL/SQL',
  'Python',
  'pandas',
  'Data Analysis',
  'Core Java',
  'OOP',
  'Collections',
  'Java 8 Streams',
  'Query Optimization',
  'Interview Prep',
  'Git & GitHub',
  'Mini Projects',
];

export default function TechMarquee() {
  return (
    <section aria-label="Topics covered" className="marquee relative w-full overflow-hidden py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent md:w-48" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent md:w-48" aria-hidden="true" />
      <ul className="marquee-track flex w-max gap-3">
        {[...topics, ...topics].map((topic, i) => (
          <li
            key={i}
            aria-hidden={i >= topics.length || undefined}
            className="flex items-center gap-3 whitespace-nowrap rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2.5 font-code text-sm text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
            {topic}
          </li>
        ))}
      </ul>
    </section>
  );
}
