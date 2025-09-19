import { TransformedPageData, TransformedNavBarData } from "@/types/strapi";

// Fallback data for when Strapi is unavailable
// This ensures the site still works even if the CMS is down
export const FALLBACK_PAGE_DATA: TransformedPageData = {
  hero: {
    name: "Erich Malberg",
    phrase: "I develop",
    keywords: {
      technologies: [
        "web applications",
        "mobile apps", 
        "APIs",
        "full-stack solutions"
      ],
      creative: [
        "user-centered experiences",
        "data-driven interfaces",
        "interactive UIs"
      ]
    },
    bio: {
      about: {
        title: "Personal",
        content: "I'm a family-focused developer who loves creating both digitally and hands-on. Outside of coding, I enjoy the outdoors, 3D printing, soap making, and brewing wine. I'm always learning new skills and building things—whether it's software or something you can hold in your hands."
      },
      work: {
        title: "Professional",
        content: "I'm a developer at an insurance company, where I focus on building and maintaining customer-facing applications. My role spans both front-end and back-end development, ensuring reliable, intuitive, and efficient experiences for end users. I take pride in bridging the gap between technical systems and real-world usability, always with an eye on performance and clarity."
      }
    },
    background: {
      id: 0,
      documentId: "fallback",
      name: "fallback",
      alternativeText: "Fallback background",
      caption: null,
      width: 1920,
      height: 500,
      formats: {},
      hash: "fallback",
      ext: ".png",
      mime: "image/png",
      size: 0,
      url: "",
      previewUrl: null,
      provider: "local",
      provider_metadata: null,
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-01T00:00:00.000Z",
      publishedAt: "2024-01-01T00:00:00.000Z"
    }
  },
  skills: {
    title: "Skills",
    subtitle: "Technologies and tools I use to bring ideas to life",
    skills: [
      {
        id: 101,
        name: "Java Script",
        icon: {
          url: "",
          alt: "JavaScript"
        }
      },
      {
        id: 102,
        name: "React",
        icon: {
          url: "",
          alt: "React"
        }
      },
      {
        id: 103,
        name: "Next.js",
        icon: {
          url: "",
          alt: "Next.js"
        }
      },
      {
        id: 104,
        name: "Node",
        icon: {
          url: "",
          alt: "Node"
        }
      },
      {
        id: 105,
        name: "Java",
        icon: {
          url: "",
          alt: "Java"
        }
      }
    ]
  },
  projects: {
    title: "Projects",
    description: "A collection of what I've built and created",
    projects: []
  },
  certificates: {
    title: "Certifcates",
    description: "Professional certifications and achievements",
    certificates: []
  },
  socials: {
    socials: [
      {
        id: 59,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/erich-malberg-89131445/",
        order: 2,
        icon: {
          name: "linkedin",
          url: "",
          alt: "LinkedIn"
        }
      },
      {
        id: 60,
        name: "GitHub",
        link: "https://github.com/emalberg",
        order: 1,
        icon: {
          name: "github",
          url: "",
          alt: "GitHub"
        }
      }
    ]
  },
  sectionOrder: [
    { type: "hero", order: 0 },
    { type: "skills", order: 1 },
    { type: "projects", order: 2 },
    { type: "certificates", order: 3 }
  ]
};

// Fallback data for navbar when Strapi is unavailable
export const FALLBACK_NAVBAR_DATA: TransformedNavBarData = {
  logo: null,
  links: [
    {
      id: 1,
      name: "Home",
      target: "hero",
      order: 1
    },
    {
      id: 2,
      name: "Skills",
      target: "skills",
      order: 2
    },
    {
      id: 3,
      name: "Projects",
      target: "projects",
      order: 3
    },
    {
      id: 4,
      name: "Certificates",
      target: "certificates",
      order: 4
    }
  ],
  ctaButton: {
    id: 1,
    text: "Contact Me",
    url: "#contact",
    order: 1
  }
};



// Configuration for ISR
export const ISR_CONFIG = {
  // Revalidate every 5 minutes in production
  revalidateSeconds: process.env.NODE_ENV === "production" ? 300 : 60,

  // Maximum age for cached data (1 hour)
  maxAge: 3600,

  // Stale-while-revalidate window (30 minutes)
  staleWhileRevalidate: 1800,

  // Fallback timeout (5 seconds)
  fallbackTimeout: 5000,
} as const;
