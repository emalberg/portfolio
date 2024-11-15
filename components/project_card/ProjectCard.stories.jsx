import React from 'react';
import ProjectCard from './ProjectCard';

export default {
  title: 'Components/ProjectCard',
  component: ProjectCard,
};

// Default story
const Template = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: 'https://picsum.photos/150',
  name: 'Sample Project',
  description: 'This is a description of the sample project.',
};

// You can create additional variations if needed
export const AnotherExample = Template.bind({});
AnotherExample.args = {
  image: 'https://picsum.photos/150',
  name: 'Another Project',
  description: 'This is a description of another project.',
};
