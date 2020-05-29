import React from 'react';
import {
  TopProductCardWrapper,
  TopProductCardImg,
  TopProductCardBody,
  TopProductCardName,
  TopProductCardPrice,
} from './TopProductCard.style';

const TopProductCard = ({ img, name, price }) => (
  <TopProductCardWrapper>
    <TopProductCardImg src={img} />
    <TopProductCardBody>
      <TopProductCardName>{name}</TopProductCardName>
      <TopProductCardPrice>{price}</TopProductCardPrice>
    </TopProductCardBody>
  </TopProductCardWrapper>
);

export default TopProductCard;
