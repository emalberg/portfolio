'use client';

import { motion } from 'framer-motion';
import Skill from '@/components/Skill';

interface SkillData {
  id: number;
  Name: string;
  Icon: {
    Name: string;
    SVG: {
      url: string;
      alternativeText: string;
    };
  };
}

interface SkillsSectionData {
  Order: number;
  id: number;
  Title: string;
  Skills: SkillData[];
}

interface SkillsSectionProps {
  data: SkillsSectionData;
}

export default function SkillsSection({ data }: SkillsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            variants={itemVariants}
          >
            {data.Title}
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto"
            variants={itemVariants}
          />
        </motion.div>

                 <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
         >
           <div className="max-w-6xl mx-auto">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
               {data.Skills.map((skill, index) => (
                 <motion.div
                   key={skill.id}
                   variants={itemVariants}
                   className="flex justify-center"
                 >
                   <Skill
                     name={skill.Name}
                     iconUrl={skill.Icon.SVG.url}
                     iconAlt={skill.Icon.SVG.alternativeText}
                   />
                 </motion.div>
               ))}
             </div>
           </div>
         </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
