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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { submitContactForm } from "@/lib/actions"
import { useState } from "react"

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  mobile: z.string().optional(),
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
    setIsSubmitting(true)
    const result = await submitContactForm(values)
    setIsSubmitting(false)

    if (result.success) {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. We'll get back to you shortly.",
      })
      form.reset()
    } else {
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: result.message || "Please try again later.",
      })
    }
  }

  return (
    <section id="contact" className="w-full bg-card py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Have a Question?</h2>
          <p className="mt-4 text-lg text-foreground/80">
            We're here to help. Fill out the form below, and our team will get back to you as soon as possible.
          </p>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-3">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 98765 43210" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="course-details">Course Details</SelectItem>
                            <SelectItem value="enrollment">Enrollment</SelectItem>
                            <SelectItem value="demo-session">Demo Session</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us what you'd like to know..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-right">{field.value.length} / 500</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                  {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isSubmitting ? 'Sending...' : 'Submit Query'}
                </Button>
              </form>
            </Form>
          </div>
          <div className="lg:col-span-2">
            <Card className="h-full bg-background">
                <CardHeader>
                    <CardTitle className="font-headline text-primary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                        <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                        <div>
                            <h3 className="font-semibold">Email Us</h3>
                            <a href="mailto:support@sqlaccelerator.com" className="text-foreground/80 hover:text-primary">support@sqlaccelerator.com</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                        <div>
                            <h3 className="font-semibold">Call Us</h3>
                            <a href="tel:+911234567890" className="text-foreground/80 hover:text-primary">+91 123-456-7890</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                        <div>
                            <h3 className="font-semibold">Support Hours</h3>
                            <p className="text-foreground/80">Monday - Friday</p>
                            <p className="text-foreground/80">10:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
