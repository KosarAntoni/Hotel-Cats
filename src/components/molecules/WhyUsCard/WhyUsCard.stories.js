import React from 'react';
import WhyUsCard from './WhyUsCard';
import catWalk from '../../../assets/icons/whyUs/catWalk.svg';
import cure from '../../../assets/icons/whyUs/cure.svg';
import meal from '../../../assets/icons/whyUs/meal.svg';
import taxi from '../../../assets/icons/whyUs/taxi.svg';
import temperature from '../../../assets/icons/whyUs/temperature.svg';
// import video from '../../../assets/icons/whyUs/video.svg';

export default {
  title: 'Molecules/WhyUsCard',
  component: WhyUsCard,
};

export const Temperature = () => (
  <WhyUsCard
    icon={temperature}
    title="Comfortable temperature"
    content={'All rooms maintain a comfortable temperature within\n'
+ '23 - 25 degrees. In each room, you can additionally adjust the temperature.'}
  />
);

export const Video = () => (
  <WhyUsCard
    icon={temperature}
    title="Video surveillance"
    content="We provide access to our system. You will be able to follow follow your pet from your smartphone or computer."
  />
);

export const Taxi = () => (
  <WhyUsCard
    icon={taxi}
    title="Zootaxi"
    content="Мы приедем за вашим питомцем в любой район Санкт-Петербурга."
  />
);

export const Meal = () => (
  <WhyUsCard
    icon={meal}
    title="Balanced diet"
    content="You can bring your food or entrust your diet pet to our professionals."
  />
);

export const Walk = () => (
  <WhyUsCard
    icon={catWalk}
    title="Daily walks"
    content="At your request, we take your pet for a walk twice a day in a specialized closed area."
  />
);

export const Cure = () => (
  <WhyUsCard
    icon={cure}
    title="Best Veterinarians"
    content="A veterinarian is on duty 24 hours at the hotel, who will provide any assistance if necessary."
  />
);
