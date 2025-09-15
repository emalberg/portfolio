// Animation and timing constants
export const ANIMATION_CONSTANTS = {
  // AnimatedKeyword component
  DEFAULT_INTERVAL: 10000, // 10 seconds
  DEFAULT_ANIMATION_DURATION: 1000, // 1 second
  DEFAULT_SCRAMBLE_DURATION: 2000, // 2 seconds
  MAX_SCRAMBLE_ITERATIONS: 40,
  SCRAMBLE_PROBABILITY_OFFSET: 0.3,
  FADE_DELAY_MULTIPLIER: 0.5,
  
  // Bio component
  TAB_ANIMATION_DURATION: 0.3,
  TAB_ANIMATION_EASE: "easeInOut" as const,
  
  // General animations
  DEFAULT_EASING: [0.4, 0.0, 0.2, 1] as const,
  UNDERLINE_DELAY: 0.2,
} as const

// Scramble effect constants
export const SCRAMBLE_CONSTANTS = {
  CHARACTERS: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~',
} as const

// Accessibility constants
export const ACCESSIBILITY_CONSTANTS = {
  ARIA_LABELS: {
    heroSection: 'hero-heading',
    backgroundImage: 'true',
  },
  ROLES: {
    section: 'region',
  },
} as const

// Default content constants
export const DEFAULT_CONTENT = {
  NAME: "Your Name",
  PHRASE: "I develop",
  KEYWORDS: {
    technologies: ["web applications", "mobile apps", "APIs", "full-stack solutions"],
    creative: ["user-centered experiences", "data-driven interfaces", "interactive UIs"]
  },
  BIO: {
    about: {
      title: "About Me",
      content: "A passionate developer with expertise in modern web technologies and a love for creating beautiful, functional applications."
    },
    work: {
      title: "What I Do", 
      content: "I specialize in full-stack development, focusing on React, TypeScript, and modern web frameworks to build scalable solutions."
    }
  },
}

// Component IDs
export const COMPONENT_IDS = {
  BIO_TABS: {
    about: 'about',
    work: 'work',
  },
  SKILLS_SECTION: 'skills-section',
  PROJECT_SECTION: 'project-section',
  PROJECT_CARD: 'project-card',
  CERTIFICATES_SECTION: 'certificates-section',
  HERO_SECTION: 'hero-section',
} as const

// Skills Section constants
export const SKILLS_SECTION_CONSTANTS = {
  BREAKPOINTS: {
    SMALL_SCREEN: 768,
  },
  CAROUSEL: {
    SMALL_HEIGHT: 220,
    LOOP: true,
    ALIGN: "start" as const,
  },
  ANIMATION: {
    CONTAINER_DURATION: 0.6,
    STAGGER_CHILDREN: 0.1,
    ITEM_DURATION: 0.5,
    VIEWPORT_AMOUNT: 0.3,
    CAROUSEL_VIEWPORT_AMOUNT: 0.2,
  },
  SPACING: {
    ARROW_POSITION: 2,
  },
} as const

// Project Card constants
export const PROJECT_CARD_CONSTANTS = {
  ANIMATION: {
    FLIP_DURATION: 0.6,
    FLIP_EASE: [0.23, 1, 0.32, 1] as const,
    HOVER_SCALE: 1.02,
    HOVER_DURATION: 0.3,
    BUTTON_HOVER_SCALE: 1.05,
    BUTTON_TAP_SCALE: 0.95,
    STAGGER_DELAY: 0.1,
  },
  BUTTONS: {
    DEMO: 'demo',
    REPO: 'repo',
    DOCS: 'docs',
  },
} as const

// Project Section constants
export const PROJECT_SECTION_CONSTANTS = {
  ANIMATION: {
    CONTAINER_DURATION: 0.6,
    STAGGER_CHILDREN: 0.15,
    ITEM_DURATION: 0.5,
    VIEWPORT_AMOUNT: 0.3,
    GRID_VIEWPORT_AMOUNT: 0.1,
  },
  GRID: {
    PROJECTS_PER_PAGE: 9,
  },
  PAGINATION: {
    SCROLL_DELAY: 100,
  },
} as const

// Hero Section constants
export const HERO_SECTION_CONSTANTS = {
  // All spacing and typography constants removed as they contained Tailwind classes
} as const

