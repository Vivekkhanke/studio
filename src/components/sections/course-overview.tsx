import { Button } from '@/components/ui/button';
import MotionDiv from '@/components/ui/motion-div';
import SectionHeading from '@/components/ui/section-heading';
import {
  Monitor,
  Award,
  Check,
  FileText,
  Video,
  InfinityIcon,
  ArrowRight,
  Code2,
  Database,
  FolderGit2,
  Layers,
  LineChart,
  BadgeCheck,
} from 'lucide-react';

const whatYouWillLearn = [
  { icon: Code2, text: 'Master Python fundamentals from scratch' },
  { icon: Database, text: 'Write complex SQL queries with confidence' },
  { icon: FolderGit2, text: 'Build real-world projects to showcase your skills' },
  { icon: Layers, text: 'Understand database design and management' },
  { icon: LineChart, text: 'Learn data analysis and visualization techniques' },
  { icon: BadgeCheck, text: 'Get certified and boost your career prospects' },
];

const courseIncludes = [
  { icon: Video, text: '40+ hours of on-demand video' },
  { icon: FileText, text: '50+ articles and resources' },
  { icon: InfinityIcon, text: 'Full lifetime access' },
  { icon: Monitor, text: 'Access on mobile and desktop' },
  { icon: Award, text: 'Certificate of completion' },
];

export default function CourseOverview() {
  return (
    <section id="overview" className="relative w-full py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px] lg:gap-14">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Course overview"
              title={
                <>
                  Python &amp; SQL: <span className="text-gradient">From Zero to Hero</span>
                </>
              }
              description="Go beyond theory. This course is meticulously crafted for deep understanding through hands-on practice. You'll work with real-world scenarios, build a solid foundation in both Python and SQL, and master advanced query-writing and programming skills. By the end, you'll have a portfolio of projects to prove your expertise."
            />

            <h3 className="mt-12 font-headline text-lg font-semibold">What you&apos;ll learn</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {whatYouWillLearn.map(({ icon: Icon, text }, index) => (
                <MotionDiv key={text} delay={index * 0.05}>
                  <div className="surface surface-hover flex h-full items-start gap-4 p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-accent/10 text-primary ring-1 ring-inset ring-primary/20">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="pt-2 text-[15px] leading-snug text-foreground/90">{text}</span>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>

          <MotionDiv animation="slide-in" delay={0.15} className="lg:sticky lg:top-24 lg:self-start">
            <div className="gradient-border relative overflow-hidden rounded-3xl bg-card shadow-[0_30px_80px_-30px_hsl(var(--primary)/0.5)]">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
              <div className="relative p-7">
                <div className="flex items-center justify-between">
                  <span className="font-code text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Limited offer
                  </span>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300 ring-1 ring-inset ring-emerald-400/30">
                    50% OFF
                  </span>
                </div>
                <div className="mt-5 flex items-end gap-3">
                  <span className="font-headline text-5xl font-extrabold tracking-tight">₹3,999</span>
                  <span className="mb-1.5 text-lg text-muted-foreground line-through">₹7,999</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">for each course · INR</p>

                <Button asChild size="lg" className="mt-7 w-full">
                  <a href="#contact">
                    Enroll Now <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>

                <div className="mt-8 border-t border-white/[0.07] pt-6">
                  <h3 className="text-sm font-semibold">This course includes</h3>
                  <ul className="mt-4 space-y-3 text-sm text-foreground/85">
                    {courseIncludes.map(({ icon: Icon, text }) => (
                      <li key={text} className="flex items-center gap-3">
                        <Icon className="h-4 w-4 shrink-0 text-accent" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative flex items-center gap-2 border-t border-white/[0.07] bg-white/[0.02] px-7 py-4 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-emerald-300" />
                Get a certificate of completion and boost your resume!
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
