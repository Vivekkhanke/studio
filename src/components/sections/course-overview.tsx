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
          <Card className="w-full max-w-2xl overflow-hidden shadow-2xl transition-all duration-300 ease-in-out hover:shadow-accent/20 hover:-translate-y-2">
            <CardHeader className="bg-primary p-6 text-primary-foreground">
              <CardTitle className="font-headline text-2xl">SQL by Vivek: Zero to Hero</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                An intensive, project-based SQL training program.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-6 text-center">
                <h3 className="font-headline text-2xl font-bold uppercase text-destructive animate-pulse">
                  Limited Time Offer: 50% OFF!
                </h3>
                <p className="mt-1 text-foreground/80">Enroll now and get the complete course for just ₹2999 only. Hurry up!</p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-semibold">Duration</p>
                    <p className="text-foreground/80">30 Days</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-semibold">Batch Starts</p>
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
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-primary">₹2999 only</span>
                        <span className="text-md font-medium text-muted-foreground line-through">₹6000</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-foreground/90">
                This course is meticulously crafted to provide a deep understanding of SQL through hands-on practice. You'll work with real-world scenarios to build a solid foundation and advanced query-writing skills.
              </p>
            </CardContent>
            <CardFooter className="bg-muted/50 p-6">
               <Button asChild className="w-full transition-transform duration-300 ease-in-out hover:scale-105">
                  <Link href="#contact">Enroll Now & Claim Your 50% Discount</Link>
                </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