// Bio component constants
export const BIO_CONSTANTS = {
  ANIMATION: {
    TAB_DURATION: 0.2,
    CONTENT_DURATION: 0.2,
  },
  SIZES: {
    TAB_TEXT: 'text-sm',
    TITLE_TEXT: 'text-lg',
    DESCRIPTION_TEXT: 'text-base',
  },
} as const

// Skill component constants
export const SKILL_CONSTANTS = {
  ANIMATION: {
    SPRING_DAMPING: 15,
    SPRING_STIFFNESS: 400,
    TRANSITION_DURATION: 0.2,
    ROTATION_RANGE: 25,
  },
} as const

// Decorative Elements constants
export const DECORATIVE_CONSTANTS = {
  ANIMATION: {
    FADE_IN_DURATION: 1,
    OPACITY_FINAL: 0.1,
  },
} as const

// Main page content constants
export const MAIN_PAGE_CONTENT: {
  HERO: {
    name: string;
    phrase: string;
    keywords: {
      technologies: string[];
      creative: string[];
    };
    bio: {
      about: {
        title: string;
        content: string;
      };
      work: {
        title: string;
        content: string;
      };
    };
  };
} = {
  HERO: {
    name: "Erich Malberg",
    phrase: "I develop",
    keywords: {
      technologies: [
        "web applications",
        "mobile apps", 
        "APIs",
        "full-stack solutions",
        "microservices",
        "front ends",
        "back ends"
      ],
      creative: [
        "user-centered experiences",
        "data-driven interfaces",
        "interactive UIs"
      ]
    },
    bio: {
      about: {
        title: "About Me",
        content: "I'm a passionate developer with expertise in modern web technologies and a love for creating beautiful, functional applications that make a difference."
      },
      work: {
        title: "What I Do",
        content: "I specialize in full-stack development, focusing on React, TypeScript, and modern web frameworks to build scalable solutions that users love."
      }
    }
  }
}

