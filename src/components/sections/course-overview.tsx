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
  Clock,
  Monitor,
  Users,
  IndianRupee,
  BarChart,
  Award,
  CheckCircle2,
  FileText,
  Video,
  InfinityIcon,
} from 'lucide-react';
import React from 'react';

const whatYouWillLearn = [
  'Master Python fundamentals from scratch',
  'Write complex SQL queries with confidence',
  'Build real-world projects to showcase your skills',
  'Understand database design and management',
  'Learn data analysis and visualization techniques',
  'Get certified and boost your career prospects',
];

const courseIncludes = [
  {
    icon: Video,
    text: '40+ hours of on-demand video',
  },
  {
    icon: FileText,
    text: '50+ articles and resources',
  },
  {
    icon: InfinityIcon,
    text: 'Full lifetime access',
  },
  {
    icon: Monitor,
    text: 'Access on mobile and desktop',
  },
  {
    icon: Award,
    text: 'Certificate of completion',
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
      className="w-full py-16 md:py-24 lg:py-32 bg-muted/20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <MotionDiv animation="fade-in">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">
                Python & SQL: From Zero to Hero
              </h2>
            </MotionDiv>
            <MotionDiv animation="fade-in" delay={0.2}>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">What you'll learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-foreground/90">
                    {whatYouWillLearn.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </MotionDiv>
            <MotionDiv animation="fade-in" delay={0.4} className="mt-8">
                <h3 className="font-headline text-2xl font-bold">Course Description</h3>
                <p className="mt-4 text-foreground/80 leading-relaxed">
                    Go beyond theory. This course is meticulously crafted for deep
                    understanding through hands-on practice. You'll work with
                    real-world scenarios, build a solid foundation in both Python and SQL, and master
                    advanced query-writing and programming skills. By the end, you'll have a portfolio of projects to prove your expertise.
                </p>
            </MotionDiv>
          </div>

          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <MotionDiv animation="slide-in" delay={0.3} className="lg:sticky lg:top-24">
              <Card className="overflow-hidden shadow-2xl transition-all duration-300 ease-in-out hover:shadow-accent/20 hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div className="bg-primary p-6 text-primary-foreground">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-baseline gap-3">
                        <span className="text-4xl font-bold">INR 3999</span>
                        <span className="text-xl font-medium text-primary-foreground/80 line-through">INR 7999</span>
                      </div>
                      <div className="text-lg font-bold bg-white/20 text-primary-foreground px-3 py-1.5 rounded-md">50% OFF</div>
                    </div>
                     <div className="font-semibold text-primary-foreground/90">
                      <span>for each course</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Button asChild className="w-full text-lg font-bold h-12 transition-transform duration-300 ease-in-out hover:scale-105">
                    <a href="#contact" onClick={handleScroll}>Enroll Now</a>
                  </Button>
                  <div className="mt-6">
                    <h3 className="font-headline text-lg font-semibold mb-4">This course includes:</h3>
                    <ul className="space-y-3 text-foreground/90">
                        {courseIncludes.map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/50 p-4 text-center">
                    <p className="text-sm text-foreground/70">Get a certificate of completion and boost your resume!</p>
                </CardFooter>
              </Card>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
}
