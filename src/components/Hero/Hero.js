import React from 'react';
import {
  HeroWrapper,
  HeroContent,
  HeroTitle,
  HeroDescription,
} from './Hero.style';

const Hero = ({ img, title, description }) => (
  <HeroWrapper img={img}>
    <HeroContent>
      <HeroTitle>{title}</HeroTitle>
      <HeroDescription>{description}</HeroDescription>
    </HeroContent>
  </HeroWrapper>
);

export default Hero;
