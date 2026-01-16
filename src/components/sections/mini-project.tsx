import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Table, Zap, Briefcase } from "lucide-react"

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
]

export default function MiniProject() {
  const projectImage = PlaceHolderImages.find(p => p.id === "project-showcase")

  return (
    <section id="project" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <span className="font-headline text-sm font-semibold uppercase tracking-wider text-accent">Hands-On Learning</span>
              <h2 className="mt-2 font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Solidify Your Skills with a Mini-Project</h2>
            </div>
            <p className="mt-4 text-lg text-foreground/80">
              Theory is important, but practice is where mastery happens. Our capstone mini-project challenges you to apply your SQL knowledge to solve real-world business problems.
            </p>
            <div className="mt-8 space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-semibold">{feature.title}</h3>
                    <p className="mt-1 text-foreground/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            {projectImage && (
              <Image
                src={projectImage.imageUrl}
                alt={projectImage.description}
                data-ai-hint={projectImage.imageHint}
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-2xl transition-transform duration-300 hover:scale-105"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
