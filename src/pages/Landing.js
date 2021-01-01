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

const Landing = () => (
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

    <TestimonialsCarouselTemplate title="Testimonials">

      <TestimonialCard
        date="1976-04-19T12:59-0500"
        content={'Friends recommended a hotel for pets. They always leave their cat here when they leave. Pets are very well taken care of in "Koteika", the hotel is very clean. I recommend to everyone! We will contact you again.'}
        name="Ekaterina Minaeva"
      />
      <TestimonialCard
        date="1976-04-19T12:59-0500"
        content={'Friends recommended a hotel for pets. They always leave their cat here when they leave. Pets are very well taken care of in "Koteika", the hotel is very clean. I recommend to everyone! We will contact you again.'}
        name="Ekaterina Minaeva"
      />
      <TestimonialCard
        date="1976-04-19T12:59-0500"
        content={'Friends recommended a hotel for pets. They always leave their cat here when they leave. Pets are very well taken care of in "Koteika", the hotel is very clean. I recommend to everyone! We will contact you again.'}
        name="Ekaterina Minaeva"
      />

    </TestimonialsCarouselTemplate>
  </>
);
export default Landing;
