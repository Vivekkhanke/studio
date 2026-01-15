import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Monitor, Users, IndianRupee } from "lucide-react"
import Link from "next/link"

export default function CourseOverview() {
  return (
    <section id="overview" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Course Overview</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Everything you need to know about our comprehensive SQL program, designed to take you from novice to pro.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <Card className="w-full max-w-2xl overflow-hidden shadow-2xl transition-all hover:shadow-accent/20">
            <CardHeader className="bg-primary p-6 text-primary-foreground">
              <CardTitle className="font-headline text-2xl">SQL Accelerator: Zero to Hero</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                An intensive, project-based SQL training program.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-semibold">Duration</p>
                    <p className="text-foreground/80">45 Days</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-semibold">Next Demo</p>
                    <p className="text-foreground/80">1st February</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Monitor className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-semibold">Mode</p>
                    <p className="text-foreground/80">Online</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <IndianRupee className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-semibold">Course Fee</p>
                    <p className="text-foreground/80">₹2999</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-foreground/90">
                This course is meticulously crafted to provide a deep understanding of SQL through hands-on practice. You'll work with real-world scenarios to build a solid foundation and advanced query-writing skills.
              </p>
            </CardContent>
            <CardFooter className="bg-muted/50 p-6">
               <Button asChild className="w-full">
                  <Link href="#contact">Enroll Now & Get Started</Link>
                </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
