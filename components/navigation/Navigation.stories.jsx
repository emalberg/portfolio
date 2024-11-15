import Navigation from './Navigation'; // Adjust the path as necessary

export default {
  title: 'Components/Navigation',
  component: Navigation,
};

const Template = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {};
