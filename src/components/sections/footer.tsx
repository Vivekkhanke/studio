import { Mail, Phone, Star } from 'lucide-react';
import { Brand } from '@/components/ui/logo';
import { navLinks, courseLinks } from '@/lib/site';

const coreFeatures = [
  'Step-by-step SQL curriculum',
  'Hands-on Python projects',
  'Hands-on SQL projects',
  '24/7 Q&A Mentor Support',
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/[0.06] pt-20">
      <div className="bg-grid absolute inset-0 -z-10 opacity-60 [mask-image:linear-gradient(to_bottom,#000,transparent_70%)]" aria-hidden="true" />
      <div className="absolute left-1/2 top-0 -z-10 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/70 to-transparent" aria-hidden="true" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Brand />
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">
              Professional structured bootcamps designed to elevate programming capabilities for ambitious learners.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm">
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span className="font-semibold">4.9</span>
              <span className="text-muted-foreground">cumulative platform rating</span>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {coreFeatures.map((feature) => (
                <li key={feature} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <nav className="md:col-span-2" aria-label="Footer">
            <h3 className="font-code text-xs uppercase tracking-[0.16em] text-muted-foreground">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-foreground/80 transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <h3 className="font-code text-xs uppercase tracking-[0.16em] text-muted-foreground">Courses</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {courseLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-foreground/80 transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-code text-xs uppercase tracking-[0.16em] text-muted-foreground">Help &amp; Administration</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Questions? Connect immediately with our verified developer support team.
            </p>
            <div className="mt-4 space-y-2.5 text-sm">
              <a href="mailto:beginnertoproplus@gmail.com" className="flex items-center gap-2 text-foreground/80 transition-colors hover:text-accent">
                <Mail className="h-4 w-4" /> beginnertoproplus@gmail.com
              </a>
              <a href="tel:+919130367814" className="flex items-center gap-2 text-foreground/80 transition-colors hover:text-accent">
                <Phone className="h-4 w-4" /> +91 91303 67814
              </a>
            </div>
          </div>
        </div>

        <p
          className="pointer-events-none mt-16 select-none text-center font-headline text-[15vw] font-extrabold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_hsl(var(--foreground)/0.08)] md:text-[11vw]"
          aria-hidden="true"
        >
          BeginnerToPro+
        </p>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/[0.06] py-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} BeginnerToPro+. All Rights Reserved.</p>
          <p>
            Transform your career with industry-ready <span className="text-gradient font-semibold">SQL &amp; Python</span> skills.
          </p>
        </div>
      </div>
    </footer>
  );
}
