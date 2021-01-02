import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    flex-direction: row-reverse;
    height: 50rem;
  }
`;

const StyledCarousel = styled(Carousel)`
  margin-bottom: 1.5rem;
  border-radius: 1rem;
  overflow: hidden;
  
  .rec-slider-container {
    margin: 0;
  }

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    margin: 0 0 0 1.5rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 29rem;
  object-fit: cover;
  
  :focus {
    outline: none;
  }

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    height: 50rem;
  }
`;

const ThumbnailsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    flex-direction: column;
  }
`;

const Thumbnail = styled.img`
  width: 32%;
  height: 6.5rem;
  object-fit: cover;
  border-radius: 0.5rem;
  cursor: pointer;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    width: 7rem;
    height: 30%;
  }
`;

const ImageCarouselTemplate = ({ images }) => {
  const carousel = useRef();

  return (
    <Wrapper>
      <StyledCarousel
        ref={carousel}
        enableSwipe={false}
        enableMouseSwipe={false}
        showArrows={false}
        pagination={false}
        itemShow={1}
        verticalMode
      >
        {images.map((src) => <Image key={src} src={src} alt="" />)}
      </StyledCarousel>
      <ThumbnailsContainer>
        {images.map((src, i) => <Thumbnail onClick={() => carousel.current.goTo(i)} key={src} src={src} alt="" />)}
      </ThumbnailsContainer>
    </Wrapper>
  );
};

ImageCarouselTemplate.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageCarouselTemplate;
