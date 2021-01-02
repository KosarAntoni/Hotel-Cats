import React, { useState } from 'react';
import styled from 'styled-components';
import PropTyped from 'prop-types';
import Button from '../../atoms/Button/Button';
import CheckField from '../../molecules/CheckField/CheckField';
import Heading from '../../atoms/Heading/Heading';
import Input from '../../atoms/Input/Input';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
  max-width: 21rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: ${({ column }) => column && 'column'};
  justify-content: space-between;
  margin-bottom: 4rem;
`;

const StyledInput = styled(Input)`
  width: 48%;
`;

const CheckFieldWrapper = styled.div`
  margin-bottom: 1.5rem;
  
  :last-of-type {
    margin-bottom: 0;
  }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 2rem;
`;

const StyledButton = styled(Button)`
  margin-bottom: 1.5rem;
`;

const RoomsFilter = ({ handleFilter }) => {
  const initialState = {
    priceFrom: '',
    priceTo: '',
    empty: true,
    bed: true,
    gameRoom: true,
    scratchingPost: true,
    catHouse: true,
  };
  const [filter, setFilter] = useState(initialState);

  return (
    <Wrapper>
      <StyledHeading small>Price per day</StyledHeading>
      <InputContainer>
        <StyledInput
          type="number"
          square
          placeholder="from"
          value={filter.priceFrom}
          onChange={({ target }) => setFilter({ ...filter, priceFrom: Number(target.value) })}
        />
        <StyledInput
          type="number"
          square
          placeholder="to"
          value={filter.priceTo}
          onChange={({ target }) => setFilter({ ...filter, priceTo: Number(target.value) })}
        />
      </InputContainer>
      <StyledHeading small>Furnishings</StyledHeading>
      <InputContainer column>
        <CheckFieldWrapper>
          <CheckField
            isChecked={filter.empty}
            handleChange={() => {
              setFilter(
                { ...filter, empty: !filter.empty },
              );
            }}
          >
            Empty room
          </CheckField>
        </CheckFieldWrapper>
        <CheckFieldWrapper>
          <CheckField
            isChecked={filter.bed}
            handleChange={() => {
              setFilter(
                { ...filter, bed: !filter.bed },
              );
            }}
          >
            Bed
          </CheckField>
        </CheckFieldWrapper>
        <CheckFieldWrapper>
          <CheckField
            isChecked={filter.gameRoom}
            handleChange={() => {
              setFilter(
                { ...filter, gameRoom: !filter.gameRoom },
              );
            }}
          >
            Game room
          </CheckField>
        </CheckFieldWrapper>
        <CheckFieldWrapper>
          <CheckField
            isChecked={filter.scratchingPost}
            handleChange={() => {
              setFilter(
                { ...filter, scratchingPost: !filter.scratchingPost },
              );
            }}
          >
            Scratching post
          </CheckField>
        </CheckFieldWrapper>
        <CheckFieldWrapper>
          <CheckField
            isChecked={filter.catHouse}
            handleChange={() => {
              setFilter(
                { ...filter, catHouse: !filter.catHouse },
              );
            }}
          >
            Cat house
          </CheckField>
        </CheckFieldWrapper>
      </InputContainer>

      <StyledButton onClick={() => handleFilter(filter)}>Apply</StyledButton>
      <Button
        outline
        onClick={() => {
          handleFilter(initialState);
          setFilter(initialState);
        }}
      >
        Clear
      </Button>
    </Wrapper>
  );
};

RoomsFilter.propTypes = {
  handleFilter: PropTyped.func.isRequired,
};

export default RoomsFilter;
