import { ArrowRight, Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="relative z-50 bg-gradient-to-r from-[hsl(var(--glow))] via-primary to-[hsl(var(--glow))] text-primary-foreground">
      <a
        href="#contact"
        className="group container mx-auto flex items-center justify-center gap-3 px-4 py-2 text-xs font-medium sm:text-sm"
      >
        <span className="hidden items-center gap-1 rounded-full bg-black/10 px-2.5 py-0.5 font-code text-[10px] uppercase tracking-widest sm:inline-flex">
          <Sparkles className="h-3 w-3" />
          New batch
        </span>
        <span className="truncate">Upcoming batches update — Batch starts from 1st Aug</span>
        <span className="inline-flex shrink-0 items-center gap-1 font-semibold">
          Enroll now
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </a>
    </div>
  );
}
