import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Briefcase, Star } from "lucide-react"
import Link from "next/link"

export default function Instructor() {
  return (
    <section id="instructor" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Meet Your Instructor</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Learn from an industry expert with a passion for teaching and data.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <Card className="w-full max-w-4xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 md:flex">
            <div className="md:w-1/3 flex items-center justify-center bg-primary/5 p-8">
              <Image
                src="/image.png"
                alt="A professional portrait of the instructor, Vivek Khanke."
                data-ai-hint="professional portrait"
                width={200}
                height={200}
                className="rounded-full border-4 border-card object-cover shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="md:w-2/3">
              <CardContent className="p-8">
                <h3 className="font-headline text-2xl font-bold text-primary">Vivek Khanke</h3>
                <p className="mt-1 text-accent font-semibold">Data Engineer</p>
                <p className="mt-4 text-foreground/80">
                  Vivek is a seasoned data professional with over 4 years of experience building and optimizing data pipelines for tech startups and enterprise companies. He specializes in SQL performance tuning and has a knack for breaking down complex topics into easy-to-understand concepts.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                   <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-accent"/>
                    <span>4 Years of Experience</span>
                   </div>
                </div>
                <div className="mt-6">
                  <Link href="https://www.linkedin.com/in/vivek-khanke/" className="inline-flex items-center gap-2 text-primary transition-colors hover:text-accent">
                    <Linkedin className="h-5 w-5" />
                    Connect on LinkedIn
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
