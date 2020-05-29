import React from 'react';
import { BannerDescription } from '../Banner/Banner.style';
import {
  HomeServicesWrapper,
  ServiceTitle,
  FeaturesContainer,
  ServiceCards,
  MainCard,
  MainCardImg,
  MainCardContent,
} from './HomeServices.style';
import FeatureItem from './FeatureItem/FeatureItem';

import handIcon from '../../assets/Group 96.png';
import mapIcon from '../../assets/Group 107.png';
import faceIcon from '../../assets/Group 111.png';
import ServiceCard from '../ServiceCard/ServiceCard';
import servicePhoto from '../../assets/photo-1498842812179-c81beecf902c.png';
import wedingImg from '../../assets/19ALBC0373.png';
import { SubTitle } from '../../styles/Shared';
import {
  ServiceCardDescription,
  ServiceLink,
} from '../ServiceCard/ServiceCard.style';

const servicesData = [
  {
    img: servicePhoto,
    title: 'peluqueria',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore veritatis quaerat, incidunt eaque cupiditate quos magnam ullam',
  },
  {
    img: servicePhoto,
    title: 'peluqueria',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore veritatis quaerat, incidunt eaque cupiditate quos magnam ullam',
  },
  {
    img: servicePhoto,
    title: 'unas',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore veritatis quaerat, incidunt eaque cupiditate quos magnam ullam',
  },
  {
    img: servicePhoto,
    title: 'estetica',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore veritatis quaerat, incidunt eaque cupiditate quos magnam ullam',
  },
  {
    img: servicePhoto,
    title: 'grupos',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore veritatis quaerat, incidunt eaque cupiditate quos magnam ullam',
  },
  {
    img: servicePhoto,
    title: 'paquetes',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore veritatis quaerat, incidunt eaque cupiditate quos magnam ullam',
  },
];

const HomeServices = () => (
  <HomeServicesWrapper>
    <ServiceTitle>Servicios</ServiceTitle>
    <BannerDescription>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
      veritatis quaerat.
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
    <ServiceCards>
      {servicesData.map((service, i) => (
        <ServiceCard
          key={i}
          img={service.img}
          text={service.text}
          title={service.title}
        />
      ))}
    </ServiceCards>
    <MainCard>
      <MainCardImg src={wedingImg} />
      <MainCardContent>
        <SubTitle>Bodas</SubTitle>
        <ServiceCardDescription>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          veritatis quaerat, incidunt eaque cupiditate quos magnam ullam
        </ServiceCardDescription>
        <ServiceLink>Contratar</ServiceLink>
      </MainCardContent>
    </MainCard>
  </HomeServicesWrapper>
);
export default HomeServices;
