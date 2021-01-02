import React from 'react';
import RoomsCarouselTemplate from '../templates/RoomsCarouselTemplate';
import CarouselRoomCard from '../components/molecules/CarouselRoomCard/CarouselRoomCard';
import RoomInfoTemplate from '../templates/RoomInfoTemplate';

const Room = () => (
  <>
    <RoomInfoTemplate
      title="Economy plus"
      area="0,90 m2"
      dimensions="90x100x180 cm"
      furnishings={{
        bed: false,
        scratchingPost: false,
        catHouse: false,
        gameRoom: false,
      }}
      price="20$"
      images={[
        'https://geniusvets.s3.amazonaws.com/gv-blog/2019/2/Loving%20your%20pet%20blog%202.jpg',
        'https://s3.amazonaws.com/bpwp/wp-content/uploads/2019/10/27182653/17.jpg',
        'https://moderncat-wpengine.netdna-ssl.com/wp-content/uploads/2014/08/willian-justen-de-vasconcellos-1237303-unsplash.jpg',
      ]}
    />

    <RoomsCarouselTemplate title="Other rooms">

      <CarouselRoomCard
        area="0,90 m2"
        image="https://i.pinimg.com/originals/cc/ef/d3/ccefd383260251354a86612682772f14.jpg"
        dimensions="90x100x180 cm"
        price="20$"
        title="Economy plus"
      />

      <CarouselRoomCard
        area="0,90 m2"
        image="https://i.pinimg.com/originals/cc/ef/d3/ccefd383260251354a86612682772f14.jpg"
        dimensions="90x100x180 cm"
        price="20$"
        title="Economy plus"
      />

      <CarouselRoomCard
        area="0,90 m2"
        image="https://i.pinimg.com/originals/cc/ef/d3/ccefd383260251354a86612682772f14.jpg"
        dimensions="90x100x180 cm"
        price="20$"
        title="Economy plus"
      />

    </RoomsCarouselTemplate>
  </>
);

export default Room;
