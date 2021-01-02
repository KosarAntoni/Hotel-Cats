import React, { useRef } from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import PropTypes from 'prop-types';
import ButtonArrow from '../components/atoms/ButtonArrow/ButtonArrow';

const StyledCarousel = styled(Carousel)`
  
  & .rec-dot {
    background-color: ${({ theme }) => theme.secondary};
    box-shadow: none;
  }
  
  & .rec-dot_active {
    background-color: ${({ theme }) => theme.yellow};
    box-shadow: none;
  }
  
  & * {
    overflow: visible;
  }
`;

const ArrowsContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: none;
  justify-content: space-between;
  width: 8.2rem;
  transform: translateY(25%);

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    display: flex;
  }
  
`;

const CarouselTemplate = ({ children, itemsPerPage }) => {
  const carousel = useRef();

  return (
    <>
      <ArrowsContainer>
        <ButtonArrow left onClick={() => carousel.current.slidePrev()} />
        <ButtonArrow white onClick={() => carousel.current.slideNext()} />
      </ArrowsContainer>

      <StyledCarousel
        ref={carousel}
        showEmptySlots
        itemPadding={[0, 15, 30]}
        showArrows={false}
        breakPoints={[
          { width: 1, itemsToShow: 1 },
          { width: 769, itemsToShow: itemsPerPage, itemsToScroll: itemsPerPage },
        ]}
      >
        {children}
      </StyledCarousel>
    </>
  );
};

CarouselTemplate.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.element, PropTypes.arrayOf(PropTypes.element)],
  ).isRequired,
  itemsPerPage: PropTypes.number,
};

CarouselTemplate.defaultProps = {
  itemsPerPage: 1,
};

export default CarouselTemplate;
