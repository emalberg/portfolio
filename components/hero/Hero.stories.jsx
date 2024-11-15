import React from 'react';
import Hero from './Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'Erich Malberg',
  about1: 'Hello',
  about2: 'World',
};
