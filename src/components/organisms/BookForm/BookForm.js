import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import 'yup-phone';
import Heading from '../../atoms/Heading/Heading';
import Input from '../../atoms/Input/Input';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import StyledDatePicker from '../StyledDatePicker/StyledDatePicker';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45rem;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    max-width: 45rem;
  }
`;

const StyledForm = styled(Form)`
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

const StyledHeading = styled(Heading)`
  margin: 0 auto 3rem;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    margin-bottom: 5rem;
  }
`;

const StyledSmallHeading = styled(Heading)`
  text-align: center;
  width: 100%;
  margin: 0 auto 1rem;
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 0.5rem;
`;

const StyledError = styled(Paragraph)`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.red}
`;

const StyledButtonIcon = styled(ButtonIcon)`
  margin: 3rem auto 0;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    margin-top: 4rem;
  }
`;

const StyledDateLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 48%;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const Background = styled.div`
  z-index: -1;
  top: -4rem;
  left: -3rem;
  position: absolute;
  width: 12rem;
  height: 12rem;
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
  transform: rotate(125deg);
  opacity: 0.2;
  padding: 0;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    width: 15rem;
    height: 15rem;
  }
`;

const BookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .phone('PL', false, 'Invalid phone')
    .required('Required'),
  catName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  dateFrom: Yup.date().required('Required'),
  dateTo: Yup.date().required('Required'),
});

const BookForm = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('?');
    setTimeout(() => history.push('?bookSuccess'), 300);
  };
  const today = new Date();

  return (
    <Wrapper>
      <Background />
      <StyledHeading>Book a room</StyledHeading>
      <Formik
        initialValues={{
          name: '',
          catName: '',
          phone: '',
          email: '',
          dateFrom: new Date(),
          dateTo: new Date(),
        }}
        validationSchema={BookSchema}
        onSubmit={(values) => handleClick(values)}
      >
        {({
          values, setFieldValue, handleChange, errors, touched,
        }) => (
          <StyledForm>
            <StyledLabel>
              {errors.name && touched.name ? (
                <StyledError>{errors.name}</StyledError>
              ) : null}
              <StyledInput
                error={errors.name}
                onChange={handleChange}
                value={values.name}
                id="name"
                name="name"
                placeholder="Your name"
              />
            </StyledLabel>

            <StyledLabel>
              {errors.catName && touched.catName ? (
                <StyledError>{errors.catName}</StyledError>
              ) : null}
              <StyledInput
                error={errors.catName}
                onChange={handleChange}
                value={values.catName}
                id="catName"
                name="catName"
                placeholder="Cats name"
              />
            </StyledLabel>

            <StyledLabel>
              {errors.phone && touched.phone ? (
                <StyledError>{errors.phone}</StyledError>
              ) : null}
              <StyledInput
                error={errors.phone}
                onChange={handleChange}
                value={values.phone}
                id="phone"
                name="phone"
                placeholder="Phone number"
              />
            </StyledLabel>

            <StyledLabel>
              {errors.email && touched.email ? (
                <StyledError>{errors.email}</StyledError>
              ) : null}
              <StyledInput
                error={errors.email}
                onChange={handleChange}
                value={values.email}
                id="email"
                name="email"
                placeholder="Email"
              />
            </StyledLabel>

            <StyledSmallHeading small>Arrival date</StyledSmallHeading>
            <StyledDateLabel>
              <StyledParagraph>Check-in</StyledParagraph>
              {errors.dateFrom && touched.dateFrom ? (
                <StyledError>{errors.dateFrom}</StyledError>
              ) : null}
              <StyledInput
                as={StyledDatePicker}
                error={errors.dateFrom}
                minDate={today}
                locale="en-EN"
                clearIcon={null}
                calendarIcon={null}
                format="dd-MM-y"
                id="dateFrom"
                name="dateFrom"
                value={values.dateFrom}
                onChange={(e) => {
                  setFieldValue('dateFrom', e);
                }}
              />
            </StyledDateLabel>

            <StyledDateLabel>
              {errors.dateTo && touched.dateTo ? (
                <StyledError>{errors.dateTo}</StyledError>
              ) : null}
              <StyledParagraph>Check-out</StyledParagraph>
              <StyledInput
                as={StyledDatePicker}
                error={errors.dateTo}
                locale="en-EN"
                minDate={values.dateTo}
                clearIcon={null}
                calendarIcon={null}
                format="dd-MM-y"
                id="dateTo"
                name="dateTo"
                value={values.dateTo}
                onChange={(e) => {
                  setFieldValue('dateTo', e);
                }}
              />
            </StyledDateLabel>

            <StyledButtonIcon type="submit">Reserve</StyledButtonIcon>
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
};

export default BookForm;
