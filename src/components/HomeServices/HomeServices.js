import React from 'react';
import { BannerDescription } from '../Banner/Banner.style';
import {
  HomeServicesWrapper,
  ServiceTitle,
  FeaturesContainer,
} from './HomeServices.style';
import FeatureItem from './FeatureItem/FeatureItem';

import handIcon from '../../assets/Group 96.png';
import mapIcon from '../../assets/Group 107.png';
import faceIcon from '../../assets/Group 111.png';

const HomeServices = () => (
  <HomeServicesWrapper>
    <ServiceTitle>Servicios</ServiceTitle>
    <BannerDescription>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
      veritatis quaerat, incidunt eaque cupiditate quos magnam ullam quibusdam
      obcaecati
    </BannerDescription>
    <FeaturesContainer>
      <FeatureItem
        img={handIcon}
        title="Tu belleza"
        text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
      veritatis quaerat, incidunt eaque cupiditate quos magnam ullam quibusdam
      obcaecati Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
      veritatis quaerat, incidunt eaque cupiditate quos magnam ullam quibusdam
      obcaecati"
      />
      <FeatureItem
        img={mapIcon}
        title="Tu disponibilidad y ubicacion"
        text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
      veritatis quaerat, incidunt eaque cupiditate quos magnam ullam quibusdam
      obcaecati Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
      veritatis quaerat, incidunt eaque cupiditate quos magnam ullam quibusdam
      obcaecati"
      />
      <FeatureItem
        img={faceIcon}
        title="Nuestros profesionales"
        text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
      veritatis quaerat, incidunt eaque cupiditate quos magnam ullam quibusdam
      obcaecati Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
      veritatis quaerat, incidunt eaque cupiditate quos magnam ullam quibusdam
      obcaecati"
      />
    </FeaturesContainer>
  </HomeServicesWrapper>
);
export default HomeServices;
