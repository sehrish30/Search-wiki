import React from 'react';
import ListItem from '.';

export default {
  title: 'Components/ListItem',
  component: ListItem,
};

const Template = (args) => <ListItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 'https://en.wikipedia.org/wiki/Hello_(Adele_song)',
  label: "Test data for demo"
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
