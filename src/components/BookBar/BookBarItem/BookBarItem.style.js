import styled from 'styled-components';
import carretIcon from '../../../assets/carret.svg';

export const BookBarberItemWrapper = styled.div`
  width: 180px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background: #fff;
  border-right: 1px solid #ddd;
  > span {
    font-size: 1.5rem;
  }
`;

export const IconItem = styled.div`
  width: 20px;
  height: 20px;
  background: url(${props => props.icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const IconCarret = styled.div`
  width: 20px;
  cursor: pointer;
  height: 20px;
  background: url(${carretIcon});
  background-size: cover;
  background-size: center;
`;
