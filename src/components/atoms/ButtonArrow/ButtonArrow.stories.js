import React from 'react';
import ButtonArrow from './ButtonArrow';

export default {
  title: 'Atoms/ButtonArrow',
  component: ButtonArrow,
};

export const Normal = () => <ButtonArrow />;
export const Outline = () => <ButtonArrow left />;
