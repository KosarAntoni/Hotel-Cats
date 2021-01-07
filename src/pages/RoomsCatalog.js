import React from 'react';
import styled from 'styled-components';
import RoomsGridTemplate from '../templates/RoomsGridTemplate';
import Banner from '../components/organisms/Banner/Banner';
import Contacts from '../components/organisms/Contacts/Contacts';
import Footer from '../components/organisms/Footer/Footer';

const BannerWrapper = styled.div`
  margin: 5rem 1.5rem 0;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    margin: 12rem 4.5rem 0;
  }
`;

const RoomsCatalog = () => (
  <>
    <RoomsGridTemplate />
    <BannerWrapper>
      <Banner />
    </BannerWrapper>
    <Contacts />
    <Footer />
  </>
);

export default RoomsCatalog;
