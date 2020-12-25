import React from 'react';
import IconHint from './IconHint';
import emptyRoom from '../../../assets/icons/aboutRoom/emptyRoom.svg';

export default {
  title: 'Atoms/IconHint',
  content: IconHint,
};

export const Empty = () => <IconHint icon={emptyRoom}>Empty room</IconHint>;
