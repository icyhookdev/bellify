import styled from 'styled-components';

export const HomeServicesWrapper = styled.div`
  width: 100%;
  padding: 7rem 0 0.5rem;
  min-height: 100vh;
  background: #f2f2f2;
`;

export const ServiceTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 100;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-family: initial;
  color: #b9a9c9;
  margin-bottom: 3rem;
  text-align: center;
`;

export const FeaturesContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  padding: 7rem 0;
  justify-content: center;
`;

export const ServiceCards = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

export const MainCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  height: 400px;
  padding: 0 0.5rem;
`;

export const MainCardContent = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background: #fff;
  align-items: center;
  justify-content: center;
`;

export const MainCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
