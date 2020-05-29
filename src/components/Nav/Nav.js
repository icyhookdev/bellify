import React from 'react';
import {
  NavWrapper,
  NavItems,
  NavItem,
  Text,
  NavDropdown,
  Name,
  NavDropdownContent,
} from './Nav.style';
import Logo from '../Logo/Logo';
import { IconItem, IconCarret } from '../BookBar/BookBarItem/BookBarItem.style';
import heart from '../../assets/Group 63.svg';
import shop from '../../assets/Group 66.svg';

const Nav = () => (
  <NavWrapper>
    <Logo />
    <NavItems>
      <NavDropdown>
        <Text>
          <Name>Servicios</Name>
          <IconCarret />
        </Text>
        <NavDropdownContent className="dropdown">
          <NavItem href="/">Peluqueria</NavItem>
          <NavItem href="/">Maquillaje</NavItem>
          <NavItem href="/">Unas</NavItem>
          <NavItem href="/">Estetica</NavItem>
        </NavDropdownContent>
      </NavDropdown>
      <NavItem href="/">Productos</NavItem>
      <NavItem href="/">Bodas</NavItem>
      <NavItem href="/">Estilos</NavItem>
      <NavItem href="/">Blog</NavItem>
    </NavItems>
    <NavItems>
      <NavItem href="/">Iniciar session</NavItem>
      <NavItem href="/">Reserva</NavItem>
      <NavDropdown>
        <Text>
          <Name>ES</Name>
          <IconCarret />
        </Text>
        <NavDropdownContent className="dropdown">
          <NavItem href="/">ES</NavItem>
          <NavItem href="/">EN</NavItem>
        </NavDropdownContent>
      </NavDropdown>
      <NavItem href="/">
        <IconItem icon={heart} />
      </NavItem>
      <NavItem href="/">
        <IconItem icon={shop} />
      </NavItem>
    </NavItems>
  </NavWrapper>
);

export default Nav;
