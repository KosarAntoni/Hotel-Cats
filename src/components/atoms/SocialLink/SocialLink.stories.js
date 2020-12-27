import React from 'react';
import SocialLink from './SocialLink';
import instagramIcon from '../../../assets/icons/socialIcons/inst.svg';
import facebookIcon from '../../../assets/icons/socialIcons/fb.svg';
import vkontakteIcon from '../../../assets/icons/socialIcons/vk.svg';

export default {
  title: 'Atoms/SocialLink',
  component: SocialLink,
};

export const Instagram = () => <SocialLink href="https://www.google.pl/" icon={instagramIcon} />;
export const Facebook = () => <SocialLink href="https://www.google.pl/" icon={facebookIcon} />;
export const Vkontakte = () => <SocialLink href="https://www.google.pl/" icon={vkontakteIcon} />;
