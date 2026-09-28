import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import MotionDiv from "@/components/ui/motion-div"

export default function Cta() {
  return (
    <section id="cta" className="w-full py-24 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <MotionDiv animation="zoom-in">
          <div className="relative isolate overflow-hidden rounded-[2rem] gradient-border bg-card px-6 py-16 text-center shadow-[0_40px_120px_-50px_hsl(var(--primary)/0.6)] md:px-12 md:py-20">
            <div className="bg-grid absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" aria-hidden="true" />
            <div className="absolute -left-24 -top-24 -z-10 h-80 w-80 rounded-full bg-primary/25 blur-[100px]" aria-hidden="true" />
            <div className="absolute -bottom-28 -right-16 -z-10 h-80 w-80 rounded-full bg-accent/20 blur-[100px]" aria-hidden="true" />

            <span className="inline-flex eyebrow">
              Limited-time offer
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl font-headline text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">
              Ready to start? <span className="text-gradient">Get 50% off today!</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
              Don&apos;t wait to unlock the power of data. This special offer won&apos;t last long. Enroll now and take the
              first step towards a rewarding career in tech. Hurry up!
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href="#contact">
                  Enroll Now &amp; Save 50% <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+919130367814">
                  <Phone className="h-4 w-4" /> Request a call
                </a>
              </Button>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
