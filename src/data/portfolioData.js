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
    id: "food-rescue",
    title: "Smart Food Rescue Network",
    subtitle: "Java Mini Project for Social Impact",
    category: "Java / Systems",
    featured: true,
    description: "An intelligent food redistribution network built with Java Swing and multithreading that connects food donors (restaurants, events) with receivers (NGOs, shelters) using smart matching data analytics to eliminate food waste.",
    tools: ["Java Swing (GUI)", "Multithreading", "Collections (ArrayList, HashMap, PriorityQueue)", "Data Analytics"],
    highlights: [
      "Real-time background matching algorithm based on urgency and geographical priority queue",
      "Interactive Java Swing interface for donor registration and NGO collection tracking",
      "Reduces food waste while ensuring efficient logistically-optimized food delivery",
      "Implements OOP principles and thread safety for concurrent donor requests"
    ],
    architecture: [
      { step: "1. Donor Input", detail: "Restaurants register surplus food quantity, location & shelf-life" },
      { step: "2. Priority Engine", detail: "PriorityQueue ranks urgency based on food decay timer & demand" },
      { step: "3. Smart Match", detail: "Background worker thread matches nearest receiver NGO" },
      { step: "4. Analytics", detail: "Generates report on total meals saved and waste reduction metric" }
    ],
    metrics: {
      mealsSaved: "1,200+",
      matchingSpeed: "< 50ms",
      threadEfficiency: "99.9%"
    },
    demoUrl: "#",
    githubUrl: "https://github.com/Gokulnath33/smart-food-rescue-network"
  },
  {
    id: "fullstack-ai-edge",
    title: "Full-Stack AI Web Platform",
    subtitle: "Ucanly InfoTech Internship Deliverable",
    category: "Full-Stack / AI",
    featured: true,
    description: "Responsive full-stack web application integrating cutting-edge AI features, intelligent user workflows, dynamic dashboards, and virtual team collaboration components.",
    tools: ["React", "JavaScript (ES6+)", "Node.js", "AI API Integration", "CSS3 / Glassmorphism"],
    highlights: [
      "Integrated machine learning models for real-time web application insights",
      "Collaborated with cross-functional virtual teams to deliver scalable full-stack features",
      "Optimized frontend performance and accessibility scores across mobile and desktop viewports"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Gokulnath33"
  },
  {
    id: "data-analytics-viz",
    title: "Predictive AI Data Analytics Suite",
    subtitle: "Data Science & Machine Learning Pipeline",
    category: "AI & ML",
    featured: false,
    description: "End-to-end data analytics and ML model evaluation pipeline for exploratory data analysis, outlier detection, and performance chart generation.",
    tools: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn"],
    highlights: [
      "Automated preprocessing pipeline for missing values and feature scaling",
      "Evaluates multiple classification & regression models with visual confusion matrix charts",
      "Exports actionable insight summaries for data-driven decisions"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Gokulnath33"
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
    description: "Java syntax, object-oriented design patterns, and exception handling.",
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
    description: "HTML5, CSS3, and JavaScript fundamentals for building responsive websites.",
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
    description: "Arrays, linked lists, trees, graphs, sorting, and searching algorithms.",
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
  // TCS iON — 7 Certificates + 6 Reports = 13
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
    title: "TCS iON — Communication Skills",
    issuer: "TCS iON",
    score: "Certified",
    tag: "TCS iON",
    category: "TCS iON",
    fileUrl: "/certificates/TCS ION CERT-2.pdf",
    description: "Business communication, presentation skills, and professional writing techniques.",
    icon: "MessageSquare"
  },
  {
    id: "tcs-ion-cert-3",
    title: "TCS iON — IT Foundations",
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
    title: "TCS iON — Aptitude & Reasoning",
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
    title: "TCS iON — Digital Marketing",
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
    title: "TCS iON — Business Analytics",
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
    title: "TCS iON — Soft Skills Mastery",
    issuer: "TCS iON",
    score: "Certified",
    tag: "TCS iON",
    category: "TCS iON",
    fileUrl: "/certificates/TCS ION CERT-7.pdf",
    description: "Leadership, teamwork, time management, and interpersonal effectiveness.",
    icon: "Users"
  },
  {
    id: "tcs-ion-report-2",
    title: "TCS iON — Performance Report II",
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
    title: "TCS iON — Performance Report III",
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
    title: "TCS iON — Performance Report IV",
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
    title: "TCS iON — Performance Report V",
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
    title: "TCS iON — Performance Report VI",
    issuer: "TCS iON",
    score: "Report",
    tag: "TCS iON",
    category: "TCS iON",
    fileUrl: "/certificates/TCS ION REPORT  - 6.pdf",
    description: "Learning progress tracking and milestone achievement report.",
    icon: "FileText"
  },
  {
    id: "tcs-ion-report-7",
    title: "TCS iON — Performance Report VII",
    issuer: "TCS iON",
    score: "Report",
    tag: "TCS iON",
    category: "TCS iON",
    fileUrl: "/certificates/TCS ION REPORT  - 7.pdf",
    description: "Final assessment summary with comprehensive skill evaluation.",
    icon: "FileText"
  },

  // ═══════════════════════════════════════════════
  // GOOGLE — 3 Certificates
  // ═══════════════════════════════════════════════
  {
    id: "google-cert-1",
    title: "Google Cloud Foundations",
    issuer: "Google",
    score: "Certified",
    tag: "Google",
    category: "Google",
    fileUrl: "/certificates/GOOGLE CERT-1.pdf",
    description: "Google Cloud Platform foundational architectures, data management, and security.",
    icon: "Cloud"
  },
  {
    id: "google-cert-2",
    title: "Google AI & Data Analytics",
    issuer: "Google",
    score: "Certified",
    tag: "Google",
    category: "Google",
    fileUrl: "/certificates/GOOGLE CERT-2.pdf",
    description: "Advanced Google AI, data pipeline construction, and cloud analytics.",
    icon: "BrainCircuit"
  },
  {
    id: "google-ai-pledge",
    title: "AI Impact Pledge Badge",
    issuer: "Google",
    score: "Verified Badge",
    tag: "Google",
    category: "Google",
    fileUrl: "/certificates/ai-impact-pledge-badge.pdf",
    description: "AI ethics, responsible AI development, and societal impact commitment pledge.",
    icon: "Award"
  },

  // ═══════════════════════════════════════════════
  // MICROSOFT & LINKEDIN — 2 Certificates
  // ═══════════════════════════════════════════════
  {
    id: "microsoft-genai",
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    score: "Professional Cert",
    tag: "Microsoft",
    category: "Microsoft & LinkedIn",
    fileUrl: "/certificates/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.pdf",
    description: "Generative AI concepts, Large Language Models, prompt engineering, and ethical AI implementation.",
    icon: "Sparkles"
  },
  {
    id: "microsoft-azure-ai",
    title: "Microsoft Azure AI Essentials",
    issuer: "Microsoft & LinkedIn",
    score: "Professional Cert",
    tag: "Microsoft Azure",
    category: "Microsoft & LinkedIn",
    fileUrl: "/certificates/CertificateOfCompletion_Microsoft Azure AI Essentials Professional Certificate by Microsoft and LinkedIn.pdf",
    description: "Cloud-native AI vision, speech, language, and predictive ML models on Azure.",
    icon: "Cloud"
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
    title: "Personal Development — Leadership",
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
    title: "Personal Development — Communication",
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
    title: "Personal Development — Problem Solving",
    issuer: "Simplilearn",
    score: "Certified",
    tag: "Simplilearn",
    category: "Simplilearn",
    fileUrl: "/certificates/SIMPLY LEARN(pers..) CERT-3.pdf",
    description: "Critical thinking, analytical reasoning, and structured problem-solving approaches.",
    icon: "Lightbulb"
  },

  // ═══════════════════════════════════════════════
  // NPTEL & ACADEMICS — 5 Documents
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
    id: "nptel-hall-ticket",
    title: "NPTEL Exam Hall Ticket — Sem 4",
    issuer: "NPTEL / SWAYAM",
    score: "Exam Credential",
    tag: "NPTEL",
    category: "NPTEL & Academics",
    fileUrl: "/certificates/NPTEL SEM 4 HALL TICKET.pdf",
    description: "Official NPTEL examination hall ticket for Semester 4 certification exam.",
    icon: "FileText"
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
    id: "mat-cert-1",
    title: "Mathematics Proficiency — Certificate I",
    issuer: "Academic Institution",
    score: "Certified",
    tag: "Academics",
    category: "NPTEL & Academics",
    fileUrl: "/certificates/mat cert 1.pdf",
    description: "Advanced mathematical concepts, linear algebra, and applied calculus proficiency.",
    icon: "Calculator"
  },
  {
    id: "mat-cert-2",
    title: "Mathematics Proficiency — Certificate II",
    issuer: "Academic Institution",
    score: "Certified",
    tag: "Academics",
    category: "NPTEL & Academics",
    fileUrl: "/certificates/mat cert 2.pdf",
    description: "Probability, statistics, and discrete mathematics for engineering applications.",
    icon: "Calculator"
  },

  // ═══════════════════════════════════════════════
  // IEEE — 1 Certificate
  // ═══════════════════════════════════════════════
  {
    id: "ieee-cert",
    title: "IEEE Technical Certification",
    issuer: "IEEE",
    score: "Certified",
    tag: "IEEE",
    category: "IEEE",
    fileUrl: "/certificates/IEEE CERT...pdf",
    description: "IEEE engineering standards, computing paradigms, and technical research methodologies.",
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
