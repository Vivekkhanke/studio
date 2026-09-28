"use client"

import * as React from "react"
import { Menu, ChevronDown, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { navLinks, courseLinks } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Brand } from "@/components/ui/logo"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

function useActiveSection(ids: string[]) {
  const [active, setActive] = React.useState(ids[0])

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])

  return active
}

const sectionIds = navLinks.map((link) => link.href.slice(1))

export default function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const active = useActiveSection(sectionIds)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-40 w-full px-3 pt-3">
      <div
        className={cn(
          "mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border pl-4 pr-2 transition-all duration-300",
          isScrolled
            ? "border-white/10 bg-background/75 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        )}
      >
        <a href="#home" aria-label="BeginnerToPro+ home">
          <Brand />
        </a>

        <nav className="hidden items-center gap-1 text-sm font-medium lg:flex" aria-label="Main">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 transition-colors",
                  isActive
                    ? "bg-white/[0.08] text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            )
          })}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 rounded-full px-3.5 py-2 text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=open]:text-foreground">
              Courses <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[260px] rounded-xl border-white/10 bg-card/95 p-1.5 backdrop-blur-xl">
              {courseLinks.map((link) => (
                <DropdownMenuItem key={link.label} asChild className="cursor-pointer rounded-lg px-3 py-2.5">
                  <a href={link.href}>{link.label}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center gap-1">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#contact">
              Enroll Now <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[300px] flex-col border-white/10 bg-card p-0">
              <div className="border-b border-white/10 p-5">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <Brand />
              </div>
              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3" aria-label="Mobile">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <a
                      href={link.href}
                      className={cn(
                        "rounded-xl px-4 py-3 text-base transition-colors",
                        active === link.href.slice(1)
                          ? "bg-white/[0.07] text-foreground"
                          : "text-muted-foreground hover:bg-white/[0.04] hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <Collapsible>
                  <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-xl px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground">
                    Courses
                    <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="ml-4 border-l border-white/10 pl-2">
                    {courseLinks.map((link) => (
                      <SheetClose key={link.label} asChild>
                        <a
                          href={link.href}
                          className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              </nav>
              <div className="border-t border-white/10 p-4">
                <SheetClose asChild>
                  <Button asChild size="lg" className="w-full">
                    <a href="#contact">Enroll Now</a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
