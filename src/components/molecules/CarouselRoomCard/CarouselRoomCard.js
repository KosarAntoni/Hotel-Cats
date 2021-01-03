import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import { useHistory } from 'react-router-dom';
import Link from '../../atoms/Link/Link';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';

const Wrapper = styled.div`
	width: 100%;
	max-width: 50rem;
	
	@media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport7} {
		position: relative;
		max-width: 678px;
		height: 326px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport12} {
    max-width: 1030px;
		height: 404px;
  }
`;

const Image = styled.img`
	width: 100%;
	height: 19rem;
	object-fit: cover;
	border-radius: 	${({ theme }) => `${theme.borderRadius} ${theme.borderRadius} 0 0`};
  
  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport7} {
    width: 440px;
    height: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport12} {
  	width: 600px;
	}
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;

  padding: 2.5rem;
  background: ${({ theme }) => (theme.background)};
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);
  border-radius: ${({ theme }) => theme.borderRadius};

  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport7} {
		position: absolute;
		right: 0;
		width: 345px;
    padding: 4rem;
  }

  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport12} {
    padding: 4rem 10rem;
		width: 500px;
  }
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
  color: ${({ theme }) => theme.primary};

  :before {
    content:"·";
    font-size: 8rem;
    vertical-align: top;
    line-height: 0.5rem;
		color: ${({ theme }) => theme.yellow};
  }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  @media screen and ${({ theme: { viewPorts } }) => viewPorts.viewport7} {
		margin-right: auto;
  }
`;

const CarouselRoomCard = ({
  title, area, dimensions, price, image, id,
}) => {
  const history = useHistory();
  const handleClick = () => (
    history.push('?book')
  );

  return (
    <Wrapper>
      <Image src={image} alt={title} />
      <ContentWrapper>
        <StyledLink big as={HashLink} to={`/room/${id}#`}>{title}</StyledLink>
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
            {'Price per day - '}
            {price}
            {' $'}
          </ListItem>
        </List>
        <StyledButtonIcon onClick={handleClick}>Book now</StyledButtonIcon>
      </ContentWrapper>
    </Wrapper>
  );
};

CarouselRoomCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  area: PropTypes.number.isRequired,
  dimensions: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default CarouselRoomCard;
