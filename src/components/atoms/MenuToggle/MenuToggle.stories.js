import React from 'react';
import MenuToggle from './MenuToggle';

export default {
  title: 'Atoms/MenuToggle',
  component: MenuToggle,
};

const Template = (args) => <MenuToggle {...args} />;

export const Default = Template.bind({});

Default.args = {
  isOpen: false,
};
