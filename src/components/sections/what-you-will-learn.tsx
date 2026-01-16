import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Search, Link2, Layers, Sigma, FunctionSquare, Clock, Gauge } from "lucide-react"

const topics = [
  { icon: Database, title: "SQL Basics", description: "Core concepts and syntax" },
  { icon: Search, title: "SELECT Queries", description: "Mastering data retrieval" },
  { icon: Link2, title: "Joins", description: "Combining data from tables" },
  { icon: Layers, title: "Subqueries", description: "Nesting queries for complex logic" },
  { icon: Sigma, title: "Aggregations", description: "Summarizing data with functions" },
  { icon: FunctionSquare, title: "Functions", description: "Window and advanced functions" },
  { icon: Clock, title: "Real-time Scenarios", description: "Applying SQL to business problems" },
  { icon: Gauge, title: "Query Optimization", description: "Writing efficient, fast queries" },
]

export default function WhatYouWillLearn() {
  return (
    <section id="curriculum" className="w-full bg-card py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">What You Will Learn</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Our curriculum is designed to cover the entire spectrum of SQL skills required in the industry today.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic, index) => (
            <Card key={index} className="group flex flex-col items-center text-center p-6 transition-all duration-300 hover:bg-accent/10 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <topic.icon className="h-8 w-8" />
              </div>
              <CardHeader className="p-0">
                <CardTitle className="font-headline text-xl">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <p className="text-foreground/70">{topic.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
