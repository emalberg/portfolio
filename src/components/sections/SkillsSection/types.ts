export interface SkillIcon {
  url: string;
  alternativeText: string;
  
}

export interface SkillData {
  id: number;
  Name: string;
  Icon: SkillIcon;
}

export interface SkillsSectionData {
  Order: number;
  id: number;
  Title: string;
  Skills: SkillData[];
}

export interface SkillsSectionProps {
  data: SkillsSectionData;
}

export interface CarouselConfig {
  orientation: "horizontal" | "vertical";
  itemsPerSlide: number;
  opts: {
    align: "start" | "center" | "end";
    loop: boolean;
  };
}

export interface AnimationConfig {
  container: {
    hidden: { opacity: number; y: number };
    visible: {
      opacity: number;
      y: number;
      transition: {
        duration: number;
        staggerChildren: number;
      };
    };
  };
  item: {
    hidden: { opacity: number; y: number };
    visible: {
      opacity: number;
      y: number;
      transition: { duration: number };
    };
  };
}
