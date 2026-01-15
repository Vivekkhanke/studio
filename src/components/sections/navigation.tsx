"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Database } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#overview", label: "Overview" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#project", label: "Project" },
  { href: "#instructor", label: "Instructor" },
  { href: "#contact", label: "Contact" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-card/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2 font-headline text-lg font-semibold text-primary">
          <Database className="h-6 w-6" />
          <span>SQL Accelerator</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-foreground/80 transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline">
            <Link href="#contact">Book Free Demo</Link>
          </Button>
          <Button asChild>
            <Link href="#contact">Enroll Now</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-card">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b p-4">
                  <Link href="#home" className="flex items-center gap-2 font-headline text-lg font-semibold text-primary">
                    <Database className="h-6 w-6" />
                    <span>SQL Accelerator</span>
                  </Link>
                  <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                      </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-1 flex-col gap-4 p-4">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                      <Link href={link.href} className="text-lg text-foreground/80 transition-colors hover:text-primary">
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-2 border-t p-4">
                  <Button asChild variant="outline" size="lg">
                    <Link href="#contact">Book Free Demo</Link>
                  </Button>
                  <Button asChild size="lg">
                    <Link href="#contact">Enroll Now</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
