import React from 'react';
import { SubTitle } from '../../styles/Shared';
import {
  ServiceCardWrapper,
  ServiceCardImg,
  ServiceCardBody,
  ServiceCardDescription,
  ServiceLink,
} from './ServiceCard.style';

const ServiceCard = ({ img, title, text }) => (
  <ServiceCardWrapper>
    <ServiceCardBody>
      <SubTitle className="card-title">{title}</SubTitle>
      <ServiceCardDescription className="card-text">
        {text}
      </ServiceCardDescription>
      <ServiceLink className="card-link">Contratar</ServiceLink>
    </ServiceCardBody>
    <ServiceCardImg src={img} className="card-img" />
  </ServiceCardWrapper>
);

export default ServiceCard;
