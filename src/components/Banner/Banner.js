import React from 'react';
import bannerImg from '../../assets/shutterstock_638700166.png';
import {
  BannerDescription,
  BannerWrapper,
  BannerTitle,
  BannerButton,
} from './Banner.style';

const Banner = () => (
  <BannerWrapper img={bannerImg}>
    <BannerTitle>Tienda online</BannerTitle>
    <BannerDescription>
      Accede a los productos de belleza mas utilizados por profesionales
    </BannerDescription>
    <BannerButton>Compra ahora</BannerButton>
  </BannerWrapper>
);

export default Banner;
