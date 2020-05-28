import styled from 'styled-components';

export const HeroWrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 6rem;
  background: url(${props => props.img});
  background-position: center;
`;

export const HeroContent = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const HeroTitle = styled.h1`
  font-size: 2.2rem;
  font-family: initial;
  font-weight: 100;
  text-transform: uppercase;
  width: 100%;
  color: #fff;
  margin-bottom: 3rem;
  @media screen and (min-width: 414px) {
    font-size: 4.4rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.4rem;
  color: #fff;
  width: 100%;
`;
