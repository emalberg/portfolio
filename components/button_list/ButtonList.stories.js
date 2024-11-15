import ButtonList from './ButtonList'; // Adjust the path as necessary

export default {
  title: 'Components/ButtonList',
  component: ButtonList,
};

const Template = (args) => <ButtonList {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttons: [
    {
      label: 'Save',
      variant: 'contained',
      color: 'navigation',
      onClick: () => alert('Save clicked'),
    },
    {
      label: 'Cancel',
      variant: 'outlined',
      color: 'navigation',
      onClick: () => alert('Cancel clicked'),
    },
    {
      label: 'Click Me',
      variant: 'text',
      color: 'navigation',
      onClick: () => alert('Button clicked'),
    },
  ],
};
