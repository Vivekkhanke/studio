
"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const sqlCurriculum = [
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
        emoji: "🧪",
        title: "Module 11: Mini Project (Hands-on)",
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
    {
        emoji: "🎓",
        title: "Module 12: Interview & Certification Guidance",
        content: {
        learn: [
            "Mock interview",
            "Certifications Guidance",
        ],
        outcome: "Gain the confidence to ace technical interviews and earn industry-recognized certifications.",
        },
    },
];

const pythonCurriculum = [
  {
    emoji: "🐍",
    title: "Module 1: Introduction to Python",
    content: {
      learn: [
        "What is Python & its features",
        "Applications (Web, Data, AI, Automation)",
        "Installing Python & VS Code",
        "Running Python scripts",
        "Syntax basics & Comments",
      ],
      outcome: "Students can install Python and run their first programs.",
    },
  },
  {
    emoji: "📦",
    title: "Module 2: Variables and Data Types",
    content: {
      learn: [
        "Variables & Naming conventions",
        "Dynamic typing",
        "Data types: int, float, string, boolean",
        "Type checking: type()",
        "Type casting",
      ],
      outcome: "Understand how Python stores and manages data types.",
    },
  },
  {
    emoji: "➕",
    title: "Module 3: Operators",
    content: {
      learn: [
        "Arithmetic & Comparison operators",
        "Logical & Assignment operators",
        "Membership & Identity operators",
      ],
      outcome: "Perform calculations and logical comparisons.",
    },
  },
  {
    emoji: "⌨️",
    title: "Module 4: Input and Output",
    content: {
      learn: [
        "input() function for user interaction",
        "Output formatting",
        "Multiple inputs & Type conversion",
      ],
      outcome: "Build interactive command-line programs.",
    },
  },
  {
    emoji: "⚖️",
    title: "Module 5: Conditional Statements",
    content: {
      learn: [
        "if, if-else, if-elif-else",
        "Nested conditions",
        "Real Scenario: Grade calculator, Voting system",
      ],
      outcome: "Implement decision-making logic in code.",
    },
  },
  {
    emoji: "🔄",
    title: "Module 6: Loops",
    content: {
      learn: [
        "for loop & while loop",
        "break, continue statements",
        "Nested loops & Patterns",
      ],
      outcome: "Automate repetitive tasks efficiently.",
    },
  },
  {
    emoji: "🔤",
    title: "Module 7: Strings",
    content: {
      learn: [
        "Indexing and slicing",
        "String methods & Operations",
        "Palindrome checking & Reversing",
      ],
      outcome: "Master text data manipulation.",
    },
  },
  {
    emoji: "📋",
    title: "Module 8: Lists",
    content: {
      learn: [
        "List creation & Indexing",
        "Methods: append, insert, remove, pop",
        "Iterating through lists",
      ],
      outcome: "Manage dynamic collections of data.",
    },
  },
  {
    emoji: "🗃️",
    title: "Module 9: Tuples, Sets, and Dictionaries",
    content: {
      learn: [
        "Immutable Tuples",
        "Unordered Sets",
        "Key-value pairs in Dictionaries",
        "Dictionary methods & Nesting",
      ],
      outcome: "Work with structured and unique data collections.",
    },
  },
  {
    emoji: "⚙️",
    title: "Module 10: Functions",
    content: {
      learn: [
        "Defining functions & Parameters",
        "Return values & Default arguments",
        "Reusable code blocks",
      ],
      outcome: "Write modular and maintainable code.",
    },
  },
  {
    emoji: "📦",
    title: "Module 11: Modules and Packages",
    content: {
      learn: [
        "Importing math & random modules",
        "Creating custom modules",
        "Using pip for external packages",
      ],
      outcome: "Organize code into logical modules.",
    },
  },
  {
    emoji: "⚠️",
    title: "Module 12: Exception Handling",
    content: {
      learn: [
        "try, except, finally blocks",
        "Handling ZeroDivision & Type errors",
        "Safe program execution",
      ],
      outcome: "Prevent program crashes with robust error handling.",
    },
  },
  {
    emoji: "📁",
    title: "Module 13: File Handling",
    content: {
      learn: [
        "Opening modes (read, write, append)",
        "Reading and Writing text files",
        "Working with data persistence",
      ],
      outcome: "Save and retrieve data from physical files.",
    },
  },
  {
    emoji: "🏗️",
    title: "Module 14: Object Oriented Programming (OOP)",
    content: {
      learn: [
        "Class & Object concepts",
        "Constructor (__init__)",
        "Inheritance & Encapsulation",
      ],
      outcome: "Model real-world entities using OOP principles.",
    },
  },
  {
    emoji: "🚀",
    title: "Module 15: Mini Project",
    content: {
      learn: [
        "Student Management System",
        "ATM System simulation",
        "Contact Book application",
      ],
      outcome: "Build a complete portfolio-ready application.",
    },
  },
  {
    emoji: "💼",
    title: "Module 16: Interview Preparation",
    content: {
      learn: [
        "Common Python interview Q&A",
        "Logic building & Coding exercises",
        "Resume building tips",
      ],
      outcome: "Gain confidence for Python developer roles.",
    },
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="w-full bg-muted/30 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            📘 Comprehensive Learning Paths
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Step-by-step curriculum designed to take you from novice to job-ready in 30 days.
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Tabs defaultValue="sql" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="grid w-full max-w-md grid-cols-2 h-14 p-1.5 bg-card/50 rounded-xl border-2 border-primary/20 shadow-inner">
                <TabsTrigger 
                  value="sql" 
                  className="rounded-lg text-lg font-bold transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg hover:bg-primary/5"
                >
                  SQL Path
                </TabsTrigger>
                <TabsTrigger 
                  value="python" 
                  className="rounded-lg text-lg font-bold transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg hover:bg-primary/5"
                >
                  Python Path
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="sql" className="animate-fade-in focus-visible:outline-none">
              <CurriculumAccordion data={sqlCurriculum} label="View Full SQL Curriculum" />
            </TabsContent>

            <TabsContent value="python" className="animate-fade-in focus-visible:outline-none">
              <CurriculumAccordion data={pythonCurriculum} label="View Full Python Curriculum" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

function CurriculumAccordion({ data, label }: { data: any[], label: string }) {
  return (
    <Accordion type="single" collapsible className="w-full rounded-xl border bg-card p-2 shadow-sm transition-all duration-300 hover:shadow-xl">
      <AccordionItem value="full-curriculum" className="border-b-0">
        <AccordionTrigger className="py-5 px-4 text-left text-xl font-bold transition-all hover:no-underline group data-[state=open]:border-b">
          <span className="flex items-center gap-4 text-primary">
            <span className="text-2xl transition-transform duration-300 group-hover:rotate-6">📚</span>
            {label}
          </span>
        </AccordionTrigger>
        <AccordionContent className="overflow-hidden text-base transition-all">
          <div className="pt-6 px-2">
            <Accordion type="multiple" className="w-full space-y-3">
              {data.map((item, index) => (
                <div key={index} className="transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-0.5 rounded-lg border bg-background/50">
                  <AccordionItem value={`item-${index}`} className="border-b-0">
                    <AccordionTrigger className="py-4 px-5 text-left font-semibold transition-all hover:no-underline group">
                      <h3 className="flex w-full items-center gap-4 text-lg text-left">
                        <span className="text-2xl transition-transform duration-300 group-hover:scale-110">{item.emoji}</span>
                        <span className="group-hover:text-primary transition-colors">{item.title}</span>
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-4 pb-5 px-5 border-t animate-fade-in bg-muted/10">
                        <div>
                          <h4 className="font-bold text-primary text-sm uppercase tracking-wider">What you will learn</h4>
                          <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 list-none text-foreground/80 text-sm">
                            {item.content.learn.map((point: string, i: number) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-accent mt-0.5">●</span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-2 border-t border-dashed">
                          <h4 className="font-bold text-primary text-sm uppercase tracking-wider">Outcome</h4>
                          <p className="mt-2 text-foreground/80 text-sm italic">{item.content.outcome}</p>
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
  )
}
