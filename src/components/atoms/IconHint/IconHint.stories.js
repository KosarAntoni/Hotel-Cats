import React from 'react';
import IconHint from './IconHint';
import emptyRoom from '../../../assets/icons/aboutRoom/emptyRoom.svg';

export default {
  title: 'Atoms/IconHint',
  content: IconHint,
};

export const Emthy = () => <IconHint icon={emptyRoom}>Empthy room</IconHint>;
