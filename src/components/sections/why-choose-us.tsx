import { Users, Lightbulb, IndianRupee, FileCode, UserCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import MotionDiv from "@/components/ui/motion-div"
import SectionHeading from "@/components/ui/section-heading"

const benefits = [
  {
    icon: Users,
    title: "Beginner-Friendly",
    description: "No prior experience needed. We start from the absolute basics.",
    className: "lg:col-span-2",
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
    <section id="why-us" className="relative w-full overflow-hidden py-24 md:py-32">
      <div className="absolute left-1/2 top-1/3 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" aria-hidden="true" />
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Why us"
          title={<>Why choose <span className="text-gradient">this course?</span></>}
          description="We provide a clear path to SQL proficiency with benefits designed for your success."
        />
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <MotionDiv key={benefit.title} delay={index * 0.06} className={cn(benefit.className)}>
              <div className="surface surface-hover group relative h-full overflow-hidden p-7">
                <benefit.icon
                  className="absolute -right-4 -top-4 h-28 w-28 text-white/[0.03] transition-transform duration-500 group-hover:scale-110"
                  aria-hidden="true"
                />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[hsl(var(--glow))] text-primary-foreground shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.9)]">
                  <benefit.icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-6 font-headline text-xl font-semibold">{benefit.title}</h3>
                <p className="relative mt-2 text-muted-foreground">{benefit.description}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
