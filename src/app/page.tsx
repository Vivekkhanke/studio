import AnnouncementBar from '@/components/sections/announcement-bar';
import Navigation from '@/components/sections/navigation';
import Hero from '@/components/sections/hero';
import CourseOverview from '@/components/sections/course-overview';
import Curriculum from '@/components/sections/curriculum';
import MiniProject from '@/components/sections/mini-project';
import WhyChooseUs from '@/components/sections/why-choose-us';
import Instructor from '@/components/sections/instructor';
import Cta from '@/components/sections/cta';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <AnnouncementBar />
      <main className="flex-1">
        <Hero />
        <CourseOverview />
        <Curriculum />
        <MiniProject />
        <WhyChooseUs />
        <Instructor />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
