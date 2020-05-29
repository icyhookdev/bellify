import styled from 'styled-components';

export const TopProductCardWrapper = styled.div`
  width: 280px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
`;

export const TopProductCardImg = styled.img`
  width: 100%;
  height: 250px;
  object-position: center;
  object-fit: contain;
  background: #f2f2f2;
  padding: 2rem;
`;
export const TopProductCardBody = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TopProductCardName = styled.label`
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 1rem;
`;
export const TopProductCardPrice = styled.p`
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: bold;
`;
