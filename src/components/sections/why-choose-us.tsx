import { Card, CardContent } from "@/components/ui/card"
import { Users, Lightbulb, IndianRupee, FileCode, UserCheck } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Beginner-Friendly",
    description: "No prior experience needed. We start from the absolute basics.",
  },
  {
    icon: Lightbulb,
    title: "Practical Approach",
    description: "Focus on hands-on exercises that reflect real-world tasks.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "High-quality education without the high cost of bootcamps.",
  },
  {
    icon: FileCode,
    title: "Mini Project",
    description: "Build a portfolio piece to showcase your skills to employers.",
  },
  {
    icon: UserCheck,
    title: "Interview Focus",
    description: "We cover common interview questions and optimization techniques.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="w-full bg-card py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Why Choose This Course?</h2>
          <p className="mt-4 text-lg text-foreground/80">
            We provide a clear path to SQL proficiency with benefits designed for your success.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="group flex items-start gap-4 rounded-lg p-4 transition-all duration-300 hover:bg-accent/10 hover:-translate-y-1 hover:shadow-lg animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 group-hover:scale-110">
                <benefit.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-headline text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-foreground/70">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
