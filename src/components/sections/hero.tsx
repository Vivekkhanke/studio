'use client';

import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Phone, PlayCircle, Rocket, Medal, Gem, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MotionDiv from '@/components/ui/motion-div';
import { cn } from '@/lib/utils';
import { CountUp } from '@/components/ui/motion-effects';

type Token = [kind: 'kw' | 'fn' | 'str' | 'num' | 'cm' | 'ty' | 'pl', text: string];

const tokenStyles: Record<Token[0], string> = {
  kw: 'text-[hsl(282_85%_75%)]',
  fn: 'text-[hsl(200_95%_68%)]',
  str: 'text-[hsl(95_60%_68%)]',
  num: 'text-[hsl(30_95%_68%)]',
  cm: 'text-muted-foreground/70 italic',
  ty: 'text-[hsl(45_95%_68%)]',
  pl: 'text-foreground/90',
};

const snippets: { id: string; file: string; output: string; lines: Token[][] }[] = [
  {
    id: 'sql',
    file: 'top_customers.sql',
    output: '5 rows returned · 12 ms',
    lines: [
      [['cm', '-- Top 5 customers by revenue']],
      [['kw', 'SELECT '], ['pl', 'c.name, '], ['fn', 'SUM'], ['pl', '(o.amount) '], ['kw', 'AS '], ['pl', 'revenue']],
      [['kw', 'FROM '], ['ty', 'customers '], ['pl', 'c']],
      [['kw', 'JOIN '], ['ty', 'orders '], ['pl', 'o '], ['kw', 'ON '], ['pl', 'o.customer_id = c.id']],
      [['kw', 'WHERE '], ['pl', 'o.created_at >= '], ['str', "'2026-01-01'"]],
      [['kw', 'GROUP BY '], ['pl', 'c.name']],
      [['kw', 'ORDER BY '], ['pl', 'revenue '], ['kw', 'DESC']],
      [['kw', 'LIMIT '], ['num', '5'], ['pl', ';']],
    ],
  },
  {
    id: 'python',
    file: 'sales_report.py',
    output: 'Report generated · 12 months analysed',
    lines: [
      [['cm', '# Analyse monthly sales with pandas']],
      [['kw', 'import '], ['pl', 'pandas '], ['kw', 'as '], ['pl', 'pd']],
      [],
      [['pl', 'df = pd.'], ['fn', 'read_csv'], ['pl', '('], ['str', '"sales.csv"'], ['pl', ')']],
      [['pl', 'monthly = df.'], ['fn', 'groupby'], ['pl', '('], ['str', '"month"'], ['pl', ')['], ['str', '"amount"'], ['pl', '].'], ['fn', 'sum'], ['pl', '()']],
      [['fn', 'print'], ['pl', '(monthly.'], ['fn', 'nlargest'], ['pl', '('], ['num', '3'], ['pl', '))']],
    ],
  },
  {
    id: 'java',
    file: 'Toppers.java',
    output: 'BUILD SUCCESSFUL · 3 students matched',
    lines: [
      [['cm', '// Filter top students with Streams']],
      [['ty', 'List'], ['pl', '<'], ['ty', 'Student'], ['pl', '> toppers = students.'], ['fn', 'stream'], ['pl', '()']],
      [['pl', '    .'], ['fn', 'filter'], ['pl', '(s -> s.'], ['fn', 'getScore'], ['pl', '() > '], ['num', '80'], ['pl', ')']],
      [['pl', '    .'], ['fn', 'sorted'], ['pl', '('], ['fn', 'comparing'], ['pl', '('], ['ty', 'Student'], ['pl', '::getScore))']],
      [['pl', '    .'], ['fn', 'toList'], ['pl', '();']],
      [['ty', 'System'], ['pl', '.out.'], ['fn', 'println'], ['pl', '(toppers);']],
    ],
  },
];

const highlights = [
  { icon: Rocket, label: '30 Days Course' },
  { icon: Medal, label: 'Mini Project Included' },
  { icon: Gem, label: 'Affordable Fee' },
];

const stats = [
  { value: 30, suffix: 'days', label: 'Intensive, structured program' },
  { value: 3, suffix: 'tracks', label: 'SQL · Python · Java' },
  { value: 150, suffix: '+', label: 'Students mentored' },
  { value: 4.9, decimals: 1, suffix: '★', label: 'Average learner rating' },
];

