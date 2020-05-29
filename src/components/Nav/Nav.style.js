import styled from 'styled-components';

export const NavWrapper = styled.nav`
  width: 100%;
  background: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
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
export const NavDropdown = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  height: 60px;
  position: relative;
  font-size: 1.5rem;
  padding: 0 2rem;
  transition: ease all 0.3s;
  :hover .dropdown {
    display: block;
    opacity: 1;
  }
`;

export const Text = styled.div`
  display: flex;
`;

export const Name = styled.div`
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  margin-right: 1rem;
`;

export const NavDropdownContent = styled.div`
  width: 100%;
  position: absolute;
  display: none;
  min-height: 50px;
  background: #333;
  top: 62px;
  left: 0;
  opacity: 0;
  transition: ease all 0.3s;
  :hover {
    display: block;
  }
`;
