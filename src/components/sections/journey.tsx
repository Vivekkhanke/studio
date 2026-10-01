'use client';

import { BookOpen, Dumbbell, FolderGit2, Mic } from 'lucide-react';
import SectionHeading from '@/components/ui/section-heading';
import MotionDiv from '@/components/ui/motion-div';

const steps = [
  {
    icon: BookOpen,
    label: 'Step 01',
    title: 'Learn the fundamentals',
    description: 'No prior experience needed. Start from the absolute basics of SQL, Python or Java with a step-by-step curriculum.',
  },
  {
    icon: Dumbbell,
    label: 'Step 02',
    title: 'Practice hands-on',
    description: 'Every concept is followed by practical exercises that reflect real-world tasks, so you learn by doing.',
  },
  {
    icon: FolderGit2,
    label: 'Step 03',
    title: 'Build your mini project',
    description: 'Apply everything to a real-world dataset, optimize your queries and walk away with a portfolio piece.',
  },
  {
    icon: Mic,
    label: 'Step 04',
    title: 'Get interview-ready',
    description: 'Tackle interview-style scenarios and a mockup interview session to go from beginner to job-ready.',
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative w-full py-24 md:py-32">
      <div className="container mx-auto grid grid-cols-1 gap-14 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="Your journey"
            title={<>From beginner to <span className="text-gradient">job-ready</span> in 30 days</>}
            description="A clear, structured path — each stage builds on the last, so you always know what comes next."
          />
        </div>

        <ol className="relative space-y-6 pl-14 md:pl-16">
          <span className="absolute bottom-3 left-[19px] top-3 w-px bg-white/10 md:left-[23px]" aria-hidden="true" />
          <span className="absolute bottom-3 left-[19px] top-3 w-px bg-gradient-to-b from-primary via-[hsl(var(--glow))] to-accent md:left-[23px]" aria-hidden="true" />
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <MotionDiv delay={index * 0.05}>
                <span className="absolute -left-14 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background text-primary shadow-[0_0_0_6px_hsl(var(--background))] md:-left-16 md:h-12 md:w-12">
                  <step.icon className="h-4 w-4 md:h-5 md:w-5" />
                </span>
                <div className="surface surface-hover p-6 md:p-7">
                  <span className="font-code text-xs uppercase tracking-[0.16em] text-accent">{step.label}</span>
                  <h3 className="mt-2 font-headline text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              </MotionDiv>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
