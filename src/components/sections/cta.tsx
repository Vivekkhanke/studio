import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Cta() {
  return (
    <section id="cta" className="w-full bg-accent py-16 md:py-24">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 text-center md:px-6">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
          Start Your SQL Journey Today
        </h2>
        <p className="max-w-2xl text-accent-foreground/80 md:text-lg">
          Don't wait to unlock the power of data. Enroll now and take the first step towards a rewarding career in tech.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild variant="secondary" className="transition-transform duration-300 ease-in-out hover:scale-105 animate-float">
            <Link href="#contact">Enroll Now</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
