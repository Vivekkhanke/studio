
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
import { useState } from "react"

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
          description: "Thanks for reaching out. We'll get back to you shortly.",
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
    <section id="contact" className="w-full bg-background py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-10 animate-fade-in-up">
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Interested in the Course? Register for More Information.
              </h2>
            </div>
            <div className="space-y-8">
              <a href="mailto:vickykhanke123@gmail.com" className="group flex items-center gap-5 p-4 rounded-xl transition-all duration-300 hover:bg-primary/5 hover:shadow-md">
                <div className="bg-primary/10 p-4 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-2xl group-hover:text-primary transition-colors">Email</h3>
                  <p className="text-foreground/80 text-lg">vickykhanke123@gmail.com</p>
                </div>
              </a>
              <a href="tel:+919130367814" className="group flex items-center gap-5 p-4 rounded-xl transition-all duration-300 hover:bg-primary/5 hover:shadow-md">
                <div className="bg-primary/10 p-4 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-2xl group-hover:text-primary transition-colors">Phone</h3>
                  <p className="text-foreground/80 text-lg">+91 9130367814</p>
                </div>
              </a>
              <div className="group flex items-center gap-5 p-4 rounded-xl transition-all duration-300 hover:bg-primary/5 hover:shadow-md">
                <div className="bg-primary/10 p-4 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-2xl group-hover:text-primary transition-colors">Support Hours</h3>
                  <p className="text-foreground/80 text-lg">Monday - Friday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="h-full p-8 shadow-xl bg-card/50 border-2 border-primary/10">
              <CardContent className="p-0">
                <h2 className="font-headline text-3xl font-bold text-primary mb-8">Register Here</h2>
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
                    <Button type="submit" size="lg" className="w-full transition-transform duration-300 ease-in-out hover:scale-105 disabled:hover:scale-100 font-bold text-lg" disabled={isSubmitting}>
                      {isSubmitting && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                      {isSubmitting ? 'Registering...' : 'Register'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
