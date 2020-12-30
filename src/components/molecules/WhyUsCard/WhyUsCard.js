import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IconBackground from '../../atoms/IconBackground/IconBackground';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const Container = styled.div`
	padding: 3rem;
  background: ${({ theme }) => (theme.background)};
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.05);
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const StyledIconBackground = styled(IconBackground)`
  margin-bottom: 3rem;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 1.5rem;
`;

const WhyUsCard = ({ icon, title, content }) => (
  <Container>
    <StyledIconBackground icon={icon} />
    <StyledHeading small>{title}</StyledHeading>
    <Paragraph>{content}</Paragraph>
  </Container>
);

WhyUsCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default WhyUsCard;
