export const skills = [
  // Programming Languages
  { name: "Python", group: "Programming", mark: "Py", color: "yellow", detail: "Scripting & Backend" },
  { name: "C++", group: "Programming", mark: "C+", color: "blue", detail: "DSA & OOP" },
  { name: "Java", group: "Programming", mark: "♨", color: "orange", detail: "Object-oriented core" },

  // Core Technical Skills
  { name: "Data Structures & Algorithms", group: "Core CS", mark: "⌥", color: "mint", detail: "Problem solving" },
  { name: "Object-Oriented Programming", group: "Core CS", mark: "◎", color: "purple", detail: "Modular design" },
  { name: "Machine Learning", group: "Core CS", mark: "✣", color: "cyan", detail: "AI & ML models" },

  // Web Technologies
  { name: "React.js", group: "Web Tech", mark: "⚛", color: "cyan", detail: "Frontend UI" },
  { name: "JavaScript", group: "Web Tech", mark: "JS", color: "yellow", detail: "ES6+ interactive logic" },
  { name: "HTML5", group: "Web Tech", mark: "5", color: "orange", detail: "Semantic markup" },
  { name: "CSS3", group: "Web Tech", mark: "✳", color: "blue", detail: "Responsive design" },

  // Database & Platforms
  { name: "FastAPI", group: "Backend & DB", mark: "⚡", color: "mint", detail: "High-performance APIs" },
  { name: "REST APIs", group: "Backend & DB", mark: "⇄", color: "blue", detail: "API integration" },
  { name: "MySQL", group: "Backend & DB", mark: "▤", color: "orange", detail: "Relational database" },
  { name: "MongoDB", group: "Backend & DB", mark: "🍃", color: "mint", detail: "NoSQL database" },

  // Tools & Software
  { name: "Git", group: "Tools", mark: "◆", color: "orange", detail: "Version control" },
  { name: "GitHub", group: "Tools", mark: "⌘", color: "white", detail: "Collaboration" },
  { name: "VS Code", group: "Tools", mark: "⟫", color: "blue", detail: "Development IDE" }
];

export const projects = [
  {
    number: "01",
    title: "SupportPilot",
    subtitle: "AI-Powered Ticket Management System",
    category: "AI & Web App",
    description: "An AI-powered ticket management platform designed for automatic ticket classification, priority assignment, dashboard analytics, and seamless REST API integration.",
    responsibilities: [
      "Developed a platform for automated ticket classification, prioritization, and tracking workflows.",
      "Implemented dynamic dashboard analytics and full REST API integration using FastAPI and React."
    ],
    tags: ["React.js", "JavaScript", "FastAPI", "Python", "REST APIs"],
    visual: "support",
    image: "/certificates/supportpilot.png",
    link: "https://grp3-infosys-springboard.vercel.app/login",
    github: "https://github.com/Pranjal-tech83/Grp3_InfosysSpringboard",
    note: "AI-powered ticket triage with FastAPI backend and modern React frontend deployed on Vercel."
  },
  {
    number: "02",
    title: "Visitor Management System",
    subtitle: "Web-Based Check-in & Record Platform",
    category: "Full Stack",
    description: "A comprehensive web-based application built to streamline visitor registration, manage check-in processes, and securely maintain visitor record databases.",
    responsibilities: [
      "Developed a web-based application to manage visitor registration and maintain structured visitor records.",
      "Designed a user-friendly interface and integrated database functionality to store and manage visitor information."
    ],
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL"],
    visual: "visitor",
    image: "/certificates/vms.png",
    link: "https://vms-ultimator.onrender.com/",
    github: "https://github.com/Aman-Kashyap-310304/VMS-Ultimator",
    note: "Visitor check-in interface with relational MySQL storage and Node/Express backend deployed on Render."
  }
];

export const experiences = [
  {
    role: "Intern",
    company: "Infosys Springboard",
    type: "Internship / Training",
    period: "June 2026 – September 2026",
    location: "Remote",
    highlight: "AI & Full-Stack Development",
    color: "mint",
    description: "Selected as an intern at Infosys Springboard, building AI-integrated enterprise software features and RESTful services.",
    responsibilities: [
      "Worked on SupportPilot – AI-Powered Ticket Management System, focusing on AI-based ticket classification, prioritization, and workflow management.",
      "Used Python, React.js, JavaScript, and FastAPI to develop application features, integrate REST APIs, and gain practical software development experience."
    ],
    skills: ["Python", "React.js", "FastAPI", "JavaScript", "REST APIs", "AI Workflow"]
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    institution: "Dronacharya College of Engineering, Gurugram",
    university: "Gurugram University",
    location: "Gurugram, India",
    period: "Expected 2028 (2025 — 2028)",
    status: "Currently Pursuing",
    badge: "Undergraduate Degree",
    score: "CGPA 7.7",
    color: "orange",
    image: "/certificates/btech.png",
    description: "Pursuing B.Tech specializing in Artificial Intelligence & Machine Learning with strong foundations in Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), and full-stack software development.",
    coursework: [
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOP)",
      "Machine Learning",
      "Python & C++ Programming",
      "Database Management Systems (MySQL)",
      "Web Technologies (React.js, JavaScript)"
    ],
    highlights: [
      "Achieved a 7.7 CGPA across engineering curriculum.",
      "Developed SupportPilot (AI ticket management system) with FastAPI and React."
    ]
  },
  {
    degree: "Diploma in Electrical Engineering",
    institution: "Government Polytechnic Manesar",
    university: "HSBTE (Haryana State Board of Technical Education)",
    location: "Manesar, India",
    period: "2021 — 2024",
    status: "Completed",
    badge: "Technical Diploma",
    score: "70%",
    color: "blue",
    image: "/certificates/Diploma.png",
    description: "Completed comprehensive technical diploma coursework with laboratory diagnostics in electrical circuits, control systems, and automation fundamentals.",
    coursework: [
      "Electrical Circuits & Systems",
      "Control Engineering",
      "Industrial Automation",
      "Power Electronics",
      "Engineering Mathematics"
    ],
    highlights: [
      "Graduated with 70% aggregate from HSBTE.",
      "Strong hardware & circuit fundamentals complementing software and embedded systems."
    ]
  },
  {
    degree: "Class X – CBSE",
    institution: "Central Board of Secondary Education (CBSE)",
    university: "Secondary Education",
    location: "India",
    period: "2021",
    status: "Completed",
    badge: "Secondary School",
    score: "80%",
    color: "purple",
    image: "/certificates/school.png",
    description: "Completed secondary education with rigorous foundations in mathematics, physical sciences, and introductory computer science.",
    coursework: [
      "Mathematics",
      "Science",
      "Information Technology",
      "English",
      "Social Science"
    ],
    highlights: [
      "Achieved 80% aggregate in CBSE Class 10 Board Examinations.",
      "Early foundation in analytical reasoning, mathematics, and science."
    ]
  }
];

