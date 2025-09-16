import { TransformedPageData } from '@/types/strapi';

// Fallback data for when Strapi is unavailable
// This ensures the site still works even if the CMS is down
export const FALLBACK_PAGE_DATA: TransformedPageData = {
  hero: {
    name: "Eric Hernandez",
    phrase: "Full Stack Developer",
    keywords: ["React", "Next.js", "TypeScript", "Node.js"],
    bio: {
      about: "Passionate full-stack developer with expertise in modern web technologies. I create beautiful, performant applications that solve real-world problems.",
      experience: "5+ years of experience building scalable web applications using React, Next.js, and modern JavaScript frameworks."
    }
  },
  skills: {
    title: "Technical Skills",
    subtitle: "Technologies I work with",
    skills: [
      {
        id: 1,
        name: "React",
        icon: {
          name: "react",
          url: "/icons/react.svg",
          alt: "React"
        }
      },
      {
        id: 2,
        name: "Next.js",
        icon: {
          name: "nextjs",
          url: "/icons/nextjs.svg",
          alt: "Next.js"
        }
      },
      {
        id: 3,
        name: "TypeScript",
        icon: {
          name: "typescript",
          url: "/icons/typescript.svg",
          alt: "TypeScript"
        }
      },
      {
        id: 4,
        name: "Node.js",
        icon: {
          name: "nodejs",
          url: "/icons/nodejs.svg",
          alt: "Node.js"
        }
      },
      {
        id: 5,
        name: "Python",
        icon: {
          name: "python",
          url: "/icons/python.svg",
          alt: "Python"
        }
      },
      {
        id: 6,
        name: "PostgreSQL",
        icon: {
          name: "postgresql",
          url: "/icons/postgresql.svg",
          alt: "PostgreSQL"
        }
      },
      {
        id: 7,
        name: "AWS",
        icon: {
          name: "aws",
          url: "/icons/aws.svg",
          alt: "AWS"
        }
      },
      {
        id: 8,
        name: "Docker",
        icon: {
          name: "docker",
          url: "/icons/docker.svg",
          alt: "Docker"
        }
      }
    ]
  },
  projects: {
    title: "Featured Projects",
    description: "Some of my recent work and side projects",
    projects: [] // Empty array to test empty state
  },
  certificates: {
    title: "Certifications",
    description: "Professional certifications and achievements",
    certificates: [] // Empty array to test empty state
  },
  socials: {
    socials: [
      {
        id: 1,
        name: "GitHub",
        link: "https://github.com/yourusername",
        icon: {
          name: "github",
          url: "/icons/github.svg",
          alt: "GitHub"
        }
      },
      {
        id: 2,
        name: "LinkedIn",
        link: "https://linkedin.com/in/yourusername",
        icon: {
          name: "linkedin",
          url: "/icons/linkedin.svg",
          alt: "LinkedIn"
        }
      },
      {
        id: 3,
        name: "Twitter",
        link: "https://twitter.com/yourusername",
        icon: {
          name: "twitter",
          url: "/icons/twitter.svg",
          alt: "Twitter"
        }
      },
      {
        id: 4,
        name: "Email",
        link: "mailto:your.email@example.com",
        icon: {
          name: "email",
          url: "/icons/email.svg",
          alt: "Email"
        }
      }
    ]
  },
  navbar: {
    logo: {
      url: "/images/logo.svg",
      alt: "Eric Hernandez Logo",
      width: 240,
      height: 100
    },
    links: [
      {
        id: 1,
        label: "Home",
        href: "#hero-section"
      },
      {
        id: 2,
        label: "Skills",
        href: "#skills-section"
      },
      {
        id: 3,
        label: "Projects",
        href: "#projects-section"
      },
      {
        id: 4,
        label: "Certificates",
        href: "#certificates-section"
      }
    ],
    ctaButton: {
      text: "Get In Touch",
      href: "#contact"
    }
  }
};

// Fallback data for navbar when Strapi is unavailable
export const FALLBACK_NAVBAR_DATA = FALLBACK_PAGE_DATA.navbar;

// Configuration for ISR
export const ISR_CONFIG = {
  // Revalidate every 5 minutes in production
  revalidateSeconds: process.env.NODE_ENV === 'production' ? 300 : 60,
  
  // Maximum age for cached data (1 hour)
  maxAge: 3600,
  
  // Stale-while-revalidate window (30 minutes)
  staleWhileRevalidate: 1800,
  
  // Fallback timeout (5 seconds)
  fallbackTimeout: 5000
} as const;
