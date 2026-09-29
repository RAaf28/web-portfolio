export type Project = {
  name: string;
  label: string;
  images: { src: string; alt: string }[];
  stack: string[];
  description: string;
  highlights: string[];
  links: {
    demo?: string;
    github?: string;
  };
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const profile = {
  name: "Rafly Enggar Tiarso",
  title: "Systems & IT Support Engineer • Full-Stack Developer",
  summary:
    "Information Systems student with hands-on experience in full-stack web development, mobile app engineering, database systems, cloud services, and IT support. I build practical products that solve real problems and enjoy turning technical complexity into usable systems.",
  email: "rafly.tiarso@gmail.com",
  phone: "+62 87889382276",
  location: "Parung, Bogor, West Java",
  github: "https://github.com/RAaf28",
  linkedin: "https://www.linkedin.com",
};

export const projects: Project[] = [
  {
    name: "Clynic",
    label: "Clinic Management System",
    images: [
      { src: "/projects/clynic/dashboard.png", alt: "Clynic clinical operations dashboard" },
      { src: "/projects/clynic/appointments.png", alt: "Clynic appointment management screen" },
      { src: "/projects/clynic/records.png", alt: "Clynic patient records screen" },
    ],
    stack: ["React 19", "Vite", "Node.js", "Express", "MySQL"],
    description:
      "A full-stack clinic management platform with role-based access, appointment handling, and reporting workflows for admin, doctors, and staff.",
    highlights: [
      "Designed the application architecture and relational database schema.",
      "Implemented role-based access control and reporting features including XLS/PDF export.",
      "Followed a structured SDLC process as part of a software engineering project.",
    ],
    links: {
      github: "https://github.com/RAaf28/Clinic-cystem",
      demo: "#",
    },
  },
  {
    name: "GeoConnect",
    label: "Location-based Mobile App",
    images: [
      { src: "/projects/geoconnect/explore.png", alt: "GeoConnect map and nearby posts screen" },
      { src: "/projects/geoconnect/notifications.png", alt: "GeoConnect notifications screen" },
      { src: "/projects/geoconnect/profile.png", alt: "GeoConnect user profile screen" },
    ],
    stack: ["React Native", "Expo", "Firebase", "Android Studio"],
    description:
      "A mobile app built for real-world location interactions, with Firebase integration, Google Sign-In setup, and Android release troubleshooting.",
    highlights: [
      "Configured Firebase services and Google OAuth login for app authentication.",
      "Resolved build issues, keystore setup, and EAS deployment problems to ship a stable release.",
      "Worked across app configuration, debugging, and release stability challenges.",
    ],
    links: {
      github: "https://github.com/RAaf28/GeoConnect",
      demo: "#",
    },
  },
  {
    name: "MoneyWise",
    label: "Financial Management App",
    images: [
      { src: "/projects/moneywise/dashboard.png", alt: "MoneyWise financial dashboard" },
      { src: "/projects/moneywise/budget.png", alt: "MoneyWise budget management screen" },
      { src: "/projects/moneywise/circles.png", alt: "MoneyWise social accountability circles screen" },
    ],
    stack: ["Python", "HTML", "SQL"],
    description:
      "A financial management platform with SQL-backed storage and AI-assisted insights for everyday budgeting and planning needs.",
    highlights: [
      "Architected the application data layer and core financial workflows.",
      "Built a system that combines financial tracking with real-time AI-powered guidance.",
      "Applied practical product thinking around data structure and usability.",
    ],
    links: {
      github: "https://github.com/RAaf28/Money-Wise",
      demo: "#",
    },
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "HTML5", "CSS3"],
  },
  {
    title: "Web & Mobile",
    items: ["React", "Next.js", "React Native", "Expo", "Firebase", "Android Studio"],
  },
  {
    title: "Cloud & Systems",
    items: ["AWS S3", "System Analysis", "Database Design", "API Integration", "Google Cloud"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "VS Code", "ClickUp", "Jira", "Microsoft Office"],
  },
];

export const experience = [
  {
    role: "LOCKED LEVEL // TO BE CONTINUED",
    period: "NEXT UPDATE",
    details: ["Additional experience record locked for now."],
  },
  {
    role: "Full-Stack Engineer — PRIVASIMU",
    period: "Present",
    details: [
      "Helped build and maintain frontend and backend features for web applications.",
      "Designed and integrated RESTful APIs and GraphQL services.",
      "Optimized application performance for responsive and efficient experiences.",
      "Collaborated with the product team and UI/UX designers.",
    ],
  },
  {
    role: "Freelance IT Technician",
    period: "2024 — Present",
    details: [
      "Diagnosed and repaired hardware and software issues on computers and phones.",
      "Performed OS installation, hardware replacement, and malware cleanup for clients.",
      "Managed the full support lifecycle from diagnosis to after-service follow-up.",
    ],
  },
];
