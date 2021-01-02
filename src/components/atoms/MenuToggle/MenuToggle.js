import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  width: 25px;
  height: 25px;
  background: transparent;
`;

const Path = styled(motion.path).attrs((props) => ({
  ...props,
}))`
  stroke: ${({ theme, isOpen }) => (isOpen ? theme.black : theme.primary)};
  transition: stroke 0.5s;
  fill: transparent;
  stroke-width: 3px;
  stroke-linecap: round;
`;

const MenuToggle = ({ toggle, isOpen }) => (
  <Button onClick={toggle}>
    <svg width="24" height="24" viewBox="0 0 22 20">
      <Path
        isOpen={isOpen}
        d="M 2 2.5 L 20 2.5"
        animate={isOpen ? { d: 'M 3 16.5 L 17 2.5' } : { d: 'M 2 2.5 L 20 2.5' }}
      />
      <Path
        isOpen={isOpen}
        initial={{ opacity: 1 }}
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        d="M 2 9.423 L 20 9.423"
        transition={{ duration: 0.1 }}
      />
      <Path
        isOpen={isOpen}
        d="M 2 16.346 L 20 16.346"
        animate={isOpen ? { d: 'M 3 2.5 L 17 16.346' } : { d: 'M 2 16.346 L 20 16.346' }}
      />
    </svg>
  </Button>
);

MenuToggle.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
};

MenuToggle.defaultProps = {
  toggle: () => {},
  isOpen: false,
};

export default MenuToggle;
