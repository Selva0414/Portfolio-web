import {
  Smartphone,
  Code2,
  TerminalSquare,
  PenTool,
  Database,
  Globe,
  BrainCircuit,
  Rocket
} from "lucide-react";

export const HERO_DATA = {
  greeting: "Hi, I'm",
  name: "SELU",
  title: "Student & App Developer",
  description: "I build modern mobile applications and innovative digital experiences while continuously improving my development skills.",
  resumeUrl: "#", // Add resume URL here
};

export const ABOUT_DATA = {
  intro: "Hi, I'm Selva, currently pursuing my Bachelor's degree in Computer Science and working towards becoming a professional software developer. I'm passionate about Flutter, mobile app development, the MERN stack, and React Native, with a growing interest in AI, software development, and UI/UX. I'm continuously learning new technologies while building real-world projects.",
  stats: [
    { label: "Projects Completed", value: 6 },
    { label: "Technologies Learned", value: 15 },
    { label: "Certifications", value: 6 },
  ]
};

export const SKILLS_DATA = [
  {
    category: "Mobile Development",
    items: [
      { name: "Flutter", icon: Smartphone, level: 85, description: "Cross-platform mobile UI framework" },
      { name: "Dart", icon: Code2, level: 80, description: "Programming language for Flutter" },
      { name: "React-Native", icon: Code2, level: 80, description: "Cross platform Framework" }
    ]
  },
  {
    category: "Programming",
    items: [
      { name: "Java", icon: TerminalSquare, level: 75, description: "Object-oriented programming" },
      { name: "Python", icon: TerminalSquare, level: 70, description: "Scripting and backend logic" },
      { name: "JavaScript", icon: Code2, level: 85, description: "Web interactivity and logic" },
    ]
  },
  {
    category: "Web Development",
    items: [
      { name: "React", icon: Globe, level: 80, description: "Frontend UI library" },
      { name: "HTML", icon: Globe, level: 90, description: "Web structure" },
      { name: "CSS", icon: Globe, level: 85, description: "Web styling" },
      { name: "Node Js", icon: Globe, level: 80, description: "Server side development" },
      { name: "Express Js", icon: Globe, level: 80, description: "Backend framework" },
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: TerminalSquare, level: 80, description: "Version control system" },
      { name: "GitHub", icon: TerminalSquare, level: 85, description: "Code hosting platform" },
      { name: "Figma", icon: PenTool, level: 70, description: "UI/UX design tool" },
      { name: "N8N", icon: Globe, level: 60, description: "Workflow automation" },
      { name: "Framer", icon: Globe, level: 85, description: "Interactive prototyping" },
    ]
  },
  {
    category: "Database / Backend",
    items: [
      { name: "Firebase", icon: Database, level: 75, description: "Backend-as-a-service" },
      { name: "SQL", icon: Database, level: 70, description: "Relational database management" },
      { name: "MongoDB", icon: Database, level: 85, description: "NoSQL database" },
      { name: "Supabase", icon: Database, level: 70, description: "Backend-as-a-service" },
    ]
  }
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Student Management System",
    description: "A responsive web application that helps students and teachers to manage their academic information.",
    tags: ["React", "Node js", "Express js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=85&w=1200",
  },
  {
    id: 2,
    title: "Student Leave Management System",
    description: "A responsive web application designed to help students to apply for leave and track their leave status.",
    tags: ["React", "Node js", "Express js", "MongoDB"],
    githubUrl: "https://github.com/Gokilan005/Leave.git",
    liveUrl: "https://leave-2t9d.onrender.com",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=85&w=1200",
  },
  {
    id: 3,
    title: "AI-Powered Music Player (Vibee)",
    description: "A mobile application that allows users to listen to music and receive recommendations based on their mood.",
    tags: ["Expo", "React Native", "JioSaavnAPI", "NodeJs", "ExpressJs", "MongoDB"],
    githubUrl: "https://github.com/Selva0414/Vibee-music-player.git",
    liveUrl: "https://selva0414.github.io/Vibee-web/",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=85&w=1200",
  },
  {
    id: 4,
    title: "EchoNet Messaging App",
    description: "A responsive mobile application designed to help users to send and receive messages.",
    tags: ["React Native", "Expo", "Firebase", "MongoDB"],
    githubUrl: "https://github.com/Selva0414/EchoNet.git",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=85&w=1200",
  }
];

export const CERTIFICATES_DATA = [
  {
    title: "Certificate 01",
    issuer: "Credential details coming soon",
  },
  {
    title: "Certificate 02",
    issuer: "Credential details coming soon",
  },
  {
    title: "Certificate 03",
    issuer: "Credential details coming soon",
  },
  {
    title: "Certificate 04",
    issuer: "Credential details coming soon",
  },
  {
    title: "Certificate 05",
    issuer: "Credential details coming soon",
  }
];

export const SERVICES_DATA = [
  {
    title: "Mobile App Development",
    description: "Building responsive, cross-platform applications using Flutter.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Implementation",
    description: "Translating Figma designs into pixel-perfect, interactive frontends.",
    icon: PenTool,
  },
  {
    title: "AI-Powered Applications",
    description: "Integrating AI APIs to create smart, personalized user experiences.",
    icon: BrainCircuit,
  },
  {
    title: "Web Development",
    description: "Creating modern web applications with React and Next.js.",
    icon: Globe,
  },
  {
    title: "Problem Solving",
    description: "Approaching technical challenges with clean, efficient code.",
    icon: Rocket,
  },
  {
    title: "Desktop Applications",
    description: "Developing desktop applications using Flutter.",
    icon: Rocket
  }
];

export const CONTACT_DATA = {
  email: "selv39629@gmail.com",
  github: "https://github.com/Selva0414",
  linkedin: "https://www.linkedin.com/in/selva-p-1852492a6/",
  location: "Salem, Tamil Nadu, India",
};