// Sample project data for demo pages
export const SAMPLE_PROJECT_DATA: {
  PROJECT_SECTION: {
    Order: number;
    id: number;
    Title: string;
    Description: string;
    Projects: Array<{
      id: number;
      name: string;
      description: string;
      image: {
        url: string;
        alt: string;
      };
      links: Array<{
        type: "demo" | "repo" | "docs";
        url: string;
        label: string;
      }>;
    }>;
  };
} = {
  PROJECT_SECTION: {
    Order: 2,
    id: 1,
    Title: "Featured Projects",
    Description: "A showcase of my recent work and creative solutions. Each project represents a unique challenge and demonstrates different aspects of modern web development.",
    Projects: [
      {
        id: 1,
        name: "E-Commerce Platform",
        description: "A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
        image: {
          url: "/next.svg",
          alt: "E-Commerce Platform Screenshot"
        },
        links: [
          {
            type: "demo",
            url: "https://demo.example.com",
            label: "Live Demo"
          },
          {
            type: "repo",
            url: "https://github.com/example/ecommerce",
            label: "GitHub Repo"
          },
          {
            type: "docs",
            url: "https://docs.example.com",
            label: "Documentation"
          }
        ]
      },
      {
        id: 2,
        name: "Task Management App",
        description: "A comprehensive collaborative task management application built with modern web technologies. Features include real-time updates using WebSocket connections, intuitive drag-and-drop functionality for task organization, team collaboration tools with role-based permissions, automated notifications, time tracking capabilities, and advanced reporting dashboards. The application supports multiple project workspaces, integrates with popular third-party services, and includes robust security measures to protect sensitive data.",
        image: {
          url: "/vercel.svg",
          alt: "Task Management App Screenshot"
        },
        links: [
          {
            type: "demo",
            url: "https://tasks-demo.example.com",
            label: "Live Demo"
          },
          {
            type: "repo",
            url: "https://github.com/example/tasks",
            label: "Source Code"
          }
        ]
      },
      {
        id: 3,
        name: "Weather Dashboard",
        description: "A responsive weather dashboard with location-based forecasts, interactive maps, and customizable widgets for weather tracking.",
        image: {
          url: "/globe.svg",
          alt: "Weather Dashboard Screenshot"
        },
        links: [
          {
            type: "demo",
            url: "https://weather-demo.example.com",
            label: "Try Demo"
          },
          {
            type: "repo",
            url: "https://github.com/example/weather",
            label: "View Code"
          },
          {
            type: "docs",
            url: "https://weather-docs.example.com",
            label: "API Docs"
          }
        ]
      },
      {
        id: 4,
        name: "Social Media Analytics",
        description: "Advanced analytics platform for social media management with real-time data visualization and automated reporting features.",
        image: {
          url: "/window.svg",
          alt: "Social Media Analytics Screenshot"
        },
        links: [
          {
            type: "demo",
            url: "https://analytics-demo.example.com",
            label: "Live Demo"
          },
          {
            type: "repo",
            url: "https://github.com/example/analytics",
            label: "Source Code"
          }
        ]
      },
      {
        id: 5,
        name: "Portfolio Website",
        description: "Modern, responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations, dark mode support, and optimized performance.",
        image: {
          url: "/nextjs-logo.svg",
          alt: "Portfolio Website Screenshot"
        },
        links: [
          {
            type: "demo",
            url: "https://portfolio.example.com",
            label: "View Portfolio"
          },
          {
            type: "repo",
            url: "https://github.com/example/portfolio",
            label: "Source Code"
          }
        ]
      },
      {
        id: 6,
        name: "API Gateway",
        description: "High-performance API gateway with rate limiting, authentication, and load balancing capabilities for microservices architecture.",
        image: {
          url: "/nodejs-logo.svg",
          alt: "API Gateway Screenshot"
        },
        links: [
          {
            type: "demo",
            url: "https://api-demo.example.com",
            label: "Test API"
          },
          {
            type: "repo",
            url: "https://github.com/example/api-gateway",
            label: "Source Code"
          },
          {
            type: "docs",
            url: "https://api-docs.example.com",
            label: "API Docs"
          }
        ]
      },
      {
        id: 7,
        name: "Mobile App Backend",
        description: "Scalable backend infrastructure for mobile applications with real-time notifications, user management, and data synchronization.",
        image: {
          url: "/postgresql-logo.svg",
          alt: "Mobile App Backend Screenshot"
        },
        links: [
          {
            type: "demo",
            url: "https://backend-demo.example.com",
            label: "Test Backend"
          },
          {
            type: "repo",
            url: "https://github.com/example/mobile-backend",
            label: "Source Code"
          }
        ]
      },
      {
        id: 8,
        name: "Fitness Tracker",
        description: "Comprehensive fitness tracking application with workout planning, progress monitoring, and social features for motivation.",
        image: {
          url: "/react-logo.svg",
          alt: "Fitness Tracker Screenshot"
        },
        links: [
          {
            type: "demo",
            url: "https://fitness-demo.example.com",
            label: "Track Fitness"
          },
          {
            type: "repo",
            url: "https://github.com/example/fitness",
            label: "Source Code"
          }
        ]
      },
      {
        id: 9,
        name: "Budget Planner",
        description: "Personal finance management tool with expense tracking, budget categories, and financial goal planning.",
        image: {
          url: "/window.svg",
          alt: "Budget Planner Screenshot"
        },
        links: [
          {
            type: "demo",
            url: "https://budget-demo.example.com",
            label: "Plan Budget"
          },
          {
            type: "repo",
            url: "https://github.com/example/budget",
            label: "GitHub"
          }
        ]
      },
      {
        id: 10,
        name: "Learning Platform",
        description: "Online learning management system with course creation, student progress tracking, and interactive assessments.",
        image: {
          url: "/file.svg",
          alt: "Learning Platform Screenshot"
        },
        links: [
          {
            type: "demo",
            url: "https://learning-demo.example.com",
            label: "Start Learning"
          },
          {
            type: "repo",
            url: "https://github.com/example/learning",
            label: "Source Code"
          }
        ]
      },
      {
        id: 11,
        name: "Event Scheduler",
        description: "Event management and scheduling platform with calendar integration, attendee management, and automated reminders.",
        image: {
          url: "/next.svg",
          alt: "Event Scheduler Screenshot"
        },
        links: [
          {
            type: "demo",
            url: "https://events-demo.example.com",
            label: "Schedule Event"
          },
          {
            type: "repo",
            url: "https://github.com/example/events",
            label: "GitHub"
          }
        ]
      },
      {
        id: 12,
        name: "Inventory System",
        description: "Comprehensive inventory management solution with barcode scanning, stock alerts, and reporting capabilities.",
        image: {
          url: "/vercel.svg",
          alt: "Inventory System Screenshot"
        },
        links: [
          {
            type: "demo",
            url: "https://inventory-demo.example.com",
            label: "Manage Inventory"
          },
          {
            type: "repo",
            url: "https://github.com/example/inventory",
            label: "Source Code"
          }
        ]
      }
    ]
  }
}

