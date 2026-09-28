import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Table, Zap, Briefcase, Mic, Trophy } from "lucide-react"
import MotionDiv from "@/components/ui/motion-div"
import SectionHeading from "@/components/ui/section-heading"

const features = [
  {
    icon: Table,
    title: "Real-world Dataset",
    description: "Analyze a complex dataset that mimics industry challenges.",
  },
  {
    icon: Zap,
    title: "Query Optimization",
    description: "Learn to write high-performance queries for large-scale data.",
  },
  {
    icon: Briefcase,
    title: "Interview-Ready Scenarios",
    description: "Tackle problems frequently asked in technical interviews.",
  },
  {
    icon: Mic,
    title: "Mockup Interview Session",
    description: "Practice your skills in a simulated interview environment.",
  },
]

export default function MiniProject() {
  const projectImage = PlaceHolderImages.find(p => p.id === "project-showcase")

  return (
    <section id="project" className="w-full overflow-hidden py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Hands-on learning"
              title={<>Solidify your skills with a <span className="text-gradient">mini-project</span></>}
              description="Theory is important, but practice is where mastery happens. Our capstone mini-project challenges you to apply your SQL knowledge to solve real-world business problems."
            />
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {features.map((feature, index) => (
                <MotionDiv key={feature.title} delay={index * 0.06}>
                  <div className="surface surface-hover group h-full p-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-inset ring-primary/25 transition-transform duration-300 group-hover:scale-110">
                      <feature.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-headline text-base font-semibold">{feature.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>

          <MotionDiv animation="zoom-in" delay={0.15} className="relative">
            <div className="absolute inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-primary/40 to-accent/30 blur-3xl" aria-hidden="true" />
            <div className="gradient-border overflow-hidden rounded-3xl bg-card p-2 shadow-2xl">
              <div className="flex items-center gap-1.5 px-3 pb-2.5 pt-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-3 h-5 flex-1 rounded-md bg-white/[0.04] px-2 font-code text-[10px] leading-5 text-muted-foreground">
                  capstone / sales-analytics-dashboard
                </span>
              </div>
              {projectImage && (
                <Image
                  src={projectImage.imageUrl}
                  alt={projectImage.description}
                  data-ai-hint={projectImage.imageHint}
                  width={720}
                  height={480}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                />
              )}
            </div>
            <div className="absolute -bottom-5 right-6 flex animate-float items-center gap-3 rounded-xl border border-white/10 bg-card/95 px-4 py-3 shadow-2xl backdrop-blur">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400/15 text-amber-300">
                <Trophy className="h-5 w-5" />
              </span>
              <span className="text-sm leading-tight">
                <span className="block font-semibold">Capstone project</span>
                <span className="text-xs text-muted-foreground">Add it to your portfolio</span>
              </span>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