function CodeWindow() {
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = setInterval(() => setActive((i) => (i + 1) % snippets.length), 3500);
    return () => clearInterval(timer);
  }, [paused, reduceMotion]);

  const snippet = snippets[active];

  return (
    <div
      className="surface gradient-border relative overflow-hidden rounded-2xl bg-card/80 shadow-[0_40px_120px_-40px_hsl(var(--primary)/0.55)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center gap-4 border-b border-white/[0.07] px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div role="tablist" aria-label="Code examples" className="flex gap-1 overflow-x-auto">
          {snippets.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                'whitespace-nowrap rounded-md px-2.5 py-1 font-code text-xs transition-colors',
                i === active
                  ? 'bg-white/[0.08] text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {s.file}
            </button>
          ))}
        </div>
      </div>

      <div className="relative min-h-[244px] px-4 py-5 font-code text-[12.5px] leading-6 sm:text-[13px]">
        <AnimatePresence mode="wait">
          <motion.pre
            key={snippet.id}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="overflow-x-auto"
          >
            <code>
              {snippet.lines.map((line, i) => (
                <div key={i} className="flex">
                  <span className="mr-4 w-5 shrink-0 select-none text-right text-muted-foreground/40">{i + 1}</span>
                  <span>
                    {line.map(([kind, text], j) => (
                      <span key={j} className={tokenStyles[kind]}>{text}</span>
                    ))}
                    {i === snippet.lines.length - 1 && (
                      <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 animate-blink bg-accent/80" />
                    )}
                  </span>
                </div>
              ))}
            </code>
          </motion.pre>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-2 border-t border-white/[0.07] bg-black/20 px-4 py-2.5 font-code text-xs text-muted-foreground">
        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.5)]" />
        <span className="text-emerald-300/90">✓</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={snippet.id}
            aria-live="polite"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
          >
            {snippet.output}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative isolate w-full overflow-hidden pt-16 md:pt-24">
      {/* Ambient background */}
      <div className="bg-grid mask-fade absolute inset-0 -z-10" aria-hidden="true" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]" aria-hidden="true" />
      <div className="absolute right-0 top-40 -z-10 h-[360px] w-[360px] rounded-full bg-accent/15 blur-[120px]" aria-hidden="true" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <MotionDiv>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1 pl-1.5 pr-3 text-xs text-muted-foreground backdrop-blur">
                <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 font-medium text-emerald-300">Admissions open</span>
                Live online classes · Beginner friendly
              </span>
            </MotionDiv>

            <MotionDiv delay={0.05}>
              <h1 className="mt-6 font-headline text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[4rem]">
                Master <span className="text-gradient">SQL, Python &amp; Java</span> from scratch with real-world projects
              </h1>
            </MotionDiv>

            <MotionDiv delay={0.12}>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty">
                Join our intensive 30-day course and gain hands-on mastery through practical exercises and
                comprehensive mini-projects. Go from beginner to job-ready.
              </p>
            </MotionDiv>

            <MotionDiv delay={0.2} className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button size="lg" asChild>
                <a href="#contact">
                  Enroll Now <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://docs.google.com/forms/d/12s5ONe9wOQagevZVbT1HSy_awbKgSCNTp3rTc_zDgNo/viewform?edit_requested=true&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PlayCircle className="h-4 w-4" /> Request for Demo
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="tel:+919130367814">
                  <Phone className="h-4 w-4" /> Request a call
                </a>
              </Button>
            </MotionDiv>

            <MotionDiv delay={0.28}>
              <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground lg:justify-start">
                {highlights.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-accent" />
                    {label}
                  </li>
                ))}
              </ul>
            </MotionDiv>
          </div>

          <div className="relative mx-auto w-full max-w-xl [perspective:1200px]">
          <MotionDiv animation="zoom-in" delay={0.2} className="relative">
            <CodeWindow />
            <div className="absolute -bottom-14 right-10 hidden animate-float items-center gap-3 rounded-xl border border-white/10 bg-card/90 px-4 py-3 shadow-2xl backdrop-blur sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <span className="text-left text-sm leading-tight">
                <span className="block font-semibold">Mini project</span>
                <span className="text-xs text-muted-foreground">Portfolio-ready</span>
              </span>
            </div>
            <div className="absolute -right-3 -top-5 hidden animate-float items-center gap-1.5 rounded-full border border-white/10 bg-card/90 px-3 py-1.5 text-xs font-medium shadow-xl backdrop-blur [animation-delay:1.5s] sm:flex">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> 4.9 learner rating
            </div>
          </MotionDiv>
          </div>
        </div>

        <MotionDiv delay={0.35} className="mt-20 md:mt-24">
          <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  'flex flex-col gap-1 p-6 md:p-7',
                  i % 2 === 1 && 'border-l border-white/[0.07]',
                  i >= 2 && 'border-t border-white/[0.07] md:border-t-0',
                  i === 2 && 'md:border-l'
                )}
              >
                <dt className="order-2 text-sm text-muted-foreground">{stat.label}</dt>
                <dd className="order-1 font-headline text-3xl font-bold tracking-tight md:text-4xl">
                  <CountUp to={stat.value} decimals={stat.decimals} />
                  <span className="ml-1 text-lg font-semibold text-accent md:text-xl">{stat.suffix}</span>
                </dd>
              </div>
            ))}
          </dl>
        </MotionDiv>
      </div>
    </section>
  );
}
