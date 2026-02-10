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
        emoji: "🤝",
        title: "Module 12: Interview Preparations",
        content: {
        learn: [
            "Mock Interviews",
            "Interview Guidance",
        ],
        outcome: "Gain confidence and be fully prepared for technical SQL interviews.",
        },
    },
];

const pythonCurriculum = [
    {
        emoji: "🟢",
        title: "Module 1: Introduction to Programming",
        content: {
            learn: [
                "What is programming?",
                "Why Python?",
                "Python installation",
                "IDEs (VS Code, PyCharm, Jupyter)",
                "Running Python scripts",
            ],
            outcome: "Understand the fundamentals of programming and get your environment ready.",
        },
    },
    {
        emoji: "🟢",
        title: "Module 2: Python Syntax",
        content: {
            learn: [
                "Variables",
                "Keywords",
                "Comments",
                "Indentation rules",
            ],
            outcome: "Master the basic building blocks and rules of writing Python code.",
        },
    },
    {
        emoji: "🟢",
        title: "Module 3: Data Types",
        content: {
            learn: [
                "int, float, string, boolean",
                "type() function",
                "Type casting",
            ],
            outcome: "Work with different types of data effectively.",
        },
    },
    {
        emoji: "🟢",
        title: "Module 4: Operators",
        content: {
            learn: [
                "Arithmetic, Comparison, Logical operators",
                "Assignment operators",
                "Membership & identity operators",
            ],
            outcome: "Perform calculations and logical operations in your scripts.",
        },
    },
    {
        emoji: "🟡",
        title: "Module 5: Conditional Statements",
        content: {
            learn: [
                "if, elif, else",
                "Nested conditions",
            ],
            outcome: "Add logic and decision-making to your programs.",
        },
    },
    {
        emoji: "🟡",
        title: "Module 6: Loops",
        content: {
            learn: [
                "for loop",
                "while loop",
                "break, continue, pass",
            ],
            outcome: "Automate repetitive tasks with efficient looping.",
        },
    },
    {
        emoji: "🟡",
        title: "Module 7: Range & Iteration",
        content: {
            learn: [
                "range()",
                "Iterating over sequences",
            ],
            outcome: "Handle sequences and iterations like a pro.",
        },
    },
    {
        emoji: "🟠",
        title: "Module 8: Strings",
        content: {
            learn: [
                "Indexing & slicing",
                "String methods",
                "Formatting (f-strings, format)",
            ],
            outcome: "Manipulate and format text data effortlessly.",
        },
    },
    {
        emoji: "🟠",
        title: "Module 9: Lists",
        content: {
            learn: [
                "List creation & indexing",
                "List methods",
                "List comprehension",
            ],
            outcome: "Master the most versatile data structure in Python.",
        },
    },
    {
        emoji: "🟠",
        title: "Module 10: Tuples",
        content: {
            learn: [
                "Tuple basics",
                "Immutable concept",
            ],
            outcome: "Understand fixed collections of data.",
        },
    },
    {
        emoji: "🟠",
        title: "Module 11: Sets",
        content: {
            learn: [
                "Set operations",
                "Frozen sets",
            ],
            outcome: "Work with unique collections of items.",
        },
    },
    {
        emoji: "🟠",
        title: "Module 12: Dictionaries",
        content: {
            learn: [
                "Key-value pairs",
                "Dictionary methods",
                "Nested dictionaries",
            ],
            outcome: "Store and retrieve data using efficient mapping.",
        },
    },
    {
        emoji: "🔵",
        title: "Module 13: Functions",
        content: {
            learn: [
                "Defining functions",
                "Parameters & arguments",
                "Return values",
                "Scope (local/global)",
            ],
            outcome: "Write reusable and modular code with functions.",
        },
    },
    {
        emoji: "🔵",
        title: "Module 14: Advanced Functions",
        content: {
            learn: [
                "Lambda functions",
                "map(), filter(), reduce()",
            ],
            outcome: "Use functional programming concepts for cleaner code.",
        },
    },
    {
        emoji: "🔵",
        title: "Module 15: Modules",
        content: {
            learn: [
                "Built-in modules",
                "Importing modules",
                "pip & packages",
            ],
            outcome: "Expand Python's capabilities with external libraries.",
        },
    },
    {
        emoji: "🟣",
        title: "Module 16: OOP Basics",
        content: {
            learn: [
                "Class & object",
                "Attributes & methods",
                "Constructor (init)",
            ],
            outcome: "Build real-world applications using the OOP paradigm.",
        },
    },
    {
        emoji: "🟣",
        title: "Module 17: OOP Concepts",
        content: {
            learn: [
                "Inheritance",
                "Polymorphism",
                "Encapsulation",
                "Abstraction",
            ],
            outcome: "Master advanced OOP principles for scalable software design.",
        },
    },
    {
        emoji: "🔴",
        title: "Module 18: Exception Handling",
        content: {
            learn: [
                "try, except, finally",
                "Multiple exceptions",
                "Custom exceptions",
            ],
            outcome: "Build robust programs that handle errors gracefully.",
        },
    },
    {
        emoji: "🔴",
        title: "Module 19: File Handling",
        content: {
            learn: [
                "Reading & Writing files",
                "File modes",
                "Working with text files",
            ],
            outcome: "Interact with the file system to store and read data.",
        },
    },
];

function CurriculumList({ data }: { data: typeof sqlCurriculum }) {
  return (
    <Accordion type="single" collapsible className="w-full rounded-lg border bg-card p-2 shadow-sm transition-all duration-300 hover:shadow-xl">
      <AccordionItem value="full-curriculum" className="border-b-0">
        <AccordionTrigger className="py-4 px-4 text-left text-lg font-semibold transition-all hover:no-underline group data-[state=open]:border-b">
          <span className="flex items-center gap-4">
            <span className="text-2xl transition-transform duration-300 group-hover:rotate-6">📚</span>
            View Full Curriculum
          </span>
        </AccordionTrigger>
        <AccordionContent className="overflow-hidden text-base transition-all">
          <div className="pt-4 px-2">
            <Accordion type="multiple" className="w-full space-y-2">
              {data.map((item, index) => (
                <div key={index} className="transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 rounded-md border">
                  <AccordionItem value={`item-${index}`} className="border-b-0">
                    <AccordionTrigger className="py-4 px-4 text-left font-semibold transition-all hover:no-underline group">
                      <h3 className="flex w-full items-center gap-4 text-lg text-left">
                        <span className="text-2xl transition-transform duration-300 group-hover:scale-110">{item.emoji}</span>
                        {item.title}
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-4 pb-4 px-4 border-t animate-fade-in">
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
  )
}

export default function Curriculum() {
  return (
    <section id="curriculum" className="w-full bg-muted/30 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            📘 Comprehensive Learning Paths
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Choose your path to mastery. Step-by-step curriculums designed to take you from novice to job-ready.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Tabs defaultValue="sql" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="sql" className="text-lg py-3">SQL Curriculum</TabsTrigger>
              <TabsTrigger value="python" className="text-lg py-3">Python Curriculum</TabsTrigger>
            </TabsList>
            <TabsContent value="sql">
              <CurriculumList data={sqlCurriculum} />
            </TabsContent>
            <TabsContent value="python">
              <CurriculumList data={pythonCurriculum} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}