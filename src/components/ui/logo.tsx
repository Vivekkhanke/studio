import * as React from "react"

import { cn } from "@/lib/utils"

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  const id = React.useId()
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
      {...props}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop style={{ stopColor: "hsl(var(--primary))" }} />
          <stop offset="1" style={{ stopColor: "hsl(var(--accent))" }} />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill={`url(#${id})`} />
      <path d="M9 11l5 5-5 5" stroke="#0b0d14" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5 21.5H23" stroke="#0b0d14" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M22 8.5v5M19.5 11h5" stroke="#0b0d14" strokeOpacity=".75" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function Brand({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Logo />
      <span className="flex flex-col leading-none">
        <span className="font-headline text-[15px] font-bold tracking-tight text-foreground">
          BeginnerToPro<span className="text-accent">+</span>
        </span>
        <span className="mt-1 font-code text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Online Classes
        </span>
      </span>
    </span>
  )
}
