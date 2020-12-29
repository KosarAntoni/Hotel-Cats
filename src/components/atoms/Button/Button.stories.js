import React from 'react';
import Button from './Button';

export default {
  title: 'Atoms/ButtonArrow',
  component: Button,
};

export const Normal = () => <Button>Press me</Button>;
export const Outline = () => <Button white>Press me</Button>;
