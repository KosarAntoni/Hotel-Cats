import React from 'react';
import TestimonialCard from './TestimonialCard';

export default {
  title: 'Molecules/TestimonialCard',
  component: TestimonialCard,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <TestimonialCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'Ekaterina Minaeva',
  content: 'Friends recommended a hotel for pets. They always leave their cat here when they leave. Pets are very well taken care of in "Koteika", the hotel is very clean. I recommend to everyone! We will contact you again.',
  date: '1976-04-19T12:59-0500',
};
