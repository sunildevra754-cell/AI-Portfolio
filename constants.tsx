
import { Project, SkillCategory, ExperienceItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "NeuroFlow AI Dashboard",
    description: "A comprehensive real-time analytics platform for neural network performance monitoring, featuring live visualization and automated anomaly detection.",
    tags: ["React", "TypeScript", "D3.js", "Python", "FastAPI"],
    imageUrl: "https://picsum.photos/seed/neuro/800/600",
    liveUrl: "https://github.com",
    repoUrl: "https://github.com"
  },
  {
    id: 2,
    title: "EcoSphere Marketplace",
    description: "A decentralized peer-to-peer marketplace for sustainable goods, built with a focus on high-performance search and accessibility.",
    tags: ["Next.js", "Tailwind", "PostgreSQL", "Prisma"],
    imageUrl: "https://picsum.photos/seed/eco/800/600",
    liveUrl: "https://github.com",
    repoUrl: "https://github.com"
  },
  {
    id: 3,
    title: "CloudGuard Security Suite",
    description: "Enterprise-grade intrusion detection system interface with real-time incident reporting and multi-tenant management capabilities.",
    tags: ["React", "Go", "Docker", "Kubernetes"],
    imageUrl: "https://picsum.photos/seed/cloud/800/600",
    liveUrl: "https://github.com",
    repoUrl: "https://github.com"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Programming",
    skills: [
      { name: "Python", icon: "fa-brands fa-python" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "TypeScript", icon: "fa-solid fa-code" }
    ]
  },
  {
    name: "Web Technologies",
    skills: [
      { name: "React", icon: "fa-brands fa-react" },
      { name: "HTML5/CSS3", icon: "fa-brands fa-html5" },
      { name: "Tailwind CSS", icon: "fa-solid fa-wind" }
    ]
  },
  {
    name: "Tools & DB",
    skills: [
      { name: "Git & GitHub", icon: "fa-brands fa-github" },
      { name: "SQL (PostgreSQL)", icon: "fa-solid fa-database" },
      { name: "Docker", icon: "fa-brands fa-docker" }
    ]
  },
  {
    name: "AI & ML",
    skills: [
      { name: "PyTorch", icon: "fa-solid fa-brain" },
      { name: "Gemini API", icon: "fa-solid fa-sparkles" },
      { name: "Data Processing", icon: "fa-solid fa-chart-line" }
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "TechNova Solutions",
    role: "Full Stack Developer Intern",
    period: "June 2024 - Present",
    description: [
      "Optimized frontend rendering performance by 40% using React memoization and lazy loading.",
      "Collaborated on the migration of legacy services to a microservices architecture.",
      "Implemented automated CI/CD pipelines using GitHub Actions."
    ],
    type: 'work'
  },
  {
    company: "Global Hackathon 2023",
    role: "Grand Prize Winner",
    period: "Oct 2023",
    description: [
      "Led a team of 4 to develop an AI-powered emergency response coordinator.",
      "Integrated real-time geolocation APIs and LLM-based triage logic.",
      "Presented to a panel of industry leaders from Google and Meta."
    ],
    type: 'achievement'
  },
  {
    company: "University of Technology",
    role: "B.S. in Computer Science",
    period: "2021 - 2025 (Expected)",
    description: [
      "GPA: 3.9/4.0",
      "Core coursework: Algorithms, Distributed Systems, Machine Learning, Database Theory.",
      "Research Assistant at the Intelligent Systems Lab."
    ],
    type: 'education'
  }
];