export const certificates = [
  {
    id: "cert-01",
    title: "Python for Data Science",
    issuer: "IBM",
    category: "Data Science & AI",
    date: "May 28, 2026",
    credentialId: "727762f0-8fb1-40cd-b863-5c70de474fee",
    credentialUrl: "https://www.credly.com/badges/727762f0-8fb1-40cd-b863-5c70de474fee",
    image: "/certificates/ibm_pythons_certificate.png",
    pdfUrl: "/certificates/ibm_python_certificate.pdf",
    color: "blue",
    grade: "IBM Verified Credly Badge",
    description: "Earned from IBM, validating practical proficiency in Python programming for Data Science, data structures, analysis, and data libraries.",
    skills: ["Python", "Data Science", "Data Analysis", "IBM Credly"]
  },
  {
    id: "cert-02",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte / Forage",
    category: "Analytics & Engineering",
    date: "March 27, 2026",
    credentialId: "68bd4d2e9216515066c0143b",
    enrolmentCode: "YfqEaFqhfE86bFBQb",
    credentialUrl: "https://www.theforage.com/simulations/deloitte/data-analytics-eyea",
    image: "/certificates/deloitte_job_simulation_certificate_data_analysis.png",
    pdfUrl: "/certificates/deloitte_job_simulation_data_analysis.pdf",
    color: "mint",
    grade: "Completed Practical Tasks",
    description: "Completed Deloitte's practical enterprise job simulation focused on data analysis, forensic technology, telemetry, and business communication.",
    skills: ["Data Analysis", "Forensic Technology", "Business Analytics", "Deloitte"]
  },
  {
    id: "cert-03",
    title: "Programming in Java",
    issuer: "NPTEL (IIT / MoE Govt. of India)",
    category: "Programming",
    date: "Jan–Apr 2026 (12-Week Course)",
    credentialId: "NPTEL26CS36S855500471",
    credentialUrl: "https://nptel.ac.in/",
    image: "/certificates/nptel_certification.jpg",
    pdfUrl: "/certificates/nptel_certification.pdf",
    color: "orange",
    grade: "88% · Elite + Silver",
    description: "Comprehensive 12-week course certified by NPTEL and IIT, achieving an 88% Elite + Silver score in core Java, OOP design, multithreading, and collections.",
    skills: ["Java", "OOP Design", "Multithreading", "Collections", "DSA"]
  },
  {
    id: "cert-04",
    title: "C++ Programming By Example",
    issuer: "Infosys Springboard",
    category: "Programming",
    date: "March 2026",
    credentialId: "INFY-CPP-SPRINGBOARD",
    credentialUrl: "https://verify.onwingspan.com",
    image: "/certificates/c++_programming_by_example.png",
    pdfUrl: "/certificates/c++_programming_by_example.pdf",
    color: "yellow",
    grade: "Verified Course Certificate",
    description: "Certificate of completion awarded by Infosys Springboard for mastering C++ syntax, object-oriented concepts, and problem solving by example.",
    skills: ["C++", "OOP", "Memory Management", "Infosys Springboard"]
  }
];

export const personalInfo = {
  name: "Pranjal Kumar",
  title: "CSE (AI & ML) Student / Software Developer",
  phone: "8383035749",
  phoneFormatted: "+91 8383035749",
  email: "pranjal838303@gmail.com",
  location: "Gurugram, India",
  country: "India",
  github: "https://github.com/Pranjal-tech83",
  githubUser: "Pranjal-tech83",
  linkedin: "https://www.linkedin.com/in/pranjal-tech83",
  linkedinUser: "pranjal-tech83",
  summary: "B.Tech Computer Science and Engineering (AI & ML) student with hands-on project experience in Python, C++, React.js, JavaScript, and FastAPI. Developed SupportPilot, an AI-powered ticket management system featuring ticket classification, prioritization, dashboard analytics, and REST API integration. Strong foundation in Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP), and software development, seeking an entry-level Software Developer role."
};
