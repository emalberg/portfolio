import SkillsSection from '@/components/sections/SkillsSection';

// Sample data matching your Strapi schema
const sampleSkillsData = {
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
};

export default function SkillsDemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <SkillsSection data={sampleSkillsData} />
    </div>
  );
}
