import React from 'react';
import IconBackground from './IconBackground';
import catWalk from '../../../assets/icons/whyUs/catWalk.svg';
import cure from '../../../assets/icons/whyUs/cure.svg';
import meal from '../../../assets/icons/whyUs/meal.svg';
import taxi from '../../../assets/icons/whyUs/taxi.svg';
import temperature from '../../../assets/icons/whyUs/temperature.svg';
import video from '../../../assets/icons/whyUs/video.svg';

export default {
  title: 'Atoms/IconBackground',
  component: IconBackground,
};

export const CatWalk = () => <IconBackground icon={catWalk} />;
export const Meal = () => <IconBackground icon={meal} />;
export const Cure = () => <IconBackground icon={cure} />;
export const Taxi = () => <IconBackground icon={taxi} />;
export const Temperature = () => <IconBackground icon={temperature} />;
export const Video = () => <IconBackground icon={video} />;
