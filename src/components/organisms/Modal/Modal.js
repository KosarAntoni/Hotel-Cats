import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MenuToggle from '../../atoms/MenuToggle/MenuToggle';

const Wrapper = styled(motion.div)`
  position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
  z-index: 10;
  padding: 1.5rem;
  
  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    padding: 4.5rem;
  }
`;

const Background = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
  background: ${({ theme }) => theme.background};
  backdrop-filter: blur(8px);
`;

const Container = styled(motion.div)`
	position: relative;
  background: ${({ theme }) => (theme.background)};
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);
  border-radius: ${({ theme }) => theme.borderRadius};
	max-width: 65rem;
	padding: 5rem 2.5rem;
  z-index: 12;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    padding: 7rem;
  }
`;

const CloseButtonWrapper = styled.div`
	position: absolute;
	top: 2rem;
	right: 2rem;
	
	path {
		stroke: ${({ theme }) => theme.primary}
	}

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    top: 4rem;
    right: 4rem;
  }
`;

const Modal = ({ children, isShown, handleClose }) => (
  <Wrapper
    initial={{ opacity: 0, visibility: 'hidden' }}
    animate={isShown ? { opacity: 1, visibility: 'visible' } : { opacity: 0, visibility: 'hidden' }}
    transition={!isShown && {
      delay: 0.4,
    }}
  >
    <Background
      initial={{ opacity: 0 }}
      animate={isShown ? { opacity: 0.8 } : { opacity: 0 }}
      transition={isShown ? {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      } : {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      }}
      onClick={() => handleClose()}
    />
    <Container
      initial={{ opacity: 0, y: '10%' }}
      animate={isShown ? { opacity: 1, y: '0%' } : { opacity: 0, y: '10%' }}
      transition={isShown ? {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      } : {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      }}
    >
      <CloseButtonWrapper onClick={() => handleClose()}>
        <MenuToggle isOpen />
      </CloseButtonWrapper>
      {children}
    </Container>
  </Wrapper>
);

Modal.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.element, PropTypes.arrayOf(PropTypes.element)],
  ).isRequired,
  isShown: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  isShown: false,
};

export default Modal;
