import React from 'react';
import CarouselRoomCard from './CarouselRoomCard';

export default {
  title: 'Molecules/CarouselRoomCard',
  component: CarouselRoomCard,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <CarouselRoomCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Economy plus',
  area: '0,90 m2',
  dimensions: '90x100x180 cm',
  price: '20$',
  image: 'https://i.pinimg.com/originals/cc/ef/d3/ccefd383260251354a86612682772f14.jpg',
};
