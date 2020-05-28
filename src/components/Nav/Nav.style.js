import styled from 'styled-components';

export const NavWrapper = styled.nav`
  width: 100%;
  background: #333;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const NavItems = styled.ul`
  width: fit-content;
  display: flex;
  padding: 0;
  list-style: none;
  align-items: center;
  margin: 0;
`;

export const NavItem = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  height: 60px;
  font-size: 1.5rem;
  padding: 0 2rem;
  transition: ease all 0.3s;
  :hover {
    background: #877a94;
  }
`;
