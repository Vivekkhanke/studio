import Navigation from '@/components/sections/navigation';
import Hero from '@/components/sections/hero';
import CourseOverview from '@/components/sections/course-overview';
import Curriculum from '@/components/sections/curriculum';
import MiniProject from '@/components/sections/mini-project';
import Quote from '@/components/sections/quote';
import WhyChooseUs from '@/components/sections/why-choose-us';
import Instructor from '@/components/sections/instructor';
import Cta from '@/components/sections/cta';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <CourseOverview />
        <Curriculum />
        <MiniProject />
        <Quote />
        <WhyChooseUs />
        <Instructor />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
