import React from 'react';
import MainBanner from '../components/organisms/MainBanner/MainBanner';
import WhyUsTemplate from '../templates/WhyUsTemplate';
import WhyUsCard from '../components/molecules/WhyUsCard/WhyUsCard';
import taxi from '../assets/icons/whyUs/taxi.svg';
import video from '../assets/icons/whyUs/video.svg';
import meal from '../assets/icons/whyUs/meal.svg';
import catWalk from '../assets/icons/whyUs/catWalk.svg';
import cure from '../assets/icons/whyUs/cure.svg';
import temperature from '../assets/icons/whyUs/temperature.svg';
import TestimonialCard from '../components/molecules/TestimonialCard/TestimonialCard';
import TestimonialsCarouselTemplate from '../templates/TestimonialsCarouselTemplate';
import RoomsCarouselTemplate from '../templates/RoomsCarouselTemplate';
import CarouselRoomCard from '../components/molecules/CarouselRoomCard/CarouselRoomCard';
import { Testimonials, Rooms } from '../data/data';
import Contacts from '../components/organisms/Contacts/Contacts';
import Footer from '../components/organisms/Footer/Footer';

const Home = () => (
  <>
    <MainBanner />
    <WhyUsTemplate title="Why us?">
      <WhyUsCard
        icon={temperature}
        title="Comfortable temperature"
        content={'All rooms maintain a comfortable temperature within\n'
			+ '23 - 25 degrees. In each room, you can additionally adjust the temperature.'}
      />
      <WhyUsCard
        icon={video}
        title="Video surveillance"
        content="We provide access to our system. You will be able to follow follow your pet from your smartphone or computer."
      />
      <WhyUsCard
        icon={meal}
        title="Balanced diet"
        content="You can bring your food or entrust your diet pet to our professionals."
      />
      <WhyUsCard
        icon={catWalk}
        title="Daily walks"
        content="At your request, we take your pet for a walk twice a day in a specialized closed area."
      />
      <WhyUsCard
        icon={cure}
        title="Best Veterinarians"
        content="A veterinarian is on duty 24 hours at the hotel, who will provide any assistance if necessary."
      />
      <WhyUsCard
        icon={taxi}
        title="Zootaxi"
        content="We will come to pick up your pet anywhere in St. Petersburg."
      />
    </WhyUsTemplate>

    <RoomsCarouselTemplate title="Rooms">

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

    <TestimonialsCarouselTemplate title="Testimonials">
      {Testimonials.map((i) => (
        <TestimonialCard
          key={i.id}
          date={i.date}
          content={i.content}
          name={i.name}
        />
      ))}
    </TestimonialsCarouselTemplate>

    <Contacts />
    <Footer />
  </>
);
export default Home;
