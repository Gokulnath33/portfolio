export const personalInfo = {
  name: "Gokulnath M",
  role: "Artificial Intelligence & Data Science Engineer",
  taglines: [
    "AI & Data Science Enthusiast",
    "Full-Stack Web Developer",
    "UI/UX & Graphic Designer",
    "Machine Learning Explorer"
  ],
  email: "gokulnath2006mg@gmail.com",
  phone: "+91 81248 70640",
  phoneRaw: "8124870640",
  location: "Paramakudi, Ramanathapuram District, Tamil Nadu",
  linkedin: "https://www.linkedin.com/in/gokulnathm33",
  linkedinClean: "linkedin.com/in/gokulnathm33",
  github: "https://github.com/Gokulnath33",
  twitter: "https://x.com/Gokulnath2006mg",
  leetcode: "https://leetcode.com/u/gokulnath2006mg/",
  hackerrank: "https://www.hackerrank.com/profile/mohanakannan1971",
  zipBundleUrl: "/certificates.zip",
  summary: "Ambitious 3rd-year B.Tech student in Artificial Intelligence and Data Science at Mepco Schlenk Engineering College. Possesses a strong academic foundation (8.3 CGPA) with practical knowledge in machine learning algorithms, data analysis, and modern engineering tools. Eager to apply technical skills and problem-solving abilities to impactful AI and data analytics projects.",
  cgpa: "8.3",
  languages: ["English", "Tamil", "Hindi"],
  hobbies: ["Video Editing", "Open Source", "UI/UX Designing", "Graphic Designing"]
};

export const educationData = [
  {
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "Mepco Schlenk Engineering College",
    year: "2024 - 2028",
    score: "8.3 CGPA",
    badge: "Current Degree",
    highlight: "Core focus on Machine Learning, Algorithms, Data Mining & Full Stack Development",
    icon: "GraduationCap"
  },
  {
    degree: "12th Standard (Higher Secondary)",
    institution: "State Board",
    year: "2024",
    score: "83.8%",
    badge: "HSC",
    highlight: "Strong foundation in Mathematics, Physics & Computer Science",
    icon: "Award"
  },
  {
    degree: "10th SSLC",
    institution: "State Board",
    year: "2022",
    score: "84.8%",
    badge: "SSLC",
    highlight: "Academic distinction with top honors in science & mathematics",
    icon: "BookOpen"
  }
];

export const skillsCategoryData = [
  {
    category: "Programming & Core CS",
    skills: [
      { name: "Python", level: 90, icon: "Code2", tag: "AI/Data" },
      { name: "Java", level: 85, icon: "FileCode", tag: "OOP/GUI" },
      { name: "C / C++", level: 80, icon: "Cpu", tag: "Systems" },
      { name: "SQL", level: 85, icon: "Database", tag: "Queries" },
      { name: "Data Structures & Algorithms", level: 85, icon: "GitFork", tag: "Core CS" },
      { name: "OOPs & DBMS", level: 88, icon: "Layers", tag: "Architecture" }
    ]
  },
  {
    category: "Machine Learning & Data Analytics",
    skills: [
      { name: "Pandas", level: 88, icon: "Table", tag: "Data Wrangling" },
      { name: "NumPy", level: 85, icon: "Binary", tag: "Array Computation" },
      { name: "Scikit-Learn", level: 82, icon: "BrainCircuit", tag: "ML Models" },
      { name: "Matplotlib & Seaborn", level: 85, icon: "BarChart3", tag: "Data Viz" },
      { name: "Data Preprocessing", level: 86, icon: "Sliders", tag: "Analytics" }
    ]
  },
  {
    category: "Web & Developer Tools",
    skills: [
      { name: "Full-Stack Web Dev (React/HTML/CSS/JS)", level: 85, icon: "Globe", tag: "Frontend/Backend" },
      { name: "MySQL", level: 82, icon: "Database", tag: "Relational DB" },
      { name: "Git & GitHub", level: 88, icon: "GitBranch", tag: "Version Control" },
      { name: "VS Code", level: 90, icon: "Terminal", tag: "IDE" },
      { name: "Jupyter Notebook & Google Colab", level: 90, icon: "BookOpenCheck", tag: "Data Labs" }
    ]
  },
  {
    category: "Design & Soft Competencies",
    skills: [
      { name: "UI/UX Designing", level: 88, icon: "Figma", tag: "Interface Design" },
      { name: "Graphic Designing", level: 85, icon: "Palette", tag: "Visual Media" },
      { name: "Video Editing", level: 80, icon: "Video", tag: "Content Creation" },
      { name: "Problem-Solving & Analytical Thinking", level: 92, icon: "Sparkles", tag: "Soft Skill" },
      { name: "Team Collaboration & Communication", level: 90, icon: "Users", tag: "Soft Skill" }
    ]
  }
];

