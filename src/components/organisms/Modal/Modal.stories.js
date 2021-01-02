import React from 'react';
import Modal from './Modal';
import Paragraph from '../../atoms/Paragraph/Paragraph';

export default {
  title: 'Organisms/Modal',
  component: Modal,
};

export const Default = () => (
  <Modal handleClose={() => {}}>
    <Paragraph>Modal template</Paragraph>
  </Modal>
);
