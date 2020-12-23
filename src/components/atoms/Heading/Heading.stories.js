import React from 'react';
import Heading from './Heading';

export default {
  title: 'Atoms/Heading',
  component: Heading,
};

export const Normal = () => <Heading>Lorem ipsum</Heading>;
export const Big = () => <Heading big>Lorem ipsum</Heading>;
export const Small = () => <Heading small>Lorem ipsum</Heading>;
