import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from '../../atoms/Link/Link';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import IconHint from '../../atoms/IconHint/IconHint';
import emptyRoomIcon from '../../../assets/icons/aboutRoom/emptyRoom.svg';
import catHouseIcon from '../../../assets/icons/aboutRoom/catHouse.svg';
import bedIcon from '../../../assets/icons/aboutRoom/bed.svg';
import gameRoomIcon from '../../../assets/icons/aboutRoom/gameRoom.svg';
import scratchingPostIcon from '../../../assets/icons/aboutRoom/scratchingPost.svg';

const Wrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => (theme.background)};
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);
`;

const Image = styled.img`
	width: 100%;
	height: 19rem;
	object-fit: cover;
	border-radius: 8px 8px 0 0;
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
  padding: 2.5rem;
`;

const StyledLink = styled(Link)`
	margin-bottom: 2rem;
  margin-right: auto;
`;

const List = styled.ul`
  list-style: none;
	margin-bottom: 1rem;
`;

const ListItem = styled.li`
	margin-bottom: 1rem;
  display: flex;
  color: ${({ theme }) => theme.primary};
`;

const FurnishingsContainer = styled.div`
  display: flex;
`;

const StyledIconHint = styled(IconHint)`
  margin-left: 0.5rem;
`;

const RoomCard = ({
  title, area, dimensions, price, image, furnishings,
}) => {
  const {
    bed, gameRoom, scratchingPost, catHouse,
  } = furnishings;
  return (
    <Wrapper>
      <Image src={image} alt={title} />
      <ContentWrapper>
        <StyledLink big href={image}>{title}</StyledLink>
        <List>
          <ListItem>
            {'Area - '}
            {area}
            {' m2'}
          </ListItem>
          <ListItem>
            {'Dimensions - '}
            {dimensions}
            {' cm'}
          </ListItem>
          <ListItem>
            {'Furnishings - '}
            <FurnishingsContainer>
              {!bed && !gameRoom && !scratchingPost && !catHouse
              && <StyledIconHint icon={emptyRoomIcon}>Empty room</StyledIconHint>}
              {bed && <StyledIconHint icon={bedIcon}>Bed</StyledIconHint>}
              {gameRoom && <StyledIconHint icon={gameRoomIcon}>Game room</StyledIconHint>}
              {scratchingPost
              && <StyledIconHint icon={scratchingPostIcon}>Scratching post</StyledIconHint>}
              {catHouse && <StyledIconHint icon={catHouseIcon}>Cat house</StyledIconHint>}
            </FurnishingsContainer>

          </ListItem>
          <ListItem>
            {'Price per day - '}
            {price}
            {' $'}
          </ListItem>
        </List>
        <ButtonIcon>Book now</ButtonIcon>
      </ContentWrapper>
    </Wrapper>
  );
};

RoomCard.propTypes = {
  title: PropTypes.string.isRequired,
  area: PropTypes.number.isRequired,
  dimensions: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  furnishings: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default RoomCard;
