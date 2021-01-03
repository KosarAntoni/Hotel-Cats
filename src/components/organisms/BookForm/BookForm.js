import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import Heading from '../../atoms/Heading/Heading';
import Input from '../../atoms/Input/Input';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    width: 45rem;
  }
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledInput = styled(Input)`
  width: 100%;
  margin-bottom: 1rem;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    margin-bottom: 2rem;
  }
`;

const StyledDateInput = styled(Input)`
  width: 49%;
`;

const StyledParagraph = styled(Paragraph)`
  width: 100%;
  margin-bottom: 0.5rem;
  
  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    margin-bottom: 1.5rem;
  }
`;

const StyledHeading = styled(Heading)`
  margin: 0 auto 3rem;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    margin-bottom: 5rem;
  }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  margin: 3rem auto 0;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    margin-top: 4rem;
  }
`;

const BookForm = () => (
  <Wrapper>
    <StyledHeading>Book a room</StyledHeading>
    <Formik>
      {() => (
        <StyledForm onSubmit={() => {}}>
          <StyledInput placeholder="Your name" />
          <StyledInput placeholder="Cats name" />
          <StyledInput placeholder="Phone number" />
          <StyledInput placeholder="Email" />
          <StyledParagraph>Arrival date</StyledParagraph>
          <StyledDateInput placeholder="from" />
          <StyledDateInput placeholder="to" />
          <StyledButtonIcon>Book now!</StyledButtonIcon>
        </StyledForm>
      )}
    </Formik>
  </Wrapper>
);

export default BookForm;
