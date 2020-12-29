import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from '../components/atoms/Heading/Heading';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 7rem 1.5rem 2rem;
  overflow: hidden;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    padding: 12rem 4.5rem 2rem ;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  display: flex;
	flex-direction: column;
	align-items: center;
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
`;

const StyledHeading = styled(Heading)`
	margin-bottom: 4rem;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    margin-bottom: 7rem;
  }
`;

const SectionTemplate = ({ children, title }) => (
  <Wrapper>
    <ContentContainer>
      <StyledHeading>{title}</StyledHeading>
      {children}
    </ContentContainer>
  </Wrapper>
);

SectionTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SectionTemplate;
