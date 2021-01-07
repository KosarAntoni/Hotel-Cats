import React from 'react';
import PropTypes from 'prop-types';
import RoomsCarouselTemplate from '../templates/RoomsCarouselTemplate';
import CarouselRoomCard from '../components/molecules/CarouselRoomCard/CarouselRoomCard';
import RoomInfoTemplate from '../templates/RoomInfoTemplate';
import { Rooms } from '../data/data';
import Contacts from '../components/organisms/Contacts/Contacts';
import Footer from '../components/organisms/Footer/Footer';

const Room = ({ match }) => {
  const { id } = match.params;
  const [data] = Rooms.filter((i) => i.id === +id);

  return (
    <>
      <RoomInfoTemplate
        title={data.title}
        area={data.area}
        dimensions={data.dimension}
        furnishings={data.furnishings}
        price={data.price}
        images={data.images}
      />

      <RoomsCarouselTemplate title="Other rooms">

        {Rooms.map((i) => (
          i.isInCarousel
            ? (
              <CarouselRoomCard
                id={i.id}
                key={i.id}
                area={i.area}
                image={i.images[0]}
                dimensions={i.dimension}
                price={i.price}
                title={i.title}
              />
            ) : null
        ))}

      </RoomsCarouselTemplate>

      <Contacts />
      <Footer />
    </>
  );
};

Room.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Room;
