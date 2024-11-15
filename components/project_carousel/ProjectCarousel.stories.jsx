import ProjectCarousel from './ProjectCarousel';

export default {
  title: 'Components/ProjectCarousel',
  component: ProjectCarousel,
};

const Template = (args) => <ProjectCarousel {...args} />;

// Sample project data for the carousel
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

export const Default = Template.bind({});
Default.args = {
  projects: sampleProjects,
};
