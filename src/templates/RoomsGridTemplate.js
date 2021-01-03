import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Heading from '../components/atoms/Heading/Heading';
import RoomCard from '../components/molecules/RoomCard/RoomCard';
import RoomsFilter from '../components/organisms/RoomsFilter/RoomsFilter';
import { Rooms } from '../data/data';
import Button from '../components/atoms/Button/Button';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Modal from '../components/organisms/Modal/Modal';

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  padding: 4rem 1.5rem 2rem;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    padding: 5rem 4.5rem 2rem ;
  }
`;

const ContentContainer = styled.div`
  display: flex;
	flex-direction: column;
	align-items: flex-start;
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  gap: 3rem;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and ${({ theme }) => theme.viewPorts.viewport12} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const FilterWrapper = styled.div`
  grid-column: 1/2;
  grid-row: 1/3;
  display: none;

  @media screen and ${({ theme }) => theme.viewPorts.viewport12} {
    display: block;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2rem;

  @media screen and ${({ theme }) => theme.viewPorts.viewport4} {
    margin-bottom: 4rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: 4rem;
  padding-right: 20rem;
  
  @media screen and ${({ theme }) => theme.viewPorts.viewport4} {
    margin-top: 0;
    width: auto;
  }

  @media screen and ${({ theme }) => theme.viewPorts.viewport12} {
    height: 100%;
  }
`;

const StyledSortButton = styled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: ${({ theme }) => theme.background};
  padding: 1rem 2rem;
  width: 18rem;
  transition: all 0.3s;
  border-radius: 2rem;
  
  ::after {
    border-radius: 2rem;
  }

  ${({ isOpen }) => isOpen && css`
    border-radius: 1rem;
    pointer-events: none;
    
    ::after {
      border-radius: 1rem;
    }
  `}
