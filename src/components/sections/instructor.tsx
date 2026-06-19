
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Briefcase, Star, Users } from "lucide-react"
import Link from "next/link"
import MotionDiv from "@/components/ui/motion-div"

export default function Instructor() {
  return (
    <section id="instructor" className="w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <MotionDiv animation="fade-in-up" className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Meet Your Instructors</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Learn from industry experts with a passion for teaching and technology.
          </p>
        </MotionDiv>
        <div className="mt-12 grid gap-12 md:grid-cols-1 lg:grid-cols-2 lg:gap-8">
          <MotionDiv animation="slide-in" delay={0.2} className="w-full max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 md:flex h-full">
              <div className="md:w-1/3 flex items-center justify-center bg-primary/5 p-8">
                <MotionDiv animation="fade-in" delay={0.4}>
                  <Image
                    src="/image.png"
                    alt="A professional portrait of the instructor, Vivek Khanke."
                    data-ai-hint="professional portrait"
                    width={200}
                    height={200}
                    className="rounded-full border-4 border-card object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                  />
                </MotionDiv>
              </div>
              <div className="md:w-2/3 flex flex-col">
                <CardContent className="p-8 flex-grow">
                  <MotionDiv animation="fade-in-up" delay={0.5}>
                    <h3 className="font-headline text-2xl font-bold text-primary">Vivek Khanke</h3>
                  </MotionDiv>
                  <MotionDiv animation="fade-in-up" delay={0.6}>
                    <p className="mt-1 text-white font-semibold">Data Engineer</p>
                  </MotionDiv>
                  <MotionDiv animation="fade-in-up" delay={0.7}>
                    <p className="mt-4 text-foreground/80">
                    Vivek is an experienced Data Engineer with expertise in building scalable data pipelines, cloud-based data solutions, and modern data engineering practices. He is passionate about simplifying complex concepts and helping learners build practical, industry-ready skills.
                    </p>
                  </MotionDiv>
                  <MotionDiv animation="fade-in-up" delay={0.8}>
                    <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                       <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-accent"/>
                        <span>Developer</span>
                       </div>
                       <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-accent"/>
                        <span>50+ Students Mentored</span>
                       </div>
                    </div>
                  </MotionDiv>
                </CardContent>
                <div className="p-8 pt-0">
                  <MotionDiv animation="fade-in-up" delay={0.9}>
                    <Link href="https://www.linkedin.com/in/vivek-khanke/" className="inline-flex items-center gap-2 text-primary transition-colors hover:text-accent">
                      <Linkedin className="h-5 w-5" />
                      Connect on LinkedIn
                    </Link>
                  </MotionDiv>
                </div>
              </div>
            </Card>
          </MotionDiv>
          
          <MotionDiv animation="slide-in" delay={0.4} className="w-full max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 md:flex h-full">
              <div className="md:w-1/3 flex items-center justify-center bg-primary/5 p-8">
                <MotionDiv animation="fade-in" delay={0.6}>
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMGZlbWFsZXxlbnwwfHx8fDE3MTg3MzQwNTB8MA&ixlib=rb-4.1.0&q=80&w=400"
                    alt="A professional portrait of the instructor, Pooja M."
                    width={200}
                    height={200}
                    className="rounded-full border-4 border-card object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                  />
                </MotionDiv>
              </div>
              <div className="md:w-2/3 flex flex-col">
                <CardContent className="p-8 flex-grow">
                  <MotionDiv animation="fade-in-up" delay={0.7}>
                    <h3 className="font-headline text-2xl font-bold text-primary">Pooja M</h3>
                  </MotionDiv>
                  <MotionDiv animation="fade-in-up" delay={0.8}>
                    <p className="mt-1 text-white font-semibold">Senior Test Specialist</p>
                  </MotionDiv>
                  <MotionDiv animation="fade-in-up" delay={0.9}>
                    <p className="mt-4 text-foreground/80">
                    Payments QA Specialist with 11+ years of experience in Functional and Automation Testing, specializing in GPP SP, GPP Classic, Fintech, and Digital Payments. Expertise in ISO 20022 (MT/MX), API Testing, Integration Testing, NACHA, and FEDWIRE payment systems. Skilled in Selenium Java, BDD (Cucumber), Tricentis Tosca, TestNG, Postman, Jira, Confluence, and GitHub, with extensive experience across Web, Java, Desktop, and Mainframe applications. Strong domain knowledge in BFSI and Telecom, working in Agile and Waterfall environments.
                    </p>
                  </MotionDiv>
                  <MotionDiv animation="fade-in-up" delay={1.0}>
                    <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                       <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-accent"/>
                        <span>Software Tester / Developer</span>
                       </div>
                       <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-accent"/>
                        <span>11+ Years Experience</span>
                       </div>
                       <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-accent"/>
                        <span>100+ Students Mentored</span>
                       </div>
                    </div>
                  </MotionDiv>
                </CardContent>
              </div>
            </Card>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
