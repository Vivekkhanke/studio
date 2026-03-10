'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import MotionDiv from '@/components/ui/motion-div';

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-24">
          <div className="flex items-center justify-center">
            <MotionDiv animation="zoom-in">
              <Avatar className="h-64 w-64 border-4 border-primary shadow-lg">
                <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMG1hbGV8ZW58MHx8fHwxNzE4NzM0MDU0fDA&ixlib=rb-4.1.0&q=80&w=400" alt="Sagar Jadhav" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
            </MotionDiv>
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <MotionDiv animation="slide-in" delay={0.2}>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Meet Your Mentor: The Architect of Your Success
              </h2>
            </MotionDiv>
            <MotionDiv animation="slide-in" delay={0.4}>
              <h3 className="font-headline text-2xl font-semibold text-foreground/90">
                Sagar Jadhav - A Decade of Code, a Passion for Teaching
              </h3>
              <p className="mt-4 text-lg text-foreground/80">
                Sagar is not just an instructor; he's a seasoned industry veteran with over 10 years of hands-on experience in the dynamic IT landscape. His journey has been one of continuous learning and mastery, from crafting elegant code to architecting robust database solutions. Sagar's passion lies in demystifying technology and empowering aspiring developers to build not just projects, but successful careers.
              </p>
              <p className="mt-4 text-lg text-foreground/80">
                His teaching philosophy is simple: learn by doing. Through a meticulously designed, project-based curriculum, Sagar guides you through real-world challenges, ensuring you gain the practical skills and confidence needed to excel. Join him on this transformative journey and turn your coding aspirations into reality.
              </p>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
}