// Certificate component constants
export const CERTIFICATE_CONSTANTS = {
  ANIMATION: {
    HOVER_SCALE: 1.02,
    HOVER_DURATION: 0.2,
  },
  SIZES: {
    IMAGE_WIDTH: 200,
    IMAGE_HEIGHT: 150,
  },
} as const

// Certificate Section constants
export const CERTIFICATE_SECTION_CONSTANTS = {
  ANIMATION: {
    CONTAINER_DURATION: 0.6,
    STAGGER_CHILDREN: 0.1,
    ITEM_DURATION: 0.5,
    VIEWPORT_AMOUNT: 0.3,
    GRID_VIEWPORT_AMOUNT: 0.2,
  },
} as const

// Social Link constants
export const SOCIAL_LINK_CONSTANTS = {
  ANIMATION: {
    HOVER_SCALE: 1.05,
    ACTIVE_SCALE: 0.95,
    TRANSITION_DURATION: 300,
    TRANSITION_EASE: "easeOut" as const,
  },
  POSITIONING: {
    DESKTOP_LEFT: "1rem",
    DESKTOP_Z_INDEX: 50,
  },
  SIZES: {
    MOBILE_ICON: 24,
    DESKTOP_ICON: 20,
    DESKTOP_ICON_HOVER: 24,
  },
} as const

// Sample skills data for demo pages
export const SAMPLE_SKILLS_DATA: {
  SKILLS_SECTION: {
    Order: number;
    id: number;
    Title: string;
    Skills: Array<{
      id: number;
      Name: string;
      Icon: {
        Name: string;
        SVG: {
          url: string;
          alternativeText: string;
        };
      };
    }>;
  };
} = {
  SKILLS_SECTION: {
    Order: 1,
    id: 4,
    Title: "Technologies",
    Skills: [
      {
        id: 1,
        Name: "JavaScript",
        Icon: {
          Name: "JavaScript",
          SVG: {
            url: "/javascript-logo.svg",
            alternativeText: "JavaScript Icon"
          }
        }
      },
      {
        id: 2,
        Name: "React",
        Icon: {
          Name: "React",
          SVG: {
            url: "/react-logo.svg",
            alternativeText: "React Icon"
          }
        }
      },
      {
        id: 3,
        Name: "TypeScript",
        Icon: {
          Name: "TypeScript",
          SVG: {
            url: "/typescript-logo.svg",
            alternativeText: "TypeScript Icon"
          }
        }
      },
      {
        id: 4,
        Name: "Node.js",
        Icon: {
          Name: "Node.js",
          SVG: {
            url: "/nodejs-logo.svg",
            alternativeText: "Node.js Icon"
          }
        }
      },
      {
        id: 5,
        Name: "Next.js",
        Icon: {
          Name: "Next.js",
          SVG: {
            url: "/nextjs-logo.svg",
            alternativeText: "Next.js Icon"
          }
        }
      },
      {
        id: 6,
        Name: "Tailwind CSS",
        Icon: {
          Name: "Tailwind CSS",
          SVG: {
            url: "/tailwind-logo.svg",
            alternativeText: "Tailwind CSS Icon"
          }
        }
      },
      {
        id: 7,
        Name: "PostgreSQL",
        Icon: {
          Name: "PostgreSQL",
          SVG: {
            url: "/postgresql-logo.svg",
            alternativeText: "PostgreSQL Icon"
          }
        }
      },
      {
        id: 8,
        Name: "Docker",
        Icon: {
          Name: "Docker",
          SVG: {
            url: "/docker-logo.svg",
            alternativeText: "Docker Icon"
          }
        }
      }
    ]
  }
}

