'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import MotionDiv from '@/components/ui/motion-div';
import {
  Calendar,
  Clock,
  Monitor,
  Users,
  IndianRupee,
  BarChart,
} from 'lucide-react';
import React from 'react';

const overviewItems = [
  {
    icon: Clock,
    label: 'Duration',
    value: '30+ Days',
  },
  {
    icon: Calendar,
    label: 'Batch Starts',
    value: '10th March',
  },
  {
    icon: Monitor,
    label: 'Mode',
    value: 'Online',
  },
  {
    icon: BarChart,
    label: 'Skill Level',
    value: 'Beginner to Pro',
  },
  {
    icon: Users,
    label: 'Who is this for',
    value: 'Students & Professionals',
  },
];

export default function CourseOverview() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="overview"
      className="w-full py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <MotionDiv animation="fade-in" className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Course Overview
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Unlock your data potential. Here's everything you need to know about
            our comprehensive program designed to make you a SQL pro.
          </p>
        </MotionDiv>
        <MotionDiv
          animation="fade-in"
          delay={0.2}
          className="mt-12 flex justify-center"
        >
          <Card className="w-full max-w-3xl overflow-hidden shadow-2xl transition-all duration-300 ease-in-out hover:shadow-accent/20 hover:-translate-y-2">
            <CardHeader className="bg-primary p-6 text-primary-foreground">
              <CardTitle className="font-headline text-2xl">
                Python & SQL: Zero to Hero
              </CardTitle>
              <CardDescription className="text-primary-foreground/80">
                An intensive, project-based training program to master Python and
                SQL.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <MotionDiv animation="fade-in" delay={0.4} className="mb-8 text-center">
                <h3 className="font-headline text-2xl font-bold uppercase text-destructive animate-pulse">
                  Limited Time Offer: 50% OFF!
                </h3>
                <p className="mt-1 text-foreground/80">
                  Enroll now and get the complete course for just ₹2999 per
                  subject. This offer is for a limited time only!
                </p>
              </MotionDiv>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {overviewItems.map((item, index) => (
                  <MotionDiv
                    key={index}
                    animation="slide-in"
                    delay={0.2 * (index + 1)}
                  >
                    <div
                      className="group flex items-center gap-4 rounded-lg border bg-background p-4 transition-all duration-300 ease-in-out hover:bg-muted/50 hover:scale-105 transform cursor-pointer"
                    >
                      <item.icon className="h-8 w-8 text-accent group-hover:animate-bounce" />
                      <div>
                        <p className="font-semibold text-base">{item.label}</p>
                        <p className="text-foreground/80 text-sm">{item.value}</p>
                      </div>
                    </div>
                  </MotionDiv>
                ))}
                 <MotionDiv
                    animation="slide-in"
                    delay={1.2}
                    className="lg:col-span-3"
                  >
                  <div
                    className="group flex items-center gap-4 rounded-lg border bg-background p-4 transition-all duration-300 ease-in-out hover:bg-muted/50 hover:scale-105 transform cursor-pointer"
                  >
                    <IndianRupee className="h-8 w-8 text-accent group-hover:animate-bounce" />
                    <div>
                      <p className="font-semibold text-base">Course Fee</p>
                       <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-primary">₹2999 only per subject</span>
                        <span className="text-md font-medium text-muted-foreground line-through">₹6000</span>
                    </div>
                    </div>
                  </div>
                  </MotionDiv>
              </div>

              <MotionDiv animation="fade-in" delay={1.4} className="text-center">
                <p className="mt-6 text-foreground/90 leading-relaxed">
                  Go beyond theory. This course is meticulously crafted for deep
                  understanding through hands-on practice. You'll work with
                  real-world scenarios, build a solid foundation, and master
                  advanced query-writing skills.
                </p>
              </MotionDiv>
            </CardContent>
            <CardFooter className="bg-muted/50 p-6">
              <Button
                asChild
                className="w-full text-lg"
              >
                <a href="#contact" onClick={handleScroll}>
                  Enroll Now & Claim Your 50% Discount
                </a>
              </Button>
            </CardFooter>
          </Card>
        </MotionDiv>
      </div>
    </section>
  );
}
