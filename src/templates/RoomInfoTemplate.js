import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Heading from '../components/atoms/Heading/Heading';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import IconText from '../components/atoms/IconText/IconText';
import emptyRoomIcon from '../assets/icons/aboutRoom/emptyRoom.svg';
import bedIcon from '../assets/icons/aboutRoom/bed.svg';
import gameRoomIcon from '../assets/icons/aboutRoom/gameRoom.svg';
import scratchingPostIcon from '../assets/icons/aboutRoom/scratchingPost.svg';
import catHouseIcon from '../assets/icons/aboutRoom/catHouse.svg';
import ImageCarouselTemplate from './ImageCarouselTemplate';

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  padding: 4rem 1.5rem 2rem;
  overflow: hidden;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    padding: 7rem 4.5rem 2rem ;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  display: flex;
	flex-direction: column;
	align-items: flex-start;
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    flex-direction: row;
  }
`;

const Background = styled.div`
  z-index: -1;
  top: -2rem;
  right: -5rem;
  position: absolute;
  width: 15rem;
  height: 15rem;
  display: block;
  background-image: url("data:image/svg+xml,%3Csvg 
    width='21' 
    height='18' 
    viewBox='0 0 21 18' 
  	fill='${({ theme }) => theme.yellow}' 
    xmlns='http://www.w3.org/2000/svg'%3E%3Cpath 
    d='M16.8031 6.52453C13.8387 8.22469 14.3435 13.1874 17.5591 13.1874C18.9459 13.1874 20.1462 12.1448 20.6806 10.8119C21.9148 7.73355 19.3483 5.06432 16.8031 6.52453Z'/%3E%3Cpath 
    d='M13.7586 7.13908C17.3154 7.13908 18.3804 1.09917 15.0012 0.106185C13.4617 -0.346079 11.711 0.739105 11.1487 2.72284C10.5178 4.94628 11.759 7.13908 13.7586 7.13908Z'/%3E%3Cpath 
    d='M12.8437 17.8903C12.3498 17.7537 11.4731 17.6658 10.5555 17.6531C9.58551 17.6389 8.56997 17.7084 7.9129 17.8903C6.13824 18.3847 3.72348 17.1886 4.25331 14.7045C4.74338 12.408 6.50422 12.5389 6.92062 10.3625C7.34017 8.16298 8.97061 7.10147 10.5555 7.18444C12.0223 7.26144 13.4499 8.31922 13.8389 10.363C14.2529 12.5409 16.0101 12.4088 16.4994 14.7045C17.0312 17.1906 14.6114 18.3802 12.8437 17.8903Z'/%3E%3Cpath 
    d='M7.49871 7.13932C8.50479 7.13932 9.36885 6.55499 9.84899 5.66068C11.2763 3.00141 8.9321 -0.680001 6.25583 0.10841C2.87087 1.10414 3.94385 7.13932 7.49871 7.13932Z'/%3E%3Cpath d='M5.89091 11.21C7.03297 8.41567 4.32591 5.00238 1.74052 6.07635C-1.37374 7.36985 -0.000207816 12.9488 3.42404 12.9488C4.52296 12.9488 5.45682 12.2723 5.89091 11.21Z'/%3E%3Cpath d='M12.8437 17.8903C12.3497 17.7537 11.473 17.6658 10.5554 17.6531V7.18445C12.0223 7.26145 13.4498 8.31922 13.8388 10.363C14.2528 12.5409 16.01 12.4088 16.4994 14.7045C17.0311 17.1906 14.6113 18.3802 12.8437 17.8903Z'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-size: 100%;
  transform: rotate(-135deg);
  opacity: 0.2;
  padding: 0;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    top: -9rem;
    right: -20rem;
    width: 30rem;
    height: 30rem;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    width: 80%;
    max-width: 400px;
    height: 100%;
    margin: 0 auto 0 7rem;
  }
`;

const FurnishingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const StyledHeading = styled(Heading)`
  margin-top: 4rem;
  margin-bottom: 2.5rem;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    margin-top: 0;
    margin-bottom: 4rem;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 1.5rem;
`;

const StyledPriceParagraph = styled(Paragraph)`
  margin: auto 0 1.5rem;
`;

const StyledIconText = styled(IconText)`
  margin-top: 1rem;
`;

const StyledButton = styled(ButtonIcon)`
  margin-top: 1rem;
  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    margin-right: auto;
  }
`;

const RoomInfoTemplate = ({
  title, area, dimensions, price, furnishings, images,
}) => {
  const {
    bed, gameRoom, scratchingPost, catHouse,
  } = furnishings;
  const history = useHistory();
  const handleClick = () => (
    history.push('?book')
  );

  return (
    <Wrapper>
      <ContentContainer>
        <Background />
        <ImageCarouselTemplate images={images} />
        <InfoContainer>
          <StyledHeading>{title}</StyledHeading>
          <StyledParagraph>
            {'Area - '}
            {area}
            {' m2'}
          </StyledParagraph>
          <StyledParagraph>
            {'Dimensions - '}
            {dimensions}
            {' cm'}
          </StyledParagraph>
          <Paragraph>Furnishings</Paragraph>
          <FurnishingsContainer>
            {!bed && !gameRoom && !scratchingPost && !catHouse
            && <StyledIconText icon={emptyRoomIcon}>Empty room</StyledIconText>}
            {bed && <StyledIconText icon={bedIcon}>Bed</StyledIconText>}
            {gameRoom && <StyledIconText icon={gameRoomIcon}>Game room</StyledIconText>}
            {scratchingPost
            && <StyledIconText icon={scratchingPostIcon}>Scratching post</StyledIconText>}
            {catHouse && <StyledIconText icon={catHouseIcon}>Cat house</StyledIconText>}
          </FurnishingsContainer>
          <StyledPriceParagraph>
            {'Price per day - '}
            {price}
            {' $'}
          </StyledPriceParagraph>
          <StyledButton onClick={handleClick}>Book now</StyledButton>
        </InfoContainer>
      </ContentContainer>
    </Wrapper>
  );
};

RoomInfoTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  area: PropTypes.number.isRequired,
  dimensions: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  furnishings: PropTypes.objectOf(PropTypes.bool).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RoomInfoTemplate;
