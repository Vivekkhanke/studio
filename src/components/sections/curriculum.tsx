"use client"

import * as React from "react"
import { Briefcase, Check, ChevronDown, Coffee, Database, Target, Terminal } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import MotionDiv from "@/components/ui/motion-div"
import SectionHeading from "@/components/ui/section-heading"

type CurriculumModule = {
  emoji: string
  title: string
  content: {
    learn: string[]
    realWorld: string[]
    outcome: string
  }
}

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
        realWorld: [
          "Fetching user data from a customer database.",
          "Adding a new product to an inventory system.",
          "Updating a user's profile information."
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
        realWorld: [
          "Filtering products by price range and category.",
          "Finding all employees hired in the last quarter.",
          "Sorting search results by relevance or date."
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
        ],
        realWorld: [
            "Calculating total sales per store.",
            "Finding the average order value per customer.",
            "Identifying the most popular products."
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
        ],
        realWorld: [
            "Combining order, customer, and product data for a complete sales picture.",
            "Analyzing user engagement by joining user and activity tables.",
            "Generating financial reports by linking sales and expense data."
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
        realWorld: [
          "Finding customers who have placed more than the average number of orders.",
          "Breaking down complex queries into logical, readable steps.",
          "Analyzing organizational hierarchies or graph-like data."
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
        ],
        realWorld: [
          "Finding the top N products within each category.",
          "Analyzing customer purchase trends over time.",
          "Calculating month-over-month growth."
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
        realWorld: [
          "Designing a scalable database for a new application.",
          "Optimizing an existing database for better performance and data integrity.",
          "Understanding the trade-offs between different data modeling techniques."
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
        realWorld: [
          "Speeding up slow-running queries in a production system.",
          "Improving the performance of a high-traffic website.",
          "Making data retrieval faster for analytical dashboards."
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
        realWorld: [
          "Creating a simplified view of complex data for reporting.",
          "Encapsulating business logic in reusable functions.",
          "Automating common database tasks with stored procedures."
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
        realWorld: [
          "Ensuring data integrity in a financial application.",
          "Handling multi-step processes like bank transfers safely.",
          "Preventing data corruption during concurrent operations."
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
        realWorld: [
          "Building a sales dashboard for a retail company.",
          "Analyzing customer churn for a subscription service.",
          "Optimizing inventory management for an e-commerce store."
        ],
        outcome: "Real project experience for resume & interviews.",
        },
    },
    {
        emoji: "🎓",
        title: "Module 12: Interview, Resume & Certification",
        content: {
        learn: [
            "Mock interview",
            "Certifications Guidance",
            "Resume building tips",
            "LinkedIn profile optimization",
            "Get a course completion certificate",
        ],
        realWorld: [
          "Practicing common SQL interview questions.",
          "Preparing for industry certifications like Microsoft's MTA or Oracle's OCA.",
          "Building a strong portfolio to showcase your SQL skills."
        ],
        outcome: "Gain the confidence to ace technical interviews, create a standout resume, and earn industry-recognized certifications.",
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
      realWorld: [
        "Setting up a development environment for a new project.",
        "Writing a simple script to automate a repetitive task.",
        "Exploring different career paths that use Python."
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
      realWorld: [
        "Storing user information in a web application.",
        "Representing financial data with appropriate precision.",
        "Manipulating text data for natural language processing."
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
      realWorld: [
        "Performing calculations in a financial analysis script.",
        "Implementing complex business rules with logical operators.",
        "Checking for the presence of an item in a list or dictionary."
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
      realWorld: [
        "Building a command-line tool for data entry.",
        "Creating a simple calculator or game.",
        "Reading data from a user to personalize an experience."
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
      ],
      realWorld: [
        "Implementing a grading system based on student scores.",
        "Building a recommendation engine based on user preferences.",
        "Controlling the flow of a program based on user input."
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
      realWorld: [
        "Processing all files in a directory.",
        "Scraping data from a website.",
        "Generating a series of reports automatically."
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
      realWorld: [
        "Parsing and cleaning text data from a file.",
        "Validating user input in a web form.",
        "Extracting information from unstructured text data."
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
      realWorld: [
        "Storing a collection of items in a shopping cart.",
        "Managing a to-do list application.",
        "Processing a list of email addresses for a marketing campaign."
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
      realWorld: [
        "Storing database records as tuples for efficiency.",
        "Finding unique items in a large dataset.",
        "Representing complex data structures like JSON objects."
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
      realWorld: [
        "Creating a library of reusable functions for a project.",
        "Breaking down a complex problem into smaller, manageable parts.",
        "Improving the readability and maintainability of your code."
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
      realWorld: [
        "Extending the functionality of your application with third-party libraries.",
        "Organizing a large project into multiple modules and packages.",
        "Sharing your code with others as a reusable package."
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
      realWorld: [
        "Preventing a web server from crashing due to invalid user input.",
        "Handling network errors gracefully in a data scraping script.",
        "Ensuring that critical resources are cleaned up properly, even if an error occurs."
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
      realWorld: [
        "Reading data from a CSV file for analysis.",
        "Saving application settings to a configuration file.",
        "Logging events and errors to a text file."
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
      realWorld: [
        "Modeling real-world entities like customers, products, and orders.",
        "Building complex applications with a clear and organized structure.",
        "Creating reusable components for a GUI framework."
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
      realWorld: [
        "Applying your Python skills to build a complete, portfolio-ready application.",
        "Gaining experience with the entire software development lifecycle.",
        "Demonstrating your abilities to potential employers."
      ],
      outcome: "Build a complete portfolio-ready application.",
    },
  },
  {
    emoji: "💼",
    title: "Module 16: Interview, Resume & Certification",
    content: {
      learn: [
        "Common Python interview Q&A",
        "Logic building & Coding exercises",
        "Resume building tips",
        "LinkedIn profile optimization",
        "Get a course completion certificate",
      ],
      realWorld: [
        "Practicing common Python interview questions.",
        "Solving coding challenges on platforms like HackerRank and LeetCode.",
        "Building a strong resume and portfolio to showcase your skills."
      ],
      outcome: "Gain confidence for Python developer roles, create a standout resume, and get certified.",
    },
  },
  {
    emoji: "⏩",
    title: "Module 17: Advanced Python: Iterators, Generators, Multithreading & Multiprocessing",
    content: {
      learn: [
        "Creating custom iterators",
        "Understanding and creating generators",
        "Introduction to multithreading for concurrent tasks",
        "Introduction to multiprocessing for parallel execution",
        "Using `concurrent.futures` for managing threads and processes"
      ],
      realWorld: [
        "Processing large files efficiently with generators.",
        "Improving UI responsiveness with multithreading.",
        "Speeding up CPU-bound tasks with multiprocessing.",
        "Building a web scraper that fetches multiple pages concurrently."
      ],
      outcome: "Write efficient, concurrent, and parallel Python code to handle advanced data processing and performance challenges."
    }
  }
];

const javaCurriculum = [
    {
        emoji: "📅",
        title: "Module 1: Introduction to Java",
        content: {
            learn: [
                "What is Java?",
                "History & Features of Java",
                "Java Editions (SE, EE, ME)",
                "JDK, JRE & JVM",
                "Java Architecture",
                "Installing Java & IntelliJ IDEA / Eclipse",
                "First Java Program (Hello World)",
                "Compilation & Execution Process",
            ],
            realWorld: [
                "Setting up a local Java development environment.",
                "Writing and running a basic console application.",
                "Understanding the platform-independent nature of Java."
            ],
            outcome: "You will be able to write, compile, and run basic Java programs and understand the fundamentals of the Java ecosystem.",
        },
    },
    {
        emoji: "📦",
        title: "Module 2: Java Basics",
        content: {
            learn: [
                "Variables and Data Types",
                "Keywords, Identifiers, and Literals",
                "Type Casting",
                "Constants (final)",
                "Scanner Class (User Input)",
                "Practical: Student & Employee Information, Simple Calculator",
            ],
            realWorld: [
                "Storing and manipulating user data.",
                "Performing basic calculations.",
                "Creating simple interactive command-line applications."
            ],
            outcome: "You will understand how Java stores data and be able to build interactive console-based programs.",
        },
    },
    {
        emoji: "➕",
        title: "Module 3: Operators",
        content: {
            learn: [
                "Arithmetic, Relational, Logical Operators",
                "Assignment, Unary, Ternary Operators",
                "Practical: Even/Odd, Largest Number, Grade Calculator",
            ],
            realWorld: [
                "Implementing business logic and rules.",
                "Performing complex comparisons and calculations.",
                "Controlling program flow based on conditions."
            ],
            outcome: "You will be able to use a wide range of operators to perform calculations and make logical decisions in your code.",
        },
    },
    {
        emoji: "⚖️",
        title: "Module 4: Conditional Statements",
        content: {
            learn: [
                "if, if-else, else-if Ladder",
                "Nested if",
                "switch-case",
                "Practical: ATM Menu, Voting Eligibility, Bill Calculators",
            ],
            realWorld: [
                "Building menu-driven applications.",
                "Implementing validation and decision-making processes.",
                "Creating programs that respond differently to various inputs."
            ],
            outcome: "You will be able to control the flow of your programs using conditional logic to handle different scenarios.",
        },
    },
    {
        emoji: "🔄",
        title: "Module 5: Loops",
        content: {
            learn: [
                "for Loop, while Loop, do-while Loop",
                "break and continue",
                "Nested Loops",
                "Practical: Tables, Factorial, Prime, Fibonacci, Patterns",
            ],
            realWorld: [
                "Processing lists of data.",
                "Automating repetitive tasks.",
                "Generating patterns and sequences."
            ],
            outcome: "You will be able to automate repetitive tasks and process collections of data efficiently.",
        },
    },
    {
        emoji: "📋",
        title: "Module 6: Arrays",
        content: {
            learn: [
                "One-Dimensional and Two-Dimensional Arrays",
                "Array Operations (Searching, Sorting)",
                "Bubble Sort algorithm",
                "Practical: Find Max/Min, Average, Matrix Addition",
            ],
            realWorld: [
                "Storing and processing collections of similar data.",
                "Implementing basic data analysis tasks.",
                "Working with tabular data structures."
            ],
            outcome: "You will be able to manage and manipulate fixed-size collections of data using arrays.",
        },
    },
    {
        emoji: "⚙️",
        title: "Module 7: Methods",
        content: {
            learn: [
                "Creating Methods and Parameters",
                "Return Types",
                "Static Methods",
                "Method Overloading",
                "Practical: Calculator using Methods, Salary Calculation",
            ],
            realWorld: [
                "Breaking down complex problems into smaller, reusable pieces of code.",
                "Improving code organization and readability.",
                "Creating modular and maintainable applications."
            ],
            outcome: "You will be able to write modular, reusable, and organized code by creating and using methods.",
        },
    },
    {
        emoji: "🏗️",
        title: "Module 8: Object-Oriented Programming (OOP)",
        content: {
            learn: [
                "Class and Object",
                "Constructor",
                "this Keyword",
                "static Keyword",
                "Practical: Student Class, Employee Class, Bank Account Class",
            ],
            realWorld: [
                "Modeling real-world entities like users, products, or accounts.",
                "Building the foundation for complex applications.",
                "Understanding the core principles of modern software development."
            ],
            outcome: "You will be able to model real-world problems using classes and objects, the fundamental building blocks of OOP.",
        },
    },
    {
        emoji: "🧩",
        title: "Module 9: OOP Concepts",
        content: {
            learn: [
                "Encapsulation",
                "Inheritance",
                "Polymorphism",
                "Abstraction and Interfaces",
                "Practical: Vehicle Management, Student Result System",
            ],
            realWorld: [
                "Building flexible and extensible software systems.",
                "Creating reusable components and libraries.",
                "Developing complex applications with a clear, maintainable structure."
            ],
            outcome: "You will master the core principles of OOP to build scalable, flexible, and maintainable applications.",
        },
    },
    {
        emoji: "🔤",
        title: "Module 10: String Handling",
        content: {
            learn: [
                "String, StringBuilder, StringBuffer",
                "Common String Methods",
                "Practical: Reverse String, Palindrome, Count Vowels, Word Count",
            ],
            realWorld: [
                "Parsing and manipulating text data.",
                "Validating user input.",
                "Working with text-based file formats."
            ],
            outcome: "You will be able to efficiently process and manipulate text data using Java's String handling capabilities.",
        },
    },
    {
        emoji: "⚠️",
        title: "Module 11: Exception Handling",
        content: {
            learn: [
                "try, catch, finally",
                "throw, throws",
                "Practical: Division by Zero, Invalid Age, Login Validation",
            ],
            realWorld: [
                "Building robust applications that can handle unexpected errors.",
                "Ensuring program stability and reliability.",
                "Providing better user feedback when errors occur."
            ],
            outcome: "You will be able to build resilient applications by gracefully handling runtime errors and exceptions.",
        },
    },
    {
        emoji: "🗃️",
        title: "Module 12: Collections Framework",
        content: {
            learn: [
                "ArrayList, LinkedList",
                "HashSet, HashMap",
                "Iterator",
                "Practical: Student List, Employee Records, Product Management",
            ],
            realWorld: [
                "Managing dynamic collections of objects.",
                "Implementing complex data structures for various use cases.",
                "Efficiently storing, retrieving, and manipulating data in memory."
            ],
            outcome: "You will master Java's powerful Collections Framework to manage dynamic groups of objects effectively.",
        },
    },
    {
        emoji: "📁",
        title: "Module 13: File Handling",
        content: {
            learn: [
                "File Class",
                "FileReader, FileWriter",
                "BufferedReader, BufferedWriter",
                "Practical: Reading and writing to student and employee files.",
            ],
            realWorld: [
                "Persisting application data to files.",
                "Reading configuration from files.",
                "Importing and exporting data."
            ],
            outcome: "You will be able to save and retrieve application data by reading from and writing to files.",
        },
    },
    {
        emoji: "🚀",
        title: "Module 14: Java 8 Basics",
        content: {
            learn: [
                "Lambda Expressions (Introduction)",
                "Functional Interfaces",
                "Stream API (Basics)",
                "Practical: Filtering and sorting lists with Streams.",
            ],
            realWorld: [
                "Writing more concise and readable code.",
                "Processing data in a more declarative way.",
                "Improving performance with parallel streams (advanced topic)."
            ],
            outcome: "You will be able to write modern, functional-style Java code using features like Lambda expressions and the Stream API.",
        },
    },
    {
        emoji: "🛠️",
        title: "Module 15: Mini Project",
        content: {
            learn: [
                "Student Management System",
                "Features: Add, Update, Delete, Search, Display Students",
                "Tools: Java JDK, IntelliJ/Eclipse, Git/GitHub",
            ],
            realWorld: [
                "Applying all learned concepts to build a complete application.",
                "Gaining experience in project planning and development.",
                "Creating a portfolio piece to showcase your skills."
            ],
            outcome: "You will solidify your learning by building a complete, portfolio-ready Student Management System from scratch.",
        },
    },
];


const paths = [
  { value: "sql", label: "SQL", icon: Database, data: sqlCurriculum, blurb: "From your first SELECT to joins, subqueries, optimization and real reporting." },
  { value: "python", label: "Python", icon: Terminal, data: pythonCurriculum, blurb: "Core programming, data structures and data analysis for practical automation." },
  { value: "java", label: "Java", icon: Coffee, data: javaCurriculum, blurb: "Core Java, OOP, collections and Java 8 features, capped with a full project." },
]

const INITIAL_VISIBLE = 6

export default function Curriculum() {
  return (
    <section id="curriculum" className="relative w-full border-y border-white/[0.05] bg-white/[0.015] py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Curriculum"
          title={<>Comprehensive <span className="text-gradient">learning paths</span></>}
          description="Step-by-step curriculum designed to take you from novice to job-ready in 30 days."
        />

        <MotionDiv delay={0.1} className="mx-auto mt-12 max-w-4xl">
          <Tabs defaultValue="sql" className="w-full">
            <TabsList className="mx-auto grid h-auto w-full max-w-lg grid-cols-3 gap-1 rounded-2xl border border-white/[0.07] bg-card/80 p-1.5">
              {paths.map(({ value, label, icon: Icon, data }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="flex flex-col gap-0.5 rounded-xl py-2.5 text-muted-foreground transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.8)] sm:flex-row sm:gap-2"
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-semibold">{label}</span>
                  <span className="hidden font-code text-[11px] opacity-70 sm:inline">{data.length}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {paths.map((path) => (
              <TabsContent key={path.value} value={path.value} className="mt-10 animate-fade-in focus-visible:outline-none">
                <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                  <p className="max-w-lg text-sm text-muted-foreground">{path.blurb}</p>
                  <span className="font-code text-xs uppercase tracking-widest text-accent">
                    {path.data.length} modules
                  </span>
                </div>
                <ModuleList data={path.data} />
              </TabsContent>
            ))}
          </Tabs>
        </MotionDiv>
      </div>
    </section>
  )
}

function ModuleList({ data }: { data: CurriculumModule[] }) {
  const [showAll, setShowAll] = React.useState(false)
  const visible = showAll ? data : data.slice(0, INITIAL_VISIBLE)

  return (
    <>
      <Accordion type="multiple" defaultValue={["item-0"]} className="space-y-3">
        {visible.map((item, index) => {
          const match = item.title.match(/^Module\s*(\d+):\s*(.*)$/)
          const number = match ? match[1] : String(index + 1)
          const name = match ? match[2] : item.title
          return (
            <AccordionItem
              key={item.title}
              value={`item-${index}`}
              className="surface overflow-hidden border-b-0 transition-colors data-[state=open]:border-primary/30 data-[state=open]:bg-card"
            >
              <AccordionTrigger className="group gap-4 px-5 py-4 text-left hover:no-underline">
                <span className="flex flex-1 items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] font-code text-sm text-muted-foreground transition-colors group-data-[state=open]:border-primary/40 group-data-[state=open]:bg-primary/15 group-data-[state=open]:text-primary">
                    {number.padStart(2, "0")}
                  </span>
                  <span className="font-headline text-base font-semibold text-foreground/90 transition-colors group-hover:text-foreground md:text-lg">
                    {name}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-6 border-t border-white/[0.06] px-5 pb-6 pt-5 md:grid-cols-2 md:pl-[4.75rem]">
                  <div>
                    <h4 className="font-code text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">What you will learn</h4>
                    <ul className="mt-3 space-y-2 text-sm text-foreground/85">
                      {item.content.learn.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-code text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">Real-world examples</h4>
                    <ul className="mt-3 space-y-2 text-sm text-foreground/85">
                      {item.content.realWorld.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/[0.06] p-4 md:col-span-2">
                    <Target className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm text-foreground/85">
                      <span className="font-semibold text-primary">Outcome: </span>
                      {item.content.outcome}
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>

      {data.length > INITIAL_VISIBLE && (
        <div className="mt-6 flex justify-center">
          <Button variant="outline" onClick={() => setShowAll((v) => !v)} aria-expanded={showAll}>
            {showAll ? "Show fewer modules" : `Show all ${data.length} modules`}
            <ChevronDown className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
          </Button>
        </div>
      )}
    </>
  )
}
