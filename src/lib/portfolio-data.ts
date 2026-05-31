export const profile = {
  name: "Gopalakrishnan A.P",
  tagline: "Aspiring Software Engineer | Frontend Developer | AI Enthusiast",
  intro:
    "I am a 3rd-year Computer Science Engineering student passionate about software development, frontend technologies, AI-powered applications, and creating user-friendly digital experiences. I enjoy learning modern technologies and building impactful projects.",
  phone: "+91 6379583606",
  email: "gopalakrishnanap05@gmail.com",
  linkedin: "https://linkedin.com/in/gopalakrishnan-a-p-5004a532b",
  github: "https://github.com/gk18cse",
  resumeUrl: "/assets/resume/Gopalakrishnan_AP_Resume.pdf",
};

export const typingRoles = [
  "Software Engineer",
  "Frontend Developer",
  "AI Enthusiast",
  "UI/UX Learner",
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export const education = {
  degree: "B.E Computer Science Engineering",
  college: "St. Peters College of Engineering and Technology",
  year: "3rd Year",
};

export const interests = [
  "Full Stack Development",
  "Frontend Development",
  "Artificial Intelligence Applications",
  "UI/UX Design",
  "Software Engineering",
];

export const strengths = [
  "Problem Solving",
  "Team Collaboration",
  "Adaptability",
  "Continuous Learning",
  "Communication Skills",
];

import {
  SiHtml5, SiCss3, SiJavascript, SiPython, SiGithub, SiFigma, SiCanva,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const technicalSkills = [
  { name: "HTML", icon: SiHtml5, level: 90, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, level: 85, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, level: 80, color: "#F7DF1E" },
  { name: "Python", icon: SiPython, level: 75, color: "#3776AB" },
  { name: "GitHub", icon: SiGithub, level: 80, color: "#ffffff" },
];

export const toolSkills = [
  { name: "Figma", icon: SiFigma, level: 80, color: "#F24E1E" },
  { name: "Canva", icon: SiCanva, level: 85, color: "#00C4CC" },
  { name: "VS Code", icon: VscVscode, level: 90, color: "#007ACC" },
];

export const experience = [
  {
    role: "Frontend Designer Intern",
    company: "Skill Mate Startup",
    duration: "Oct 2022 – Nov 2025",
    points: [
      "Built responsive web interfaces using HTML, CSS, JavaScript, and React.js",
      "Applied UI/UX principles to improve user experience",
      "Developed reusable frontend components",
      "Created responsive layouts for multiple screen sizes",
      "Collaborated with teams using Figma and Canva",
      "Assisted in debugging, testing, and frontend improvements",
      "Contributed to performance optimization and design enhancements",
    ],
  },
];

export const featuredProject = {
  title: "Resume AI Builder",
  status: "In Progress",
  tech: [
    "React.js", "Node.js", "Express.js", "MongoDB",
    "Stripe API", "AWS S3", "JWT Authentication",
  ],
  description:
    "Currently developing an AI-powered Resume Builder platform designed to help users create professional resumes using AI assistance. The platform is being built with secure authentication, customizable resume templates, cloud storage integration, real-time preview functionality, PDF export features, and premium subscription capabilities.",
  features: [
    "AI Resume Generation",
    "Resume Templates",
    "Real-Time Preview",
    "PDF Export",
    "Cloud Storage",
    "User Authentication",
    "Premium Features",
    "Responsive Design",
  ],
};
