import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 text-center md:flex-row md:px-6">
        <div className="text-sm text-foreground/70">
          <p className="font-semibold text-foreground">SQL Accelerator by Vivek Khanke</p>
          <p>Copyright © {new Date().getFullYear()}. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-foreground/70">
          <Link href="mailto:vickykhanke123@gmail.com" className="hover:text-primary">
            vickykhanke123@gmail.com
          </Link>
          <span className="hidden md:inline">|</span>
          <Link href="tel:+911234567890" className="hover:text-primary">
            +91 123-456-7890
          </Link>
        </div>
      </div>
    </footer>
  )
}
