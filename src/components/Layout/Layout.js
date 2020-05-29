import React from 'react';
import PropTypes from 'prop-types';
import { LayoutWrapper, LayoutContent } from './Layout.style';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { Postion, BubleButton } from '../../styles/Shared';
import chat from '../../assets/chat.png';

const Layout = ({ children }) => (
  <LayoutWrapper>
    <Nav />
    <LayoutContent>{children}</LayoutContent>
    <Postion>
      <BubleButton src={chat} />
    </Postion>
    <Footer />
  </LayoutWrapper>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
