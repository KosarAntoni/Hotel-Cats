import React from 'react';
import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
};

export const Normal = () => <Input placeholder="Input" />;
export const Error = () => <Input error placeholder="Error" />;
