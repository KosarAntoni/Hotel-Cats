import React from 'react';
import styled from 'styled-components';
import RoomsGridTemplate from '../templates/RoomsGridTemplate';
import Banner from '../components/organisms/Banner/Banner';

const BannerWrapper = styled.div`
  margin: 5rem 1.5rem 7rem;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    margin: 12rem 4.5rem 14rem;
  }
`;

const RoomsCatalog = () => (
  <>
    <RoomsGridTemplate />
    <BannerWrapper>
      <Banner />
    </BannerWrapper>
  </>
);

export default RoomsCatalog;
