import styled from 'styled-components';

export const BannerWrapper = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: url(${props => props.img});
  background-size: cover;
  background-position: center;
`;

export const BannerTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 100;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 3rem;
  text-align: center;
`;

export const BannerDescription = styled.p`
  text-align: center;
  font-size: 1.4rem;
  margin-bottom: 5rem;
`;
export const BannerButton = styled.a`
  text-align: center;
  font-size: 1.4rem;
  min-width: 150px;
  color: #fff;
  background: #222;
  outline: 0;
  border: 0;
  cursor: pointer;
  border-radius: 90px;
  padding: 1rem 2rem;
`;
