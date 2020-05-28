import React from 'react';
import { NavWrapper, NavItems, NavItem } from './Nav.style';
import Logo from '../Logo/Logo';

const Nav = () => (
  <NavWrapper>
    <Logo />
    <NavItems>
      <NavItem href="/">Productos</NavItem>
      <NavItem href="/">Bodas</NavItem>
      <NavItem href="/">Estilos</NavItem>
      <NavItem href="/">Blog</NavItem>
    </NavItems>
    <NavItems>
      <NavItem href="/">Iniciar session</NavItem>
      <NavItem href="/">Reserva</NavItem>
      <NavItem href="/">icon</NavItem>
      <NavItem href="/">icons</NavItem>
    </NavItems>
  </NavWrapper>
);

export default Nav;
