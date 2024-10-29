import { IMAGES } from "@/assets";

export const projects = [
  {
    title: "Algobrain AI Portfolio",
    src: IMAGES.ALGOBRAINAI1,
    href: "#",
    color: "#000000",
    technologies: ["React", "HTML", "CSS", "React.js"],
    description: "Designed a user-friendly portfolio website featuring essential business information for initial brand positioning, complemented by a modern design in Version 2 that utilizes JSON-based data management, eliminating backend requirements while effectively showcasing the company's services.",
  },
  {
    title: "Tours N Travel",
    src: IMAGES.TOURSNTRAVEL,
    href: "#",
    color: "#706D63", 
    technologies: ["MySQL", "Express.js", "React.js", "Node.js", "Meta API"],
    description: "Developed a comprehensive platform for managing vehicles, drivers, bookings, and pricing, featuring WhatsApp integration for real-time updates and an AI chatbot for report analysis.",
  },
  {
    title: "WhatsApp Algo",
    src: IMAGES.WA,
    href: "#",
    color: "#8C8C8C",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Python", "Meta API", "Google BERT", "Spello"],
    description: "Developed WhatsApp Algo, a broadcasting platform that utilizes Meta-verified templates, integrating an NLP-driven WhatsApp chatbot for customizable responses, live chat functionalities, and agent management to enhance customer engagement and operational efficiency.",
  }
];

export const socials = [
  {
    username: "rahul-tumma",
    url: "https://github.com/rahul-tumma",
    icon: IMAGES.GITHUB,
    social: "github",
  },
  {
    username: "Rahul", 
    url: "https://www.linkedin.com/in/rahul-tumma-210175175/",
    icon: IMAGES.LINKEDIN,
    social: "linkedin",
  },
  {
    username: "My resume", 
    url: "/RahulTumma_Resume.pdf",
    icon: IMAGES.PDF_ICON,
    social: "resume",
  },
];
