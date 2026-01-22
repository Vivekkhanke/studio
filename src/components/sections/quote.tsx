
import { Quote as QuoteIcon } from 'lucide-react'

export default function Quote() {
  return (
    <section className="w-full bg-primary py-16 text-primary-foreground md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
          <QuoteIcon className="mx-auto h-12 w-12 text-accent transition-transform duration-500 hover:scale-125 hover:rotate-12" />
          <blockquote className="mt-6">
            <p className="font-headline text-2xl font-semibold italic md:text-3xl lg:text-4xl">
              "SQL doesn't just query data — it tells the story hidden inside it."
            </p>
          </blockquote>
          <footer className="mt-6 text-sm uppercase tracking-wider text-primary-foreground/70">
            - Vivek khanke
          </footer>
        </div>
      </div>
    </section>
  )
}
