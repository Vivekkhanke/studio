import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Rocket, Medal, Gem } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-card pt-24 md:pt-32 lg:pt-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Master SQL from Scratch with Real-World Projects
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl">
            Join our intensive 45-day course and gain hands-on SQL mastery through practical exercises and a comprehensive mini-project. Go from beginner to job-ready.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="#contact">Enroll Now</Link>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Badge variant="accent" className="px-4 py-2 text-sm transition-transform hover:scale-105">
              <Rocket className="mr-2 h-4 w-4" />
              45 Days Course
            </Badge>
            <Badge variant="accent" className="px-4 py-2 text-sm transition-transform hover:scale-105">
              <Medal className="mr-2 h-4 w-4" />
              Mini Project Included
            </Badge>
            <Badge variant="accent" className="px-4 py-2 text-sm transition-transform hover:scale-105">
              <Gem className="mr-2 h-4 w-4" />
              Affordable Fee
            </Badge>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent"
        aria-hidden="true"
      />
       <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}