`;

const StyledFilterButton = styled(Button)`
  display: block;
  text-align: left;
  border: none;
  background-color: ${({ theme }) => theme.background};
  background-image: url("data:image/svg+xml,%3Csvg 
  width='12' 
  height='15' 
  viewBox='0 0 12 15' 
  fill='${({ theme }) => (theme.primary)}' 
  xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 8.68421L0 1.57895V0H12V1.57895L7.5 8.68421V13.4211L4.5 15V8.68421Z' 
  /%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: center left 2rem;
  background-size: 1.2rem;
  padding: 1rem 2rem 1rem 4rem;

  @media screen and ${({ theme }) => theme.viewPorts.viewport12} {
    display: none;
  }
`;

const StyledParagraph = styled(Paragraph)`
  pointer-events: auto;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  :last-of-type {
    margin-bottom: 0;
  }

  ::before {
    content: '';
    display: inline-block;
    height: 1.5rem;
    width: 1.5rem;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg 
    width='7' 
    height='12' 
    viewBox='0 0 7 12' 
    fill='none' 
    xmlns='http://www.w3.org/2000/svg'%3E%3Cpath 
    d='M3.5 1L1 3.35294M3.5 1L6 3.35294M3.5 1V11' 
    stroke='${({ theme }) => (theme.primary)}'
    stroke-linecap='round' 
    stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    background-position: center;
    transform: rotate(${({ reverse }) => reverse && '180deg'});
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 2rem;
  display: block;
  width: 1.4rem;
  height: 1.4rem;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("data:image/svg+xml,%3Csvg 
    width='14' 
    height='8' 
    viewBox='0 0 14 8' 
    fill='none' 
    xmlns='http://www.w3.org/2000/svg'%3E%3Cpath 
    d='M1 1L7 7L13 1' 
    stroke='${({ theme }) => (theme.primary)}' 
    stroke-width='2' 
    stroke-linecap='round' 
    stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  transform: rotate(${({ isOpen }) => isOpen && '-180deg'});
  pointer-events: auto;
  transition: all 0.3s;
  
  :focus,
  :hover {
    outline: none;
  }
`;

const compareNumbers = (a, b) => a - b;

const RoomsGridTemplate = () => {
  const [sortingMethod, setSortingMethod] = useState('price');
  const [isSortingOpen, setIsSortingOpen] = useState(false);
  const [isFilterShown, setIsFilterShown] = useState(false);
  const [roomsArray, setRoomsArray] = useState(Rooms);

  const filterRooms = (params) => {
    const priceFrom = params.priceFrom === '' ? 0 : params.priceFrom;
    const priceTo = params.priceTo === '' ? 9999 : params.priceTo;

    setRoomsArray(
      Rooms.filter((i) => ((i.price >= priceFrom)
        && (i.price <= priceTo)
        && ((params.empty
          && !i.furnishings.bed
          && !i.furnishings.catHouse
          && !i.furnishings.scratchingPost
          && !i.furnishings.gameRoom)
        || (params.bed && i.furnishings.bed)
        || (params.gameRoom && i.furnishings.gameRoom)
        || (params.scratchingPost && i.furnishings.scratchingPost)
        || (params.catHouse && i.furnishings.catHouse)
        )
      )),
    );
  };

  const SortedRooms = () => {
    switch (sortingMethod) {
      case 'area': {
        return roomsArray.sort((a, b) => compareNumbers((a.area), (b.area)));
      }
      case 'areaReverse': {
        return roomsArray.sort((a, b) => compareNumbers((b.area), (a.area)));
      }
      case 'price': {
        return roomsArray.sort((a, b) => compareNumbers((a.price), (b.price)));
      }
      case 'priceReverse': {
        return roomsArray.sort((a, b) => compareNumbers((b.price), (a.price)));
      }
      default: return roomsArray.sort((a, b) => compareNumbers((a.price), (b.price)));
    }
  };

  return (
    <Wrapper>
      <Modal handleClose={() => setIsFilterShown(false)} isShown={isFilterShown}>
        <RoomsFilter handleFilter={filterRooms} />
      </Modal>
      <ContentContainer>
        <Header>
          <Heading>Our rooms</Heading>
          <ButtonsContainer>
            <StyledFilterButton onClick={() => setIsFilterShown(true)}>Filter</StyledFilterButton>
            <StyledSortButton
              isOpen={isSortingOpen}
              onClick={() => (isSortingOpen ? null : setIsSortingOpen(true))}
            >
              <Arrow
                isOpen={isSortingOpen}
                onClick={() => setIsSortingOpen(false)}
              />

              {(isSortingOpen || sortingMethod === 'price')
              && (
                <StyledParagraph
                  onClick={() => setSortingMethod('price')}
                >
                  Price
                </StyledParagraph>
              )}
              {(isSortingOpen || sortingMethod === 'priceReverse')
              && (
                <StyledParagraph
                  reverse
                  onClick={() => setSortingMethod('priceReverse')}
                >
                  Price
                </StyledParagraph>
              )}
              {(isSortingOpen || sortingMethod === 'area')
              && (
                <StyledParagraph
                  onClick={() => setSortingMethod('area')}
                >
                  Area
                </StyledParagraph>
              )}
              {(isSortingOpen || sortingMethod === 'areaReverse')
              && (
                <StyledParagraph
                  reverse
                  onClick={() => setSortingMethod('areaReverse')}
                >
                  Area
                </StyledParagraph>
              )}
            </StyledSortButton>
          </ButtonsContainer>
        </Header>

        <CardsGrid>
          <FilterWrapper>
            <RoomsFilter handleFilter={filterRooms} />
          </FilterWrapper>
          {SortedRooms().map((i) => (
            <RoomCard
              key={i.id}
              title={i.title}
              dimensions={i.dimension}
              image={i.images[0]}
              price={i.price}
              area={i.area}
              furnishings={i.furnishings}
            />
          ))}
        </CardsGrid>
      </ContentContainer>
    </Wrapper>
  );
};

export default RoomsGridTemplate;
