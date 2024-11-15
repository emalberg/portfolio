import ProjectsCarouselContainer from '@/components/carousel_container/ProjectsCarouselContainer';
import SkillsCarouselContainer from '@/components/carousel_container/SkillsCarouselContainer';
import Hero from '@/components/hero/Hero';

export default function Home() {
  const sampleProjects = [
    {
      image: 'https://via.placeholder.com/345x140',
      name: 'Project Alpha',
      description: 'This is a description of Project Alpha.',
    },
    {
      image: 'https://via.placeholder.com/345x140',
      name: 'Project Beta',
      description: 'This is a description of Project Beta.',
    },
    {
      image: 'https://via.placeholder.com/345x140',
      name: 'Project Gamma',
      description: 'This is a description of Project Gamma.',
    },
    {
      image: 'https://via.placeholder.com/345x140',
      name: 'Project Omega',
      description: 'This is a description of Project Omega.',
    },
  ];
  return (
    <>
      <Hero
        name='Erich Malberg'
        about1='I am a dedicated software engineer with a strong focus on both front-end and back-end development, currently specializing in front-end technologies. I work with React, JavaScript, HTML, and CSS to create intuitive and responsive user interfaces, while also leveraging Node.js for server-side development. In addition to my web development skills, I have experience with JavaScript and Gosu/Guidewire, contributing to a wide range of software projects. I am also deeply interested in exploring other programming languages, such as Python, and have a growing passion for machine learning. I enjoy expanding my skill set to embrace new technologies and build innovative, scalable applications.'
        about2='Outside of software development, I am an avid lover of the outdoors, enjoying activities like hiking, camping, and exploring nature. I also have a creative side, making my own soap and occasionally diving into 3D printing projects. Crafting is another hobby I enjoy, allowing me to express my creativity in different ways. I’m also a fan of board games and video games, always up for some friendly competition. With an engineering mindset, I take great satisfaction in fixing things and finding practical solutions, whether it’s repairing something around the house or tackling a new hands-on project.'
      />
      <SkillsCarouselContainer />
      <ProjectsCarouselContainer projects={sampleProjects} />
    </>
  );
}
