import React from 'react';
import { Home, Briefcase, User, Mail, Layers, LucideIcon, Coffee, Sword } from 'lucide-react';
import { IconType } from 'react-icons';
import { BsFillPersonLinesFill, BsGithub, BsLinkedin} from 'react-icons/bs';
import { FaXTwitter } from "react-icons/fa6";

export interface NavItem {
  label: string;
  path: string;
  icon?: LucideIcon;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  technologies: string[];
  description: string;
}

interface Project {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  year?: string;
  category?: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  isSourceCode?: boolean;
}

interface Social {
  platform: string;
  url: string;
  icon: IconType;
}

interface AboutItem {
  title: string;
  description: string;
  Icon: IconType | LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'Projects', path: '/projects', icon: Briefcase },
  { label: 'Experience', path: '/experience', icon: Layers },
  { label: 'Contact', path: '/contact', icon: Mail },
];

export const SKILLS = [
  "JavaScript", "TypeScript", "Solidity", "React", "Next.js", "Three.js",
  "Prisma", "MongoDB", "PostgreSQL", "Supabase", "MySQL", "Docker",
  "Kubernetes", "Redux", "Recoil", "Zustand", "Tailwind CSS", "Bootstrap",
  "Node.js", "Express.js", "WebSocket", "Zod", "Git"
];

export const SOCIALS: Social[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/MohdFaisalBidda',
    icon: BsGithub,
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/mohd-faisal-bidda',
    icon: BsLinkedin,
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/faisalB299',
    icon: FaXTwitter,
  },
  {
    platform: 'Resume',
    url:'https://drive.google.com/file/d/13jXmKJoHfzrvRZloTQxnoc1b7mS4GM_i/view?usp=sharing',
    icon:BsFillPersonLinesFill
  }
];

export const ABOUTS: AboutItem[] = [
  {
    title: "Freelancer",
    description:
      "Passionate about creating clean, efficient, and scalable solutions that solve real-world problems.",
    Icon: BsGithub,
  },
  {
    title: "Problem Solver",
    description:
      "Analytical thinker with a knack for finding innovative solutions to complex technical challenges.",
    Icon: Coffee,
  },
  {
    title: "Continuous Learner",
    description:
      "Always exploring new technologies and methodologies to stay at the forefront of web development.",
    Icon: Sword,
  },
]

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'CG VIZ STUDIO',
    period: '2024 - Present',
    description: "Handling the entire project from initialization to deployment, ensuring that the final product meets the client's expectations and exceeds their requirements for the Multi vendor marketplace and 3D Model Configurator. Developing these applications using Next.js and Three.js, catering to a B2B audience.",
    technologies: ['Next.js', 'Three.js', 'React', 'TypeScript']
  },
  {
    id: 2,
    role: 'Freelance Developer',
    company: 'Securemyorg',
    period: '2023 - 2024',
    description: "Engaged in freelance work with both B2B and B2C clients. Projects involved enhancing layouts, building client-specific websites, and integrating features like blog posting and pagination. Contributed to organizational UI screens using React Native.",
    technologies: ['React Native', 'MERN Stack', 'UI/UX']
  },
  {
    id: 3,
    role: 'Full Stack Developer',
    company: 'Techdarkshak Software LLP',
    period: '2022 - 2023',
    description: "Gained hands-on experience with tech stack including ReactJS, Next.js, Typescript, TailwindCSS, SCSS, and Firebase. Primary responsibilities involved leading the design and development of the company's website and working on 'atomicat' hosting solution.",
    technologies: ['ReactJS', 'Next.js', 'Firebase', 'TailwindCSS']
  }
];


export const projects: Project[] = [
  {
    id: 1,
    image: "/assets/3dbae.png",
    title: "3DBAE",
    subtitle: "Transform Your Product Display with Interactive 3D",
    year: "2025",
    category: "Saas",
    description:
      "Engage customers and boost sales with immersive 3D product configurators—no coding required. Showcase your products with beautiful 3D visuals. Easy to create, easy to embed—built for e‑commerce.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Cloudflare",
      "Docker",
      "PostgreSQL",
      "Zod",
      "Git",
      "GCP",
      "Framer Motion",
    ],
    liveUrl: "https://3dbae.com",
    githubUrl: "",
    isSourceCode: false,
  },
  {
    id: 2,
    image: "/assets/builder.png",
    title: "Builder",
    subtitle: "Drag-and-Drop Form Builder",
    year: "2024",
    category: "Web Application",
    description:
      "The Builder application empowers users to effortlessly create forms using a visually intuitive drag-and-drop interface, providing a preview feature before saving. Easily share the form link to collect submissions and conveniently manage them through the user-friendly dashboard.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Docker",
      "PostgreSQL",
      "Zod",
      "Git",
      "Framer Motion",
      "React DnD",
    ],
    liveUrl: "https://dev-the-builder.vercel.app",
    githubUrl: "https://github.com/MohdFaisalBidda/Builder",
    isSourceCode: true,
  },
  {
    id: 3,
    image: "/assets/adsy.png",
    title: "Adsy Clone",
    subtitle: "Guest Posting Service",
    year: "2023",
    category: "Website Clone",
    description:
      "Clone of website named 'Adsy' which is guest posting service website built with using Nextjs, sanity.io, and TailwindCSS.",
    tech: ["Next.js", "Sanity.io", "Tailwind CSS"],
    liveUrl: "https://adsy-clone.vercel.app/",
    githubUrl: "https://github.com/MohdFaisalBidda/Adsy-Clone",
    isSourceCode: true,
  },
];