import React from 'react';
import {
  FeatureItemWrapper,
  FeatureItemImg,
  FeatureItemTitle,
  FeatureItemText,
} from './FeatureItem.style';

const FeatureItem = ({ img, title, text }) => (
  <FeatureItemWrapper>
    <FeatureItemImg src={img} alt="404" />
    <FeatureItemTitle>{title}</FeatureItemTitle>
    <FeatureItemText>{text}</FeatureItemText>
  </FeatureItemWrapper>
);

export default FeatureItem;
