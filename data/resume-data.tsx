import { GitHubIcon, LinkedInIcon, XIcon, InstagramIcon, LeetCodeIcon } from "@/components/icons";
import {
  CityUniversityLogo, EthGlobalLogo, LB,
  Procol, IEEELogo, ThirdwebLogo, Cosensys, DeveloperDao, Apple, Olympiad, Arta, Cryptoblk, HKIS, CISM, CAIS, VideoFast, TextBehindImage, Next, RT
} from "@/public";
import { BadgeSwissFranc } from "lucide-react";

export const RESUME_DATA = {
  name: "Ujjawal",
  initials: "U",
  location: "India, IND",
  locationLink: "https://www.google.com/maps/place/India",
  about: "Hey, I'm Ujjawal — a 20-year-old tech enthusiast and self-taught developer from India, with a strong interest in system-level problem solving, competitive programming, and building practical software solutions. I spend a lot of time sharpening my skills on platforms like LeetCode, diving into DSA, I'm fascinated by how systems work under the hood.I'm currently focused on growing as a full-stack developer, Always keeping performance and user experience in mind. I believe in learning by doing and I'm always curious about what I can build next",
  aboutBulletPoints: [
    "Challenging myself to build a product",
    "Always learning new things",
    "Looking for opportunities to grow and learn",
  ],
  avatarUrl1: "https://res.cloudinary.com/dptxufghg/image/upload/v1746353793/WhatsApp_Image_2025-05-04_at_15.42-Photoroom_fovift.jpg",
  avatarUrl2: "https://avatars.githubusercontent.com/u/122523624?v=4",
  personalWebsiteUrl: "https://aditya7.com",
  contact: {
    email: null,
    social: [
      {
        name: "LeetCode",
        url: "https://leetcode.com/u/UjjawalArora_13/",
        icon: LeetCodeIcon,
      },
      {
        name: "X",
        url: "https://x.com/Ujjawal__13",
        icon: XIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ujjawalarora13/",
        icon: LinkedInIcon,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/_.ujjawal.13/",
        icon: InstagramIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/ujjawal-Arora",
        icon: GitHubIcon,
      },
    ],
  },
  skills: [
    "Java",
    "TypeScript",
    "React",
    "NextJS",
    "Vite",
    "NodeJS",
    "TailwindCSS",
    "ShadcnUI",
    "Supabase",
    "Vercel",
  ],
  currentlyBuilding: [
    {
      name: "Echo",
      link: "https://echo-date-ujjawals-projects-076bcca5.vercel.app/landing",
      badges: ["Next.js", "TypeScript", "Turbo Repo", "PostgreSQL"],
      title: "Dating Website",
      date: "Since January 2024",
      description:
        "A modern dating platform that goes beyond traditional matching, featuring unique elements like polls and confessions to create more meaningful connections. Built with a robust tech stack including Next.js, TypeScript, and PostgreSQL, the platform offers a seamless and secure experience for users to find their perfect match.",
      imageLink: "https://res.cloudinary.com/dptxufghg/image/upload/v1746347836/WhatsApp_Image_2025-05-04_at_14.06.30_1fc95ada_xrgsho.jpg",
      projectDetailsLink: "https://github.com/ujjawal-Arora/Echo",
    }
  ],
  My_Projects: [
  
    {
      name: "Talentify",
      link: "https://talentify.netlify.app/",
      badges:["Talent","Full Stack","MERN"],
      title: "Talentify",
      date:"January 2025",
      description:
        "Talentify is an innovative platform designed to bridge the gap between talented individuals and opportunities that match their skills. Whether you're an artist, developer, writer, musician, or any kind of creative or professional, Talentify helps you showcase your abilities and connect with the right audience",
      imageLink: "https://res.cloudinary.com/dq93uuksm/image/upload/v1744981164/Screenshot_2025-04-18_182903_y3lp2h.png",
      projectDetailsLink: "https://github.com/ujjawal-Arora/Talentify",
    },
    {
      name: "Karan Daan",
      link: "",
      badges: ["Donation", "Community", "Transparency", "Next.js"],
      title: "Karan Daan",
      date: "Janaury 2024",
      description:
        "Karan Daan is a donation platform designed to bridge the gap between donors and beneficiaries. It simplifies the donation process, ensures secure transactions, promotes transparency, and fosters a strong community of support and accountability. With intelligent categorization, it maximizes the impact of every contribution while remaining easy to use for all.",
      imageLink: "https://res.cloudinary.com/dptxufghg/image/upload/v1746347948/WhatsApp_Image_2025-05-04_at_14.08.52_2db2370e_lsada5.jpg",
      projectDetailsLink: "https://github.com/ujjawal-Arora/KarnaDaan",
    },
    // {
    //   name: "FitWave",
    //   link: "https://www.github.com/AadiVerma/FitWave",
    //   badges:["Fitness","Ai","Full Stack"],
    //   title: "FitWave",
    //   date:"September 2024 - November 2024",
    //   description:
    //     "FitWave is a fitness app that uses AI to create personalized workout plans and nutrition guides. It tracks user progress and provides real-time feedback. The app is designed to help users achieve their fitness goals efficiently.",
    //   imageLink: "https://res.cloudinary.com/dq93uuksm/image/upload/v1744980926/Screenshot_2025-04-18_182516_dohmrn.png",
    //   projectDetailsLink: "https://github.com/AadiVerma/FitWave",
    // },
  
    {
      name: "Expense Tracker",
      link: "https://your-expense-tracker-link.com", 
      badges: ["Next.js", "React", "Node.js", "Tailwind CSS"],
      title: "Expense Tracker",
      date: "July 2024",
      description:
        "Expense Tracker is a modern web application designed to help users track their spending and manage budgets efficiently. Built with Next.js for performance, React for a dynamic UI, Node.js for backend operations, and styled using Tailwind CSS, this project was a fun and valuable learning experience in full-stack development.",
      imageLink: "https://res.cloudinary.com/dptxufghg/image/upload/v1746348811/1722401124034_pspdm7.jpg", 
      projectDetailsLink: "https://github.com/ujjawal-Arora/ExpenseTracker" 
    },    
    
      {
        name: "Resume Builder",
        link: "https://resume-builder-beryl-ten.vercel.app/",
        badges: ["HTML", "CSS", "JavaScript", "Resume"],
        title: "Resume Builder",
        date: "2023",
        description:
          "Resume Builder is a simple and effective web application that allows users to create professional resumes quickly. Built using HTML, CSS, and JavaScript, it features a user-friendly interface and live preview functionality to make resume creation fast and intuitive.",
        imageLink: "https://res.cloudinary.com/dptxufghg/image/upload/v1746350580/WhatsApp_Image_2025-05-04_at_14.52.42_90a09275_qqgzrm.jpg",
        projectDetailsLink: "https://github.com/ujjawal-Arora/ResumeBuilder"
      }
      
    

  ],

  education: [
    {
      school: "Chitkara University",
      degree: "Bachelors",
      start: "2022",
      end: "2026",
      activities: "Bachelors in Computer Science and Engineering",
      logo: CISM
    },
  ],
  work: [],
} as const;
