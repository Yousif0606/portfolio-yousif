import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Yousif Al-Anbaki — Aspiring Software and Machine Learning Engineer",
  author: "Yousif Al-Anbaki",
  description:
    "Aspiring software and ML engineer passionate about building real products and learning through hands-on experience.",
  lang: "en",
  siteLogo: "/yousif-hero.jpg",
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
    specialty: "Aspiring Software & Machine Learning Engineer",
    summary:
      "Aspiring software and ML engineer passionate about building real products and learning through hands-on experience.",
    email: "yousif.alanbaki06@gmail.com",
  },

  // EXPERIENCE — Updated & polished
  experience: [
    {
      company: "Tech LiftOff — CraftHive (MRU Innovation Program)",
      position: "Technical Product Intern",
      startDate: "Oct 2024",
      endDate: "Jun 2025",
      summary: [
        "Selected as 1 of only 12 Computing Science students — and one of just two first-year students — accepted into Tech LiftOff, an 8-month applied innovation program.",
        "Co-led development of CraftHive, a pricing and workflow tool that helps handmade sellers automate cost calculations and improve product profitability.",
        "Implemented backend logic using Node.js, Express, and MongoDB, including product cost models, price calculations, and data management APIs.",
        "Collaborated with designers, developers, and product mentors to refine user flows, conduct user interviews, and align features with real seller needs.",
        "Delivered a final pitch and live demo to mentors, industry professionals, and potential investors during the showcase event.",
      ],
    },
  ],

  // PROJECTS — updated with your real images
  projects: [
    {
      name: "CraftHive — Pricing Tool for Handmade Sellers",
      summary:
        "Built during the Tech LiftOff program. A pricing tool that helps handmade sellers calculate accurate product prices using material costs, time, and overhead. Built backend features using Node.js, MongoDB, and REST APIs.",
      linkPreview: "https://github.com/Yousif0606/Byte-Brigade",
      linkSource: "https://github.com/Yousif0606/Byte-Brigade/tree/main/CraftHive",
      image: "/craft-hive-hero.jpg",
    },
    {
      name: "SMS Flashcards",
      summary:
        "Hackathon project that delivers flashcards via SMS using Twilio and the MERN stack. Designed for efficient spaced-repetition studying without needing a mobile app.",
      linkPreview: "https://github.com/TenzinDorjee1/smsflash",
      linkSource: "https://github.com/TenzinDorjee1/smsflash",
      image: "/sms-hero.jpg",
    },
    {
      name: "Alberta Collegiate Programming Contest",
      summary:
        "Placed 12th out of 66 contestants in Division 1. Solved timed algorithmic challenges focused on data structures, greedy algorithms, and high-performance problem solving.",
      linkPreview: "https://acpc.example",
      linkSource: "https://acpc.example",
      image: "/programming-contest.jpg",
    },
    {
      name: "Bike & Scooter Rental Simulator",
      summary:
        "A text-based rental simulation system built with Python. Loads user and transportation data from files, calculates rental costs, and tracks total travel time using nested dictionaries and file I/O.",
      linkPreview: "https://github.com/Yousif0606/transport_rental_simulator",
      linkSource: "https://github.com/Yousif0606/transport_rental_simulator",
      image: "/yousif-hero.jpg",
    },
  ],

  // SKILLS
  skills: [
    "Python",
    "C",
    "SQL",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Tailwind CSS",
    "Git",
    "Pandas",
    "Matplotlib",
  ],

  // ABOUT — fixed and formatted correctly
  about: {
    description: `
      I’m Yousif — a Computing Science and Artificial Intelligence student passionate about solving problems through thoughtful software design.
      My interests span from front-end engineering to data-driven applications and AI integration.

      I enjoy working across the full stack, using tools like React, Next.js, and Python to build projects that blend functionality with creativity.
      Beyond coding, I love collaborating in hackathons, exploring open-source projects, and continuously learning how to turn ideas into impactful products.
    `,
    image: "/yousif-hero.jpg",
  },
};
