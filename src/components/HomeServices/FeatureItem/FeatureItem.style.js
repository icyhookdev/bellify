import styled from 'styled-components';

export const FeatureItemWrapper = styled.div`
  width: 300px;
  min-height: 300px;
  margin-right: 2rem;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
export const FeatureItemTitle = styled.h3`
  font-size: 1.6rem;
  text-align: center;
  font-weight: 100;
  margin: 2.5rem 0 2rem;
`;

export const FeatureItemImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  object-position: center;
`;
export const FeatureItemText = styled.p`
  font-size: 1.3rem;
  text-align: center;
`;
