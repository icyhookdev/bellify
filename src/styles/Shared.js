import styled from 'styled-components';

export const Postion = styled.div`
  position: relative;
`;

export const SubTitle = styled.h3`
  color: ${props => props.color || '#AB9ABC'};
  font-size: ${props => props.size || '1.8rem'};
  text-transform: uppercase;
  text-align: center;
  font-weight: 100;
  letter-spacing: 3px;
`;

export const GlobalLink = styled.a`
  background: #ab9abc;
  font-size: 1.4rem;
  color: #fff;
  min-width: 150px;
  text-align: center;
  border-radius: 90px;
  padding: 1rem 6rem;
  cursor: pointer;
`;

export const WrapperContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  margin-top: 4rem;
  display: flex;
  margin-bottom: 6rem;
`;

export const BubleButton = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  right: 20px;
  top: -30px;
  object-fit: cover;
  object-position: center;
`;
