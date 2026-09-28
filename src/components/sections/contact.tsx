
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2, Mail, Phone, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent } from "@/components/ui/card"
import MotionDiv from "@/components/ui/motion-div"
import SectionHeading from "@/components/ui/section-heading"
import { useState } from "react"

const contactItems = [
  { icon: Mail, label: "Email", value: "beginnertoproplus@gmail.com", href: "mailto:beginnertoproplus@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 91303 67814", href: "tel:+919130367814" },
  { icon: Clock, label: "Support hours", value: "Monday - Friday: 10:00 AM - 6:00 PM" },
]

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits."),
  subject: z.string().min(1, "Please select a subject."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500),
})

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. We\'ll get back to you shortly.",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Something went wrong.",
          description: result.message || "Please try again later.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative w-full overflow-hidden py-24 md:py-32">
      <div className="absolute -left-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-primary/15 blur-[140px]" aria-hidden="true" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Contact Information */}
          <div className="flex flex-col">
            <SectionHeading
              align="left"
              eyebrow="Get in touch"
              title={<>Interested in the course? <span className="text-gradient">Register for more information.</span></>}
              description="Fill in the form and we'll get back to you shortly."
            />
            <div className="mt-10 space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-inset ring-primary/25 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-code text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{label}</span>
                      <span className="mt-0.5 block truncate font-medium text-foreground">{value}</span>
                    </span>
                  </>
                )
                return href ? (
                  <a key={label} href={href} className="surface surface-hover group flex items-center gap-4 p-4">
                    {content}
                  </a>
                ) : (
                  <div key={label} className="surface group flex items-center gap-4 p-4">
                    {content}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Contact Form */}
          <MotionDiv delay={0.1}>
            <Card className="gradient-border h-full rounded-3xl border-0 bg-card/90 p-6 shadow-[0_30px_80px_-30px_hsl(var(--primary)/0.45)] sm:p-8">
              <CardContent className="p-0">
                <h2 className="font-headline text-2xl font-bold">Register here</h2>
                <p className="mt-1 mb-8 text-sm text-muted-foreground">All fields are required.</p>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="h-12"/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="you@example.com" {...field} className="h-12"/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mobile No. <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="+91 1234567890" {...field} className="h-12"/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject <span className="text-destructive">*</span></FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="course-inquiry">Course Inquiry</SelectItem>
                              <SelectItem value="enrollment">Enrollment</SelectItem>
                              <SelectItem value="technical-support">Technical Support</SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us how we can help..."
                              className="min-h-[140px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription className="text-right text-xs pt-1 pr-1">{field.value.length} / 500</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                      {isSubmitting ? 'Registering...' : 'Register'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
