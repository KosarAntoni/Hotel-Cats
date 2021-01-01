import React from 'react';
import IconText from './IconText';
import emptyRoom from '../../../assets/icons/aboutRoom/emptyRoom.svg';

export default {
  title: 'Atoms/IconText',
  component: IconText,
};

export const Empty = () => <IconText icon={emptyRoom}>Empty room</IconText>;
