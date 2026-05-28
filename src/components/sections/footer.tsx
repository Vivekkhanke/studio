import { Logo } from '@/components/ui/logo';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground" id="footer">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">BeginnerToPro</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Professional structural bootcamps designed to elevate programming capabilities for ambitious learners.
            </p>
            <div className="mt-4 flex items-center">
              <span className="text-yellow-400">★★★★☆</span>
              <span className="ml-2 text-sm text-muted-foreground">4.9 Cumulative Platform Rating</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Core Features</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Step-by-step SQL curriculum
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Hands-on Python projects
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Hands-on SQL projects
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  24/7 Q&A Mentor Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Help & Administration</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Questions? Connect immediately with our verified developer support team via email or live message channels.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BeginnerToPro. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
