"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const curriculumData = [
    {
        emoji: "🔰",
        title: "Module 1: SQL Fundamentals (Beginner)",
        content: {
        learn: [
            "What is SQL and where it is used",
            "Database vs DBMS vs RDBMS",
            "Tables, Rows, Columns, Keys",
            "Data types (INT, VARCHAR, DATE, DECIMAL, etc.)",
            "Core SQL Commands (SELECT, INSERT, UPDATE, DELETE, DISTINCT, LIMIT / TOP)",
        ],
        outcome: "You will be able to read and write basic SQL queries and understand how data is stored in tables.",
        },
    },
    {
        emoji: "🔍",
        title: "Module 2: Filtering & Sorting Data",
        content: {
        learn: [
            "WHERE clause",
            "AND, OR, NOT",
            "BETWEEN, IN",
            "LIKE, wildcards",
            "ORDER BY",
            "NULL handling",
        ],
        outcome: "Extract exact data needed for reports and analysis.",
        },
    },
    {
        emoji: "🧮",
        title: "Module 3: Aggregate Functions & Grouping",
        content: {
        learn: [
            "COUNT, SUM, AVG, MIN, MAX",
            "GROUP BY",
            "HAVING vs WHERE",
            "Real Scenario: Total sales per store",
            "Real Scenario: Average order value per customer",
        ],
        outcome: "Perform data summarization and business reporting.",
        },
    },
    {
        emoji: "🔗",
        title: "Module 4: Joins & Relationships",
        content: {
        learn: [
            "INNER JOIN",
            "LEFT JOIN",
            "RIGHT JOIN",
            "FULL JOIN",
            "Self Join",
            "Cross Join",
            "Real Scenario: Orders + Customers + Products (E-commerce / Retail)",
        ],
        outcome: "Combine data from multiple tables like a real project.",
        },
    },
    {
        emoji: "🧠",
        title: "Module 5: Subqueries & CTEs",
        content: {
        learn: [
            "Subqueries (Single-row, Multi-row)",
            "Correlated subqueries",
            "Common Table Expressions (CTE)",
            "Recursive CTE (basic intro)",
        ],
        outcome: "Write clean, readable, and optimized queries.",
        },
    },
    {
        emoji: "🪟",
        title: "Module 6: Window Functions (Advanced Analytics)",
        content: {
        learn: [
            "ROW_NUMBER",
            "RANK, DENSE_RANK",
            "LEAD, LAG",
            "PARTITION BY",
            "Running totals",
            "Real Scenario: Top N products per store",
            "Real Scenario: Customer purchase trend",
        ],
        outcome: "Handle interview-level and real-time analytics questions.",
        },
    },
    {
        emoji: "🗂️",
        title: "Module 7: Database Design & Normalization",
        content: {
        learn: [
            "Primary key & Foreign key",
            "1NF, 2NF, 3NF",
            "Star vs Snowflake schema",
            "OLTP vs OLAP",
        ],
        outcome: "Design scalable and optimized databases.",
        },
    },
    {
        emoji: "⚡",
        title: "Module 8: Indexes & Performance Tuning",
        content: {
        learn: [
            "What is an Index",
            "Types of Indexes (Clustered, Non-Clustered)",
            "When to use Index",
            "Index vs Full Table Scan",
            "Query optimization basics",
        ],
        outcome: "Improve query performance in production systems.",
        },
    },
    {
        emoji: "🧾",
        title: "Module 9: Views, Functions & Stored Procedures",
        content: {
        learn: [
            "Views & Materialized Views",
            "User Defined Functions",
            "Stored Procedures",
            "Advantages and use cases",
        ],
        outcome: "Build reusable and secure SQL logic.",
        },
    },
    {
        emoji: "🔐",
        title: "Module 10: SQL Constraints & Transactions",
        content: {
        learn: [
            "NOT NULL, UNIQUE, CHECK",
            "PRIMARY & FOREIGN KEY",
            "Transactions (COMMIT, ROLLBACK)",
            "ACID properties",
        ],
        outcome: "Maintain data integrity and reliability.",
        },
    },
    {
        emoji: "📊",
        title: "Module 11: SQL for BI & Analytics",
        content: {
        learn: [
            "SQL for Power BI / Tableau",
            "Query folding basics",
            "Creating analytical datasets",
            "SQL best practices for dashboards",
        ],
        outcome: "Become job-ready for Data Analyst / BI roles",
        },
    },
    {
        emoji: "🧪",
        title: "Module 12: Mini Project (Hands-on)",
        content: {
        learn: [
            "Project Example: Retail / E-commerce",
            "Sales analysis",
            "Customer behavior analysis",
            "Store-wise performance",
        ],
        outcome: "Real project experience for resume & interviews.",
        },
    },
];


export default function Curriculum() {
  return (
    <section id="curriculum" className="w-full bg-muted/30 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            📘 SQL Basics to Advanced – Complete Learning Path
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            A step-by-step curriculum designed to take you from novice to a job-ready SQL expert in 30 days.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="w-full rounded-lg border bg-card p-2 shadow-sm">
            <AccordionItem value="full-curriculum" className="border-b-0">
                <AccordionTrigger className="py-4 px-4 text-left text-lg font-semibold transition-all hover:no-underline data-[state=open]:border-b">
                    <span className="flex items-center gap-4">
                        <span className="text-2xl">📚</span>
                        View Full Curriculum
                    </span>
                </AccordionTrigger>
                <AccordionContent className="overflow-hidden text-base transition-all">
                    <div className="pt-4 px-2">
                      <Accordion type="multiple" className="w-full space-y-2">
                        {curriculumData.map((item, index) => (
                          <div key={index} className="transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 rounded-md border">
                            <AccordionItem value={`item-${index}`} className="border-b-0">
                              <AccordionTrigger className="py-4 px-4 text-left font-semibold transition-all hover:no-underline">
                                <h3 className="flex w-full items-center gap-4 text-lg text-left">
                                    <span className="text-2xl">{item.emoji}</span>
                                    {item.title}
                                </h3>
                              </AccordionTrigger>
                              <AccordionContent>
                                  <div className="space-y-4 pt-4 pb-4 px-4 border-t">
                                      <div>
                                          <h4 className="font-semibold text-primary text-sm">What you will learn</h4>
                                          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-foreground/80 text-sm">
                                          {item.content.learn.map((point, i) => (
                                              <li key={i}>{point}</li>
                                          ))}
                                          </ul>
                                      </div>
                                      <div>
                                          <h4 className="font-semibold text-primary text-sm">Outcome</h4>
                                          <p className="mt-2 text-foreground/80 text-sm">{item.content.outcome}</p>
                                      </div>
                                  </div>
                              </AccordionContent>
                            </AccordionItem>
                          </div>
                        ))}
                      </Accordion>
                    </div>
                </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