// Sample social data for demo pages
export const SAMPLE_SOCIAL_DATA: {
  SOCIAL_SECTION: {
    id: number;
    Socials: Array<{
      Order: number;
      id: number;
      Name: string;
      Link: string;
      Icon: {
        id: number;
        Name: string;
        SVG: {
          id: number;
          documentId: string;
          name: string;
          alternativeText: string;
          caption: string | null;
          width: number;
          height: number;
          formats: Record<string, unknown> | null;
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: Record<string, unknown> | null;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        };
      };
    }>;
  };
} = {
  SOCIAL_SECTION: {
    id: 5,
    Socials: [
      {
        Order: 0,
        id: 5,
        Name: "GitHub",
        Link: "https://github.com/emalberg",
        Icon: {
          id: 10,
          Name: "GitHub",
          SVG: {
            id: 1,
            documentId: "m48cl1rits5hydkt83qomgvf",
            name: "github-logo_svgstack_com_50361754492116.svg",
            alternativeText: "GitHub Icon",
            caption: null,
            width: 201,
            height: 201,
            formats: null,
            hash: "github_logo_svgstack_com_50361754492116_cc2710fdd9",
            ext: ".svg",
            mime: "image/svg+xml",
            size: 1.57,
            url: "/uploads/github_logo_svgstack_com_50361754492116_cc2710fdd9.svg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2025-08-07T02:46:43.579Z",
            updatedAt: "2025-08-07T16:01:34.082Z",
            publishedAt: "2025-08-07T02:46:43.580Z"
          }
        }
      },
      {
        Order: 1,
        id: 6,
        Name: "LinkedIn",
        Link: "https://linkedin.com/in/emalberg",
        Icon: {
          id: 11,
          Name: "LinkedIn",
          SVG: {
            id: 2,
            documentId: "linkedin-demo",
            name: "linkedin.svg",
            alternativeText: "LinkedIn Icon",
            caption: null,
            width: 201,
            height: 201,
            formats: null,
            hash: "linkedin_demo",
            ext: ".svg",
            mime: "image/svg+xml",
            size: 1.57,
            url: "/react-logo.svg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2025-08-07T02:46:43.579Z",
            updatedAt: "2025-08-07T16:01:34.082Z",
            publishedAt: "2025-08-07T02:46:43.580Z"
          }
        }
      },
      {
        Order: 2,
        id: 7,
        Name: "Twitter",
        Link: "https://twitter.com/emalberg",
        Icon: {
          id: 12,
          Name: "Twitter",
          SVG: {
            id: 3,
            documentId: "twitter-demo",
            name: "twitter.svg",
            alternativeText: "Twitter Icon",
            caption: null,
            width: 201,
            height: 201,
            formats: null,
            hash: "twitter_demo",
            ext: ".svg",
            mime: "image/svg+xml",
            size: 1.57,
            url: "/typescript-logo.svg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2025-08-07T02:46:43.579Z",
            updatedAt: "2025-08-07T16:01:34.082Z",
            publishedAt: "2025-08-07T02:46:43.580Z"
          }
        }
      }
    ]
  }
}

// Sample certificate data for demo pages
export const SAMPLE_CERTIFICATE_DATA: {
  CERTIFICATES_SECTION: {
    Order: number;
    id: number;
    Title: string;
    Description: string;
    Certificates: Array<{
      id: number;
      name: string;
      issuer: string;
      dateReceived: string;
      expirationDate?: string;
      image: {
        url: string;
        alt: string;
      };
    }>;
  };
} = {
  CERTIFICATES_SECTION: {
    Order: 3,
    id: 1,
    Title: "Certifications",
    Description: "Professional certifications and achievements that demonstrate my expertise and commitment to continuous learning.",
    Certificates: [
      {
        id: 1,
        name: "Complete Web Developer Bootcamp",
        issuer: "Zero To Mastery",
        dateReceived: "2023-06-15",
        image: {
          url: "/next.svg",
          alt: "Web Developer Bootcamp Certificate"
        }
      },
      {
        id: 2,
        name: "React Developer Certification",
        issuer: "Meta",
        dateReceived: "2023-09-20",
        expirationDate: "2025-09-20",
        image: {
          url: "/react-logo.svg",
          alt: "React Developer Certificate"
        }
      },
      {
        id: 3,
        name: "TypeScript Fundamentals",
        issuer: "Microsoft",
        dateReceived: "2023-12-10",
        image: {
          url: "/typescript-logo.svg",
          alt: "TypeScript Fundamentals Certificate"
        }
      },
      {
        id: 4,
        name: "AWS Solutions Architect",
        issuer: "Amazon Web Services",
        dateReceived: "2024-01-15",
        expirationDate: "2027-01-15",
        image: {
          url: "/docker-logo.svg",
          alt: "AWS Solutions Architect Certificate"
        }
      }
    ]
  }
}
