import React from 'react';
import {
  FooterWrapper,
  FooterItem,
  FooterItemTitle,
  FooterListItem,
  FooterListItems,
  AppImg,
  SocialNetowrkContainer,
  SocialNetworkItem,
  FooterSection,
  WrapperFooter,
  Input,
  InputButton,
  CreditCardImg,
} from './Footer.style';
import { WrapperContent } from '../../styles/Shared';
import googlePlay from '../../assets/google-play.png';
import appStore from '../../assets/apple_market.png';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import creditCard from '../../assets/Rectangle 78.png';
import creditCard2 from '../../assets/Rectangle 83.png';

const Footer = () => (
  <FooterWrapper>
    <WrapperContent>
      <FooterItem>
        <FooterItemTitle>App</FooterItemTitle>
        <FooterListItems>
          <AppImg src={googlePlay} />
          <AppImg src={appStore} />
        </FooterListItems>
      </FooterItem>
      <FooterItem>
        <FooterItemTitle>Tienda</FooterItemTitle>
        <FooterListItems>
          <FooterListItem>Servicios</FooterListItem>
          <FooterListItem>Productos</FooterListItem>
          <FooterListItem>Bodas</FooterListItem>
          <FooterListItem>Estilos</FooterListItem>
          <FooterListItem>Locales Bellify</FooterListItem>
          <FooterListItem>Zonas Bellify</FooterListItem>
        </FooterListItems>
      </FooterItem>
      <FooterItem>
        <FooterItemTitle>Sobre Bellify</FooterItemTitle>
        <FooterListItems>
          <FooterListItem>Nuestro equipo</FooterListItem>
          <FooterListItem>Partners</FooterListItem>
          <FooterListItem>Blog</FooterListItem>
          <FooterListItem>Reviews</FooterListItem>
          <FooterListItem>Prensa y medios</FooterListItem>
          <FooterListItem>Unete a nosotros</FooterListItem>
        </FooterListItems>
      </FooterItem>
      <FooterItem>
        <FooterItemTitle>Ayuda</FooterItemTitle>
        <FooterListItems>
          <FooterListItem>FAQ</FooterListItem>
          <FooterListItem>Terminos y condiciones</FooterListItem>
          <FooterListItem>Privacidad</FooterListItem>
          <FooterListItem>Contacto</FooterListItem>
        </FooterListItems>
      </FooterItem>
      <FooterItem>
        <FooterItemTitle>Siguenos</FooterItemTitle>
        <FooterListItems>
          <SocialNetowrkContainer>
            <SocialNetworkItem src={facebook} />
            <SocialNetworkItem src={twitter} />
            <SocialNetworkItem src={instagram} />
          </SocialNetowrkContainer>
        </FooterListItems>
      </FooterItem>
    </WrapperContent>
    <FooterSection>
      <WrapperFooter>
        <FooterItemTitle>Wrapper</FooterItemTitle>
        <Input placeholder="Nombre" />
        <Input placeholder="Correo electronico" />
        <InputButton> &rarr;</InputButton>
      </WrapperFooter>
      <WrapperFooter right>
        <CreditCardImg src={creditCard} />
        <CreditCardImg src={creditCard} />
        <CreditCardImg src={creditCard} />
        <CreditCardImg src={creditCard2} />
      </WrapperFooter>
    </FooterSection>
  </FooterWrapper>
);

export default Footer;
