import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Yousif Al-Anbaki — Frontend & AI Developer",
  author: "Yousif Al-Anbaki",
  description:
    "Computing Science and Artificial Intelligence student passionate about building scalable, data-driven web applications and exploring the intersection of software engineering and machine learning.",
  lang: "en",
  siteLogo: "/yousif-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Skills", href: "#skills" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/yousifalanbaki/" },
    { text: "GitHub", href: "https://github.com/Yousif0606" },
    { text: "Email", href: "mailto:yousif.alanbaki06@gmail.com" },
  ],
  socialImage: "/yousif-og.png",
  canonicalURL: "https://portfolio-yousif06.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Yousif Al-Anbaki",
    specialty: "Frontend & AI Developer",
    summary:
      "I’m a Computing Science and Artificial Intelligence student who loves building intuitive, scalable, and visually polished software. I’m focused on software engineering opportunities where I can contribute to real-world products while continuing to explore the growing field of machine learning.",
    email: "yousif.alanbaki06@gmail.com",
  },
  experience: [
    {
      company: "CraftHive (Tech LiftOff – MRU)",
      position: "Technical Product Intern",
      startDate: "Oct 2024",
      endDate: "Jun 2025",
      summary: [
        "Co-led development of CraftHive, a pricing tool for handmade sellers, contributing to the MVP backend using MongoDB and REST APIs.",
        "Conducted user research and UX flow analysis to guide three core product features from concept to prototype.",
      ],
    },
    {
      company: "MRUHacks 2024",
      position: "Hackathon Participant",
      startDate: "Oct 2024",
      endDate: "",
      summary: [
        "Built an SMS-based flashcard system using the MERN stack and Twilio APIs.",
        "Developed backend API and user logic for timed study reminders, improving user engagement and learning efficiency.",
      ],
    },
    {
      company: "Alberta Collegiate Programming Contest",
      position: "Div 1 Contestant",
      startDate: "Oct 2024",
      endDate: "",
      summary: [
        "Placed 12th out of 66 contestants in an Alberta-wide programming contest.",
        "Solved timed algorithmic problems using Python, focusing on efficient data structures and performance.",
      ],
    },
  ],
  projects: [
    {
      name: "SMS Flashcards",
      summary:
        "Hackathon project that delivers flashcards via SMS using Twilio and the MERN stack. Designed for efficient study reminders and accessibility without mobile apps.",
      linkPreview: "https://github.com/TenzinDorjee1/smsflash",
      linkSource: "https://github.com/TenzinDorjee1/smsflash",
      image: "/sms-flashcards.png",
    },
    {
      name: "Godot Game",
      summary:
        "2D coin-collection game created using the Godot engine and Python for MRU’s Game Development Workshop.",
      linkPreview: "https://github.com/Yousif0606/Godot-Work-shop",
      linkSource: "https://github.com/Yousif0606/Godot-Work-shop",
      image: "/godot-game.png",
    },
  ],
  about: {
    description: `
      I’m Yousif — a Computing Science and Artificial Intelligence student passionate about solving problems through thoughtful software design.
      My interests span from front-end engineering to data-driven applications and AI integration.

      I enjoy working across the full stack, using tools like React, Next.js, and Python to build projects that blend functionality with creativity.
      Beyond coding, I love collaborating in hackathons, exploring open-source projects, and continuously learning how to turn ideas into impactful products.
    `,
    image: "/yousif-big.jpg",
  },
};
