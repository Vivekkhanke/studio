import Image from "next/image"
import { Linkedin, Briefcase, Star, Users, ArrowUpRight } from "lucide-react"
import MotionDiv from "@/components/ui/motion-div"
import SectionHeading from "@/components/ui/section-heading"

const instructors = [
  {
    name: "Vivek Khanke",
    role: "Sr. Data Engineer",
    image: "/image.png",
    imageHint: "professional portrait",
    bio: "Vivek is an experienced Data Engineer with expertise in building scalable data pipelines, cloud-based data solutions, and modern data engineering practices. He is passionate about simplifying complex concepts and helping learners build practical, industry-ready skills.",
    highlights: [
      { icon: Briefcase, label: "Developer" },
      { icon: Star, label: "170+ Students Mentored" },
    ],
    linkedin: "https://www.linkedin.com/in/vivek-khanke/",
  },
  {
    name: "Kalyani Lanjewar",
    role: "Java Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMGZlbWFsZXxlbnwwfHx8fDE3MTg3MzQwNTB8MA&ixlib=rb-4.1.0&q=80&w=400",
    bio: "Enthusiastic Java developer with a focus on backend development, eager to learn, contribute innovative solutions. Trainer on personal development for teachers and students, skilled in improving teaching quality and learning outcomes. Experienced in Java programming language, specializing in Object-Oriented Programming in C++, Java, and C language fundamentals.",
    highlights: [
      { icon: Briefcase, label: "Java Developer" },
      { icon: Star, label: "4 Years Experience" },
      { icon: Users, label: "100+ Students Mentored" },
    ],
  },
]

export default function Instructor() {
  return (
    <section id="instructor" className="w-full border-y border-white/[0.05] bg-white/[0.015] py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Instructors"
          title={<>Meet your <span className="text-gradient">instructors</span></>}
          description="Learn from industry experts with a passion for teaching and technology."
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-5 lg:grid-cols-2">
          {instructors.map((person, index) => (
            <MotionDiv key={person.name} delay={index * 0.1}>
              <article className="surface surface-hover flex h-full flex-col p-7 md:p-8">
                <div className="flex items-center gap-5">
                  <div className="relative shrink-0 rounded-full bg-gradient-to-br from-primary to-accent p-[2px]">
                    <Image
                      src={person.image}
                      alt={`Portrait of ${person.name}`}
                      data-ai-hint={person.imageHint}
                      width={88}
                      height={88}
                      className="h-[88px] w-[88px] rounded-full border-4 border-card object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold tracking-tight">{person.name}</h3>
                    <span className="mt-1.5 inline-flex rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent ring-1 ring-inset ring-accent/25">
                      {person.role}
                    </span>
                  </div>
                </div>

                <p className="mt-6 flex-1 text-[15px] leading-relaxed text-muted-foreground">{person.bio}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {person.highlights.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-foreground/85"
                    >
                      <Icon className="h-3.5 w-3.5 text-primary" />
                      {label}
                    </li>
                  ))}
                </ul>

                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 inline-flex items-center gap-2 self-start border-t border-white/[0.07] pt-5 text-sm font-medium text-foreground/85 transition-colors hover:text-accent"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
              </article>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
