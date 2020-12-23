import React from 'react';
import Link from './Link';

export default {
  title: 'Atoms/Link',
  component: Link,
};

export const Normal = () => <Link href="https://www.google.pl/">Google.com</Link>;
export const Big = () => <Link big href="https://www.google.pl/">Google.com</Link>;