export const projectsData = [
  {
    id: "smart-food-rescue",
    title: "Smart Online Food Rescue System",
    subtitle: "Java Full-Stack System for Social Impact",
    category: "Java / Systems",
    featured: true,
    description: "An intelligent online food redistribution system built with Java that connects food donors (restaurants, events) with receivers (NGOs, shelters) using smart priority matching to eliminate food waste and address hunger.",
    tools: ["Java", "Java Swing (GUI)", "Multithreading", "Collections Framework", "PriorityQueue", "OOP"],
    highlights: [
      "Real-time background matching algorithm based on urgency and geographical proximity",
      "Interactive Java Swing interface for donor registration and NGO collection tracking",
      "Reduces food waste while ensuring logistically-optimized food delivery to those in need",
      "Implements OOP principles and thread safety for concurrent donor request handling"
    ],
    architecture: [
      { step: "1. Donor Input", detail: "Restaurants register surplus food quantity, location & shelf-life" },
      { step: "2. Priority Engine", detail: "PriorityQueue ranks urgency based on food decay timer & demand" },
      { step: "3. Smart Match", detail: "Background worker thread matches nearest receiver NGO" },
      { step: "4. Analytics", detail: "Generates report on total meals saved and waste reduction metric" }
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Gokulnath33/smart-online-food-rescue-system"
  },
  {
    id: "task-master-react",
    title: "Task Master",
    subtitle: "React Component-Based Task Management App",
    category: "Full-Stack / Web",
    featured: true,
    description: "A feature-rich task management application built with React, leveraging reusable components, state management, and a clean modern UI to help users organize, prioritize, and track their daily tasks efficiently.",
    tools: ["React", "JavaScript (ES6+)", "React Components", "CSS3", "State Management", "Hooks"],
    highlights: [
      "Component-driven architecture with reusable UI elements for scalability",
      "Dynamic task creation, editing, deletion, and status-tracking features",
      "Responsive design with intuitive UX for seamless task organization",
      "Demonstrates React fundamentals including props, state, and lifecycle hooks"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Gokulnath33/Task-Master-With-React-Componenets"
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    subtitle: "Personal Finance Management Web App",
    category: "Full-Stack / Web",
    featured: false,
    description: "A comprehensive personal finance tracking web application that allows users to log, categorize, and visualize their income and expenses with real-time balance calculation and insightful spending summaries.",
    tools: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation", "LocalStorage", "Chart.js"],
    highlights: [
      "Real-time income and expense tracking with automatic balance computation",
      "Categorized transaction history with filter and search capabilities",
      "Visual spending breakdown charts for data-driven financial decisions",
      "Persistent data storage using browser LocalStorage for session continuity"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Gokulnath33/Expense-Tracker"
  },
  {
    id: "samsung-sales-analysis",
    title: "Samsung Sales Data Analysis",
    subtitle: "Data Science & Business Intelligence Project",
    category: "AI & ML",
    featured: true,
    description: "A comprehensive data analysis and visualization project on Samsung sales data, uncovering business insights, sales trends, regional performance, and product category analytics using Python data science libraries.",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook", "Data Wrangling"],
    highlights: [
      "In-depth exploratory data analysis (EDA) on Samsung product sales datasets",
      "Identified top-performing product categories, regions, and seasonal sales trends",
      "Generated heatmaps, bar charts, and correlation matrices for business insights",
      "Automated data cleaning pipeline handling missing values and outlier detection"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Gokulnath33/Samsung-Sales-Data-Analysis"
  },
  {
    id: "greeting-generator",
    title: "Greeting Generator",
    subtitle: "Dynamic Greeting Card Web Application",
    category: "Full-Stack / Web",
    featured: false,
    description: "An interactive and dynamic greeting generator web application that creates personalized greeting messages and cards for various occasions, built with modern web technologies and a delightful user experience.",
    tools: ["JavaScript", "HTML5", "CSS3", "DOM API", "Animations", "Responsive Design"],
    highlights: [
      "Dynamic generation of personalized greetings for multiple occasions and events",
      "Smooth CSS animations and transitions for an engaging interactive experience",
      "Fully responsive UI design compatible across desktop, tablet, and mobile screens",
      "Clean, modular JavaScript code following web development best practices"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Gokulnath33/Greeting-Generator"
  },
  {
    id: "online-voting-registration",
    title: "Online Voting Registration System",
    subtitle: "Secure Digital Democracy Platform",
    category: "Full-Stack / Web",
    featured: true,
    description: "A comprehensive online voter registration and voting system that enables citizens to register, verify eligibility, and cast votes digitally. Designed with security, data integrity, and user accessibility in mind to modernize the democratic process.",
    tools: ["HTML5", "CSS3", "JavaScript", "MySQL", "PHP", "Form Validation", "Database Management"],
    highlights: [
      "Secure voter registration with eligibility verification and duplicate prevention",
      "Role-based access control separating admin, voter, and officer functionalities",
      "Tamper-resistant vote recording with unique voter ID generation and audit trails",
      "Real-time result tabulation dashboard with candidate-wise vote analytics"
    ],
    architecture: [
      { step: "1. Voter Registration", detail: "Citizens register with personal details; system validates eligibility and uniqueness" },
      { step: "2. Authentication", detail: "Secure login with voter ID & credentials for authorized access" },
      { step: "3. Vote Casting", detail: "Authenticated voters cast a single vote; system prevents double voting" },
      { step: "4. Result Compilation", detail: "Admin dashboard displays live count, candidate standings, and audit logs" }
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Gokulnath33/Online-Voting-Registeration-System"
  },
  {
    id: "splitzy",
    title: "Splitzy",
    subtitle: "Real-Time Expense Splitter (MERN + Socket.IO)",
    category: "Full-Stack / Web",
    featured: true,
    description: "A live, multi-user expense-splitting application built with the MERN stack and Socket.IO. When any group member adds an expense, every other member's balance updates instantly on their screen — no refresh needed. Includes JWT authentication, a debt-simplification algorithm for minimum transactions, and an animated live progress dashboard.",
    tools: ["React (Vite)", "Node.js", "Express", "MongoDB", "Mongoose", "Socket.IO", "JWT Auth", "Tailwind CSS v4", "Framer Motion"],
    highlights: [
      "Real-time WebSocket balance updates across all group members' screens instantly without page refresh",
      "Debt-simplification algorithm calculates the minimum number of transactions needed to settle all debts",
      "Live progress dashboard with animated ring showing percentage of group debts settled, total spent, and pending amounts",
      "Personal real-time toast notifications — when a payment is marked paid, the recipient gets an instant alert",
      "JWT-based authentication with signup/login, group creation, and multi-member management"
    ],
    architecture: [
      { step: "1. Authentication", detail: "Users sign up/login via JWT; create or join expense groups with multiple members" },
      { step: "2. Expense Logging", detail: "Any member adds an expense; Socket.IO broadcasts the update to all group members in real-time" },
      { step: "3. Balance Calculation", detail: "Each member's share is computed; Framer Motion animates balance changes on every screen" },
      { step: "4. Settle Up", detail: "Greedy debt-simplification algorithm matches biggest debtor with biggest creditor for minimum transactions" }
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Gokulnath33/splitzy"
  },
  {
    id: "amazon-web-app",
    title: "Amazon Product Showcase",
    subtitle: "E-Commerce Product Catalog Web Page",
    category: "Full-Stack / Web",
    featured: false,
    description: "An Amazon-inspired product showcase web application featuring a multi-page layout with product cards, category browsing, and a responsive design. Built with pure HTML5 and CSS3, demonstrating front-end web development fundamentals and e-commerce UI patterns.",
    tools: ["HTML5", "CSS3", "Responsive Design", "Product Cards", "Multi-Page Layout", "E-Commerce UI"],
    highlights: [
      "Multi-page product catalog with dedicated pages for individual product details and categories",
      "Responsive CSS layout adapting to desktop, tablet, and mobile screen sizes",
      "Amazon-inspired UI design with product cards, image galleries, and category navigation",
      "Clean separation of structure (HTML) and styling (CSS) following web development best practices"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Gokulnath33/amazon-web-app"
  },
  {
    id: "mywebsite2",
    title: "Personal Website",
    subtitle: "Interactive HTML5 Portfolio Webpage",
    category: "Full-Stack / Web",
    featured: false,
    description: "A personal portfolio webpage built with HTML5, CSS3, and JavaScript, featuring multimedia content including embedded video, image galleries, and styled sections showcasing academic background and institutional information.",
    tools: ["HTML5", "CSS3", "JavaScript", "Embedded Video", "Responsive Layout", "Web Design"],
    highlights: [
      "Multimedia-rich webpage with embedded video player and image gallery integration",
      "Custom CSS styling with gradient backgrounds and styled typography for visual appeal",
      "Structured content sections highlighting academic profile and institutional details",
      "Interactive navigation links connecting multiple web pages within the site"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Gokulnath33/mywebsite2"
  }
];

export const experienceData = [
  {
    organisation: "Ucanly InfoTech",
    role: "Full Stack Web Development – Edge",
    type: "Internship",
    duration: "2 Months",
    period: "2024",
    location: "Remote / Virtual",
    responsibilities: [
      "Built responsive full-stack web applications featuring modern UI/UX design patterns.",
      "Integrated advanced AI services and backend endpoints for dynamic data processing.",
      "Partnered effectively with virtual development teams to meet tight project sprint milestones."
    ]
  }
];

export const certificationsData = [
  // ═══════════════════════════════════════════════
  // HACKERRANK — 4 Certificates
  // ═══════════════════════════════════════════════
  {
    id: "hackerrank-java-basic",
    title: "Java (Basic) Skill Certification",
    issuer: "HackerRank",
    score: "Verified Skill",
    tag: "HackerRank",
    category: "HackerRank",
    fileUrl: "/certificates/java_basic certificate.pdf",
    description: "Covers Java language fundamentals, Object-Oriented Programming, Data Structures, and Exception Handling.",
    icon: "Code2"
  },
  {
    id: "hackerrank-python-basic",
    title: "Python (Basic) Skill Certification",
    issuer: "HackerRank",
    score: "Verified Skill",
    tag: "HackerRank",
    category: "HackerRank",
    fileUrl: "/certificates/python_basic certificate.pdf",
    description: "Covers Python 3 syntax, control structures, list comprehensions, lambda functions, and string manipulation.",
    icon: "Code2"
  },
  {
    id: "hackerrank-sql-basic",
    title: "SQL (Basic) Skill Certification",
    issuer: "HackerRank",
    score: "Verified Skill",
    tag: "HackerRank",
    category: "HackerRank",
    fileUrl: "/certificates/sql_basic certificate.pdf",
    description: "Covers relational database queries, JOINs, aggregate functions, filtering, and group by clauses.",
    icon: "Database"
  },
  {
    id: "hackerrank-sql-intermediate",
    title: "SQL (Intermediate) Skill Certification",
    issuer: "HackerRank",
    score: "Intermediate Verified",
    tag: "HackerRank",
    category: "HackerRank",
    fileUrl: "/certificates/sql_intermediate certificate.pdf",
    description: "Complex SQL queries involving subqueries, CTEs, window functions, indexing, and query optimization.",
    icon: "Database"
  },

  // ═══════════════════════════════════════════════
  // HCL GUVI — 2 Certificates
  // ═══════════════════════════════════════════════
  {
    id: "hcl-guvi-cert-1",
    title: "Full-Stack Web Development & Python Proficiency",
    issuer: "HCL GUVI",
    score: "Certified",
    tag: "HCL GUVI",
    category: "HCL GUVI",
    fileUrl: "/certificates/HCL GUVI Certification - C7r6m91Y7281f3iXE0.png",
    description: "Hands-on certification in Python backend development, Web APIs, and Full-Stack fundamentals.",
    icon: "Globe"
  },
  {
    id: "hcl-guvi-cert-2",
    title: "Artificial Intelligence & Data Science Mastery",
    issuer: "HCL GUVI",
    score: "Certified",
    tag: "HCL GUVI",
    category: "HCL GUVI",
    fileUrl: "/certificates/HCL GUVI Certification - s89k17G8xvH9867187.png",
    description: "Practical training and certification in Machine Learning algorithms, Data Analytics, and AI workflows.",
    icon: "BrainCircuit"
  },

  // ═══════════════════════════════════════════════
  // AICTE PARAKH — 6 Assessment Reports
  // ═══════════════════════════════════════════════
  {
    id: "aicte-parakh-1",
    title: "AICTE PARAKH Technical Assessment Report I",
    issuer: "AICTE PARAKH",
    score: "National Level",
    tag: "AICTE Parakh",
    category: "AICTE Parakh",
    fileUrl: "/certificates/1Report_Generated_16-09-25.pdf",
    description: "National-level engineering aptitude and technical core competency assessment report evaluated by AICTE.",
    icon: "FileText"
  },
  {
    id: "aicte-parakh-2",
    title: "AICTE PARAKH Technical Assessment Report II",
    issuer: "AICTE PARAKH",
    score: "National Level",
    tag: "AICTE Parakh",
    category: "AICTE Parakh",
    fileUrl: "/certificates/2Report_Generated_13-10-25.pdf",
    description: "Evaluation report on problem-solving, logical reasoning, and domain knowledge benchmarks.",
    icon: "FileText"
  },
  {
    id: "aicte-parakh-3",
    title: "AICTE PARAKH Technical Assessment Report III",
    issuer: "AICTE PARAKH",
    score: "National Level",
    tag: "AICTE Parakh",
    category: "AICTE Parakh",
    fileUrl: "/certificates/3Report_Generated_08-03-26.pdf",
    description: "Performance analysis report covering AI, Data Structures, and Computer Science fundamentals.",
    icon: "FileText"
  },
  {
    id: "aicte-parakh-4",
    title: "AICTE PARAKH Technical Assessment Report IV",
    issuer: "AICTE PARAKH",
    score: "National Level",
    tag: "AICTE Parakh",
    category: "AICTE Parakh",
    fileUrl: "/certificates/4Report_Generated_20-03-26.pdf",
    description: "Detailed competency matrix assessing quantitative, verbal, and analytical skill parameters.",
    icon: "FileText"
  },
  {
    id: "aicte-parakh-5",
    title: "AICTE PARAKH Technical Assessment Report V",
    issuer: "AICTE PARAKH",
    score: "National Level",
    tag: "AICTE Parakh",
    category: "AICTE Parakh",
    fileUrl: "/certificates/5Report_Generated_03-04-26.pdf",
    description: "Comprehensive national benchmark report highlighting strengths in AI & Data Science domain.",
    icon: "FileText"
  },
  {
    id: "aicte-parakh-6",
    title: "AICTE PARAKH Technical Assessment Report VI",
    issuer: "AICTE PARAKH",
    score: "National Level",
    tag: "AICTE Parakh",
    category: "AICTE Parakh",
    fileUrl: "/certificates/6Report_Generated_21-06-26.pdf",
    description: "Final AICTE SLA assessment score report validating technical readiness and domain proficiency.",
    icon: "FileText"
  },

  // ═══════════════════════════════════════════════
  // LINKEDIN & MICROSOFT — 9 Certificates
  // ═══════════════════════════════════════════════
  {
    id: "microsoft-genai-career",
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    score: "Professional Cert",
    tag: "LinkedIn",
    category: "LinkedIn & Microsoft",
    fileUrl: "/certificates/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.pdf",
    description: "Generative AI concepts, Large Language Models, prompt engineering, and ethical AI implementation.",
    icon: "Sparkles"
  },
  {
    id: "microsoft-azure-ai-essentials",
    title: "Microsoft Azure AI Essentials Professional Certificate",
    issuer: "Microsoft & LinkedIn",
    score: "Professional Cert",
    tag: "Azure AI",
    category: "LinkedIn & Microsoft",
    fileUrl: "/certificates/CertificateOfCompletion_Microsoft Azure AI Essentials Professional Certificate by Microsoft and LinkedIn.pdf",
    description: "Cloud-native AI vision, speech, language, and predictive ML models on Microsoft Azure.",
    icon: "Cloud"
  },
  {
    id: "linkedin-ethics-genai-1",
    title: "Ethics in the Age of Generative AI",
    issuer: "LinkedIn Learning",
    score: "Certified",
    tag: "LinkedIn",
    category: "LinkedIn & Microsoft",
    fileUrl: "/certificates/CertificateOfCompletion_Ethics in the Age of Generative AI.pdf",
    description: "Understanding ethical considerations, bias mitigation, and responsible AI deployment strategies.",
    icon: "Shield"
  },
  {
    id: "linkedin-ethics-genai-2",
    title: "Ethics in Generative AI — Advanced Principles",
    issuer: "LinkedIn Learning",
    score: "Certified",
    tag: "LinkedIn",
    category: "LinkedIn & Microsoft",
    fileUrl: "/certificates/CertificateOfCompletion_Ethics in the Age of Generative AI (1).pdf",
    description: "In-depth study on transparency, privacy safeguards, and algorithmic fairness in GenAI.",
    icon: "Shield"
  },
  {
    id: "linkedin-ethics-genai-3",
    title: "Responsible AI Governance & Compliance",
    issuer: "LinkedIn Learning",
    score: "Certified",
    tag: "LinkedIn",
    category: "LinkedIn & Microsoft",
    fileUrl: "/certificates/CertificateOfCompletion_Ethics in the Age of Generative AI (2).pdf",
    description: "Frameworks for AI governance, legal compliance, and safety auditing in enterprise AI.",
    icon: "Shield"
  },
  {
    id: "linkedin-human-skills-ai",
    title: "Investing in Human Skills in the Age of AI",
    issuer: "LinkedIn Learning",
    score: "Certified",
    tag: "LinkedIn",
    category: "LinkedIn & Microsoft",
    fileUrl: "/certificates/CertificateOfCompletion_Investing in Human Skills in the Age of AI.pdf",
    description: "Navigating human-AI collaboration, critical thinking, emotional intelligence, and adaptability.",
    icon: "Users"
  },
  {
    id: "linkedin-copilot-prompting",
    title: "Microsoft Copilot: The Art of Prompt Writing",
    issuer: "LinkedIn Learning",
    score: "Certified",
    tag: "LinkedIn",
    category: "LinkedIn & Microsoft",
    fileUrl: "/certificates/CertificateOfCompletion_Microsoft Copilot The Art of Prompt Writing.pdf",
    description: "Mastering prompt engineering techniques to maximize productivity with Microsoft Copilot.",
    icon: "Sparkles"
  },
  {
    id: "linkedin-what-is-genai",
    title: "What Is Generative AI?",
    issuer: "LinkedIn Learning",
    score: "Certified",
    tag: "LinkedIn",
    category: "LinkedIn & Microsoft",
    fileUrl: "/certificates/CertificateOfCompletion_What Is Generative AI.pdf",
    description: "Foundational mechanics of generative pre-trained transformers, diffusion models, and neural nets.",
    icon: "BrainCircuit"
  },
  {
    id: "linkedin-ai-literacy",
    title: "Your Top AI Questions Answered: AI Literacy for Everyone",
    issuer: "LinkedIn Learning",
    score: "Certified",
    tag: "LinkedIn",
    category: "LinkedIn & Microsoft",
    fileUrl: "/certificates/CertificateOfCompletion_Your Top AI Questions Answered AI Literacy for Everyone.pdf",
    description: "Comprehensive primer demystifying artificial intelligence concepts for technical and non-technical audiences.",
    icon: "BookOpen"
  },

  // ═══════════════════════════════════════════════
  // GOOGLE — 3 Credentials
  // ═══════════════════════════════════════════════
  {
    id: "google-cloud-foundations",
    title: "Google Cloud Foundations",
    issuer: "Google",
    score: "Certified",
    tag: "Google",
    category: "Google",
    fileUrl: "/certificates/GOOGLE CERT-1.pdf",
    description: "Google Cloud Platform foundational architectures, storage systems, compute engines, and IAM.",
    icon: "Cloud"
  },
  {
    id: "google-ai-analytics",
    title: "Google AI & Data Analytics Specialization",
    issuer: "Google",
    score: "Certified",
    tag: "Google",
    category: "Google",
    fileUrl: "/certificates/GOOGLE CERT-2.pdf",
    description: "Advanced Google AI services, BigQuery data pipelines, and machine learning analytics.",
    icon: "BrainCircuit"
  },
  {
    id: "google-cloud-skill-badge",
    title: "Google Cloud Skill & AI Verified Badge",
    issuer: "Google Cloud",
    score: "Verified Badge",
    tag: "Google",
    category: "Google",
    fileUrl: "/certificates/708ead53-fada-450d-baef-dc27569317a3.png",
    description: "Verified Google Cloud digital skill badge recognizing hands-on cloud and AI lab completions.",
    icon: "Award"
  },

  // ═══════════════════════════════════════════════
  // INFOSYS SPRINGBOARD — 22 Certificates
  // ═══════════════════════════════════════════════
  {
    id: "infosys-1",
    title: "Software Engineering Fundamentals",
    issuer: "Infosys Springboard",
    score: "Verified",
    tag: "Infosys",
    category: "Infosys Springboard",
    fileUrl: "/certificates/1 INFOSYS SPRING CERT...pdf",
    description: "Core software engineering principles, SDLC methodologies, and agile development practices.",
    icon: "Code2"
  },
  {
    id: "infosys-2",
    title: "Python Programming Essentials",
    issuer: "Infosys Springboard",
    score: "Verified",
    tag: "Infosys",
    category: "Infosys Springboard",
    fileUrl: "/certificates/2 INFOSYS SPRING CERT...pdf",
    description: "Python fundamentals, data structures, OOP concepts, and scripting for automation.",
    icon: "Code2"
  },
  {
    id: "infosys-3",
    title: "Java Programming Foundations",
    issuer: "Infosys Springboard",
    score: "Verified",
    tag: "Infosys",
    category: "Infosys Springboard",
    fileUrl: "/certificates/3 INFOSYS SPRING CERT...pdf",
    description: "Java syntax, object-oriented design patterns, multithreading, and exception handling.",
    icon: "Code2"
  },
  {
    id: "infosys-4",
    title: "Web Development Basics",
    issuer: "Infosys Springboard",
    score: "Verified",
    tag: "Infosys",
    category: "Infosys Springboard",
    fileUrl: "/certificates/4 INFOSYS SPRING CERT...pdf",
    description: "HTML5, CSS3, and JavaScript fundamentals for building responsive modern web apps.",
    icon: "Globe"
  },
  {
    id: "infosys-5",
    title: "Database Management Systems",
    issuer: "Infosys Springboard",
    score: "Verified",
    tag: "Infosys",
    category: "Infosys Springboard",
    fileUrl: "/certificates/5 INFOSYS SPRING CERT...pdf",
    description: "Relational database design, SQL queries, normalization, and transaction management.",
    icon: "Database"
  },
  {
    id: "infosys-6",
    title: "Data Structures & Algorithms",
    issuer: "Infosys Springboard",
    score: "Verified",
    tag: "Infosys",
    category: "Infosys Springboard",
    fileUrl: "/certificates/6 INFOSYS SPRING CERT...pdf",
    description: "Arrays, linked lists, trees, graphs, sorting algorithms, and complexity analysis.",
    icon: "GitFork"
  },
  {
    id: "infosys-7",
    title: "Cloud Computing Fundamentals",
    issuer: "Infosys Springboard",
    score: "Verified",
    tag: "Infosys",
    category: "Infosys Springboard",
    fileUrl: "/certificates/7 INFOSYS SPRING CERT...pdf",
    description: "Cloud service models (IaaS, PaaS, SaaS), virtualization, and deployment strategies.",
    icon: "Cloud"
  },
  {
    id: "infosys-8",
    title: "Artificial Intelligence Basics",
    issuer: "Infosys Springboard",
    score: "Verified",
    tag: "Infosys",
    category: "Infosys Springboard",
    fileUrl: "/certificates/8 INFOSYS SPRING CERT...pdf",
    description: "AI concepts, intelligent agents, search algorithms, and knowledge representation.",
    icon: "BrainCircuit"
  },
  {
    id: "infosys-9",
    title: "Machine Learning Introduction",
    issuer: "Infosys Springboard",
    score: "Verified",
    tag: "Infosys",
    category: "Infosys Springboard",
    fileUrl: "/certificates/9 INFOSYS SPRING CERT...pdf",
    description: "Supervised and unsupervised learning, regression, classification, and model evaluation.",
    icon: "BrainCircuit"
  },
  {
    id: "infosys-10",
    title: "Cybersecurity Essentials",
    issuer: "Infosys Springboard",
    score: "Verified",
    tag: "Infosys",
    category: "Infosys Springboard",
    fileUrl: "/certificates/10 INFOSYS SPRING CERT...pdf",
    description: "Network security, cryptography, threat analysis, and ethical hacking fundamentals.",
    icon: "Shield"
  },
  {
    id: "infosys-11",
    title: "DevOps & CI/CD Pipelines",
    issuer: "Infosys Springboard",
    score: "Verified",
    tag: "Infosys",
    category: "Infosys Springboard",
    fileUrl: "/certificates/11 INFOSYS SPRING CERT...pdf",
    description: "Continuous integration, continuous delivery, containerization, and deployment automation.",
    icon: "Workflow"
  },
  {
    id: "infosys-12",
    title: "Agile & Scrum Methodology",
    issuer: "Infosys Springboard",
    score: "Verified",
    tag: "Infosys",
    category: "Infosys Springboard",
    fileUrl: "/certificates/12 INFOSYS SPRING CERT...pdf",
    description: "Agile principles, Scrum framework, sprint planning, and retrospective techniques.",
    icon: "Target"
  },
  {
    id: "infosys-13",
    title: "Big Data Analytics",
    issuer: "Infosys Springboard",
    score: "Verified",
    tag: "Infosys",
    category: "Infosys Springboard",
    fileUrl: "/certificates/13 INFOSYS SPRING CERT...pdf",
    description: "Big data ecosystem, Hadoop, MapReduce, and real-time data processing frameworks.",
    icon: "BarChart3"
  },
  {
    id: "infosys-14",
    title: "Internet of Things (IoT)",
    issuer: "Infosys Springboard",
    score: "Verified",
    tag: "Infosys",
    category: "Infosys Springboard",
    fileUrl: "/certificates/14 INFOSYS SPRING CERT...pdf",
    description: "IoT architecture, sensor networks, edge computing, and smart device integration.",
    icon: "Cpu"
  },
  {
    id: "infosys-15",
    title: "Natural Language Processing",
    issuer: "Infosys Springboard",
    score: "Verified",
    tag: "Infosys",
    category: "Infosys Springboard",
    fileUrl: "/certificates/15 INFOSYS SPRING CERT...pdf",
    description: "Text processing, tokenization, sentiment analysis, and language model foundations.",
    icon: "MessageSquare"
  },
  {
    id: "infosys-16",
    title: "Deep Learning Foundations",
    issuer: "Infosys Springboard",
    score: "Verified",
    tag: "Infosys",
    category: "Infosys Springboard",
    fileUrl: "/certificates/16 INFOSYS SPRING CERT...pdf",
    description: "Neural networks, backpropagation, CNNs, RNNs, and deep learning optimization.",
    icon: "Network"
  },
  {
    id: "infosys-17",
    title: "Blockchain Technology",
    issuer: "Infosys Springboard",
    score: "Verified",
    tag: "Infosys",
    category: "Infosys Springboard",
    fileUrl: "/certificates/17 INFOSYS SPRING CERT...pdf",
    description: "Distributed ledger technology, smart contracts, and decentralized applications.",
    icon: "Link"
  },
  {
    id: "infosys-18",
    title: "API Design & Development",
    issuer: "Infosys Springboard",
    score: "Verified",
    tag: "Infosys",
    category: "Infosys Springboard",
    fileUrl: "/certificates/18 INFOSYS SPRING CERT...pdf",
    description: "RESTful API design, authentication, versioning, and API gateway management.",
    icon: "Plug"
  },
  {
    id: "infosys-19",
    title: "Software Testing & QA",
    issuer: "Infosys Springboard",
    score: "Verified",
    tag: "Infosys",
    category: "Infosys Springboard",
    fileUrl: "/certificates/19 INFOSYS SPRING CERT...pdf",
    description: "Unit testing, integration testing, test automation, and quality assurance frameworks.",
    icon: "CheckSquare"
  },
  {
    id: "infosys-20",
    title: "Data Visualization Techniques",
    issuer: "Infosys Springboard",
    score: "Verified",
    tag: "Infosys",
    category: "Infosys Springboard",
    fileUrl: "/certificates/20 INFOSYS SPRING CERT...pdf",
    description: "Dashboard design, chart types, storytelling with data, and visualization best practices.",
    icon: "PieChart"
  },
  {
    id: "infosys-21",
    title: "React & Frontend Engineering",
    issuer: "Infosys Springboard",
    score: "Verified",
    tag: "Infosys",
    category: "Infosys Springboard",
    fileUrl: "/certificates/21 INFOSYS SPRING CERT...pdf",
    description: "React component architecture, state management, hooks, and modern frontend patterns.",
    icon: "Globe"
  },
  {
    id: "infosys-22",
    title: "Microservices Architecture",
    issuer: "Infosys Springboard",
    score: "Verified",
    tag: "Infosys",
    category: "Infosys Springboard",
    fileUrl: "/certificates/22 INFOSYS SPRING CERT...pdf",
    description: "Service decomposition, containerized deployment, API gateways, and event-driven design.",
    icon: "Layers"
  },

  // ═══════════════════════════════════════════════
  // TCS iON — 13 Credentials
  // ═══════════════════════════════════════════════
  {
    id: "tcs-ion-cert-1",
    title: "TCS iON Career Edge — Young Professional",
    issuer: "TCS iON",
    score: "Certified",
    tag: "TCS iON",
    category: "TCS iON",
    fileUrl: "/certificates/TCS ION CERT-1.pdf",
    description: "Enterprise software lifecycle, digital agile practices, and professional communication.",
    icon: "Briefcase"
  },
  {
    id: "tcs-ion-cert-2",
    title: "TCS iON — Business Communication Skills",
    issuer: "TCS iON",
    score: "Certified",
    tag: "TCS iON",
    category: "TCS iON",
    fileUrl: "/certificates/TCS ION CERT-2.pdf",
    description: "Business communication, presentation skills, and corporate writing techniques.",
    icon: "MessageSquare"
  },
  {
    id: "tcs-ion-cert-3",
    title: "TCS iON — Information Technology Foundations",
    issuer: "TCS iON",
    score: "Certified",
    tag: "TCS iON",
    category: "TCS iON",
    fileUrl: "/certificates/TCS ION CERT-3.pdf",
    description: "Information technology fundamentals, computing hardware, and software ecosystems.",
    icon: "Monitor"
  },
  {
    id: "tcs-ion-cert-4",
    title: "TCS iON — Quantitative Aptitude & Reasoning",
    issuer: "TCS iON",
    score: "Certified",
    tag: "TCS iON",
    category: "TCS iON",
    fileUrl: "/certificates/TCS ION CERT-4.pdf",
    description: "Quantitative aptitude, logical reasoning, and verbal ability for placement readiness.",
    icon: "Brain"
  },
  {
    id: "tcs-ion-cert-5",
    title: "TCS iON — Digital Marketing Strategy",
    issuer: "TCS iON",
    score: "Certified",
    tag: "TCS iON",
    category: "TCS iON",
    fileUrl: "/certificates/TCS ION CERT-5.pdf",
    description: "SEO, social media marketing, content strategy, and digital analytics.",
    icon: "TrendingUp"
  },
  {
    id: "tcs-ion-cert-6",
    title: "TCS iON — Business Analytics & Data Insights",
    issuer: "TCS iON",
    score: "Certified",
    tag: "TCS iON",
    category: "TCS iON",
    fileUrl: "/certificates/TCS ION CERT-6.pdf",
    description: "Data-driven decision making, statistical analysis, and business intelligence tools.",
    icon: "BarChart3"
  },
  {
    id: "tcs-ion-cert-7",
    title: "TCS iON — Professional Soft Skills Mastery",
    issuer: "TCS iON",
    score: "Certified",
    tag: "TCS iON",
    category: "TCS iON",
    fileUrl: "/certificates/TCS ION CERT-7.pdf",
    description: "Leadership, teamwork, time management, and interpersonal effectiveness.",
    icon: "Users"
  },
  {
    id: "tcs-ion-report-overall",
    title: "TCS Comprehensive Evaluation & Competency Report",
    issuer: "TCS iON",
    score: "Evaluation Report",
    tag: "TCS iON",
    category: "TCS iON",
    fileUrl: "/certificates/Gokulnath M report .pdf",
    description: "Comprehensive skill audit report measuring technical, analytical, and professional competencies.",
    icon: "FileText"
  },
  {
    id: "tcs-ion-report-2",
    title: "TCS iON — Performance Assessment Report II",
    issuer: "TCS iON",
    score: "Report",
    tag: "TCS iON",
    category: "TCS iON",
    fileUrl: "/certificates/TCS ION REPORT  - 2.pdf",
    description: "Detailed performance analytics and competency assessment report.",
    icon: "FileText"
  },
  {
    id: "tcs-ion-report-3",
    title: "TCS iON — Performance Assessment Report III",
    issuer: "TCS iON",
    score: "Report",
    tag: "TCS iON",
    category: "TCS iON",
    fileUrl: "/certificates/TCS ION REPORT  - 3.pdf",
    description: "Assessment results with skill mapping and improvement recommendations.",
    icon: "FileText"
  },
  {
    id: "tcs-ion-report-4",
    title: "TCS iON — Performance Assessment Report IV",
    issuer: "TCS iON",
    score: "Report",
    tag: "TCS iON",
    category: "TCS iON",
    fileUrl: "/certificates/TCS ION REPORT  - 4.pdf",
    description: "Technical skills evaluation and domain proficiency analysis.",
    icon: "FileText"
  },
  {
    id: "tcs-ion-report-5",
    title: "TCS iON — Performance Assessment Report V",
    issuer: "TCS iON",
    score: "Report",
    tag: "TCS iON",
    category: "TCS iON",
    fileUrl: "/certificates/TCS ION REPORT  - 5.pdf",
    description: "Competency benchmarking and career readiness assessment.",
    icon: "FileText"
  },
  {
    id: "tcs-ion-report-6",
    title: "TCS iON — Performance Assessment Report VI",
    issuer: "TCS iON",
    score: "Report",
    tag: "TCS iON",
    category: "TCS iON",
    fileUrl: "/certificates/TCS ION REPORT  - 6.pdf",
    description: "Learning progress tracking and milestone achievement report.",
    icon: "FileText"
  },

  // ═══════════════════════════════════════════════
  // NPTEL & ACADEMICS — 5 Credentials
  // ═══════════════════════════════════════════════
  {
    id: "nptel-hci-sem4",
    title: "Human-Computer Interfaces — NPTEL Elite",
    issuer: "IIT Guwahati via NPTEL",
    score: "63% Elite",
    tag: "NPTEL Elite",
    category: "NPTEL & Academics",
    fileUrl: "/certificates/NPTEL RESULT SEM-4.pdf",
    description: "User-centric interface design principles, cognitive ergonomics, and accessibility frameworks.",
    icon: "Monitor"
  },
  {
    id: "nptel-iot-sem3",
    title: "Introduction to Internet of Things — NPTEL Silver",
    issuer: "NPTEL Elite Silver",
    score: "80% Silver Elite",
    tag: "NPTEL Silver",
    category: "NPTEL & Academics",
    fileUrl: "/certificates/NPTEL_RESULT_SEM 3.pdf",
    description: "IoT system architectures, sensor networks, cloud integration, and hardware-software protocols.",
    icon: "Cpu"
  },
  {
    id: "nptel-hall-ticket",
    title: "NPTEL National Exam Hall Ticket — Sem 4",
    issuer: "NPTEL / SWAYAM",
    score: "Exam Credential",
    tag: "NPTEL",
    category: "NPTEL & Academics",
    fileUrl: "/certificates/NPTEL SEM 4 HALL TICKET.pdf",
    description: "Official NPTEL examination hall ticket for Semester 4 national certification exam.",
    icon: "FileText"
  },
  {
    id: "mat-cert-1",
    title: "Mathematics Ramanujan Proficiency — Linear Algebra & Calculus",
    issuer: "Ramanujan Math Society",
    score: "Proficiency",
    tag: "Academics",
    category: "NPTEL & Academics",
    fileUrl: "/certificates/mat cert 1.pdf",
    description: "Advanced mathematical concepts, vector calculus, differential equations, and linear transformations.",
    icon: "Calculator"
  },
  {
    id: "mat-cert-2",
    title: "Mathematics Ramanujan Proficiency — Statistics & Discrete Math",
    issuer: "Ramanujan Math Society",
    score: "Proficiency",
    tag: "Academics",
    category: "NPTEL & Academics",
    fileUrl: "/certificates/mat cert 2.pdf",
    description: "Probability theory, statistical inference, graph theory, and discrete mathematics for AI.",
    icon: "Calculator"
  },

  // ═══════════════════════════════════════════════
  // SIMPLILEARN — 6 Certificates
  // ═══════════════════════════════════════════════
  {
    id: "simplilearn-1",
    title: "Machine Learning Essentials",
    issuer: "Simplilearn",
    score: "Certified",
    tag: "Simplilearn",
    category: "Simplilearn",
    fileUrl: "/certificates/SIMPLY LEARN CERT-1.pdf",
    description: "Supervised and unsupervised learning, decision trees, and model optimization.",
    icon: "BrainCircuit"
  },
  {
    id: "simplilearn-2",
    title: "Data Science with Python",
    issuer: "Simplilearn",
    score: "Certified",
    tag: "Simplilearn",
    category: "Simplilearn",
    fileUrl: "/certificates/SIMPLY LEARN CERT-2.pdf",
    description: "Python for data analysis, Pandas, NumPy, and statistical modeling techniques.",
    icon: "Code2"
  },
  {
    id: "simplilearn-3",
    title: "Deep Learning Specialization",
    issuer: "Simplilearn",
    score: "Certified",
    tag: "Simplilearn",
    category: "Simplilearn",
    fileUrl: "/certificates/SIMPLY LEARN CERT-3.pdf",
    description: "Neural networks, TensorFlow, Keras, and deep learning model architectures.",
    icon: "Network"
  },
  {
    id: "simplilearn-pers-1",
    title: "Personal Development — Leadership & Teamwork",
    issuer: "Simplilearn",
    score: "Certified",
    tag: "Simplilearn",
    category: "Simplilearn",
    fileUrl: "/certificates/SIMPLY LEARN(pers..) CERT-1.pdf",
    description: "Leadership principles, team management, and strategic decision-making skills.",
    icon: "Users"
  },
  {
    id: "simplilearn-pers-2",
    title: "Personal Development — Professional Communication",
    issuer: "Simplilearn",
    score: "Certified",
    tag: "Simplilearn",
    category: "Simplilearn",
    fileUrl: "/certificates/SIMPLY LEARN(pers..) CERT-2.pdf",
    description: "Professional communication, public speaking, and workplace collaboration skills.",
    icon: "MessageSquare"
  },
  {
    id: "simplilearn-pers-3",
    title: "Personal Development — Structured Problem Solving",
    issuer: "Simplilearn",
    score: "Certified",
    tag: "Simplilearn",
    category: "Simplilearn",
    fileUrl: "/certificates/SIMPLY LEARN(pers..) CERT-3.pdf",
    description: "Critical thinking, analytical reasoning, and structured problem-solving approaches.",
    icon: "Lightbulb"
  },

  // ═══════════════════════════════════════════════
  // IEEE & BADGES — 2 Credentials
  // ═══════════════════════════════════════════════
  {
    id: "ieee-cert",
    title: "IEEE Technical & Engineering Certification",
    issuer: "IEEE",
    score: "Certified",
    tag: "IEEE",
    category: "IEEE & Badges",
    fileUrl: "/certificates/IEEE CERT...pdf",
    description: "IEEE engineering standards, computing paradigms, and technical research methodologies.",
    icon: "Award"
  },
  {
    id: "ai-impact-pledge-badge",
    title: "AI Impact & Responsible AI Pledge Badge",
    issuer: "IEEE & Google",
    score: "Verified Badge",
    tag: "IEEE / Google",
    category: "IEEE & Badges",
    fileUrl: "/certificates/ai-impact-pledge-badge.pdf",
    description: "Ethical AI development pledge certifying commitment to fair, unbiased, and safe AI applications.",
    icon: "Award"
  },

  // ═══════════════════════════════════════════════
  // IIT BOMBAY — 1 Certificate
  // ═══════════════════════════════════════════════
  {
    id: "iitb-java",
    title: "Java Programming — IIT Bombay Spoken Tutorial",
    issuer: "IIT Bombay & EduPyramids",
    score: "82.5% Distinction",
    tag: "IIT Bombay",
    category: "IIT Bombay",
    fileUrl: "/certificates/SPOKEN TUTORIAL CERT....pdf",
    description: "Object-Oriented programming, Java Swing GUI, multithreading, and collections framework.",
    icon: "Code"
  }
];

export const resumeData = [
  {
    id: "resume-double-side",
    title: "Resume — Double Side",
    subtitle: "Comprehensive Two-Page Resume",
    description: "A detailed two-page resume covering education, technical skills, projects, certifications, and professional experience.",
    fileUrl: "/Resume-GokulnathM-DoubleSide.pdf",
    format: "PDF",
    pages: "2 Pages",
    fileSize: "65 KB"
  },
  {
    id: "resume-single-side",
    title: "Resume — Single Side",
    subtitle: "Concise One-Page Resume",
    description: "A focused one-page resume highlighting key qualifications, core competencies, and career highlights for quick reference.",
    fileUrl: "/Resume-GokulnathM-SingleSide.pdf",
    format: "PDF",
    pages: "1 Page",
    fileSize: "29 KB"
  }
];
