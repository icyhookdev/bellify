import React from 'react';
import { SubTitle, GlobalLink, WrapperContent } from '../../styles/Shared';
import { TopProductsWrapper } from './TopProducts.style';
import prod1 from '../../assets/71Lq91uym6L._SL1500_.png';
import prod2 from '../../assets/1791__55026_zoom.png';
import prod3 from '../../assets/00123416412171____6__516x640.png';
import prod4 from '../../assets/serum-stylista-sleek-anti-encrespamiento.png';
import TopProductCard from './TopProductCard/TopProductCard';

const products = [
  {
    img: prod1,
    name: 'lorem ipsum',
    price: '$25,00',
  },
  {
    img: prod2,
    name: 'lorem ipsum',
    price: '$25,00',
  },
  {
    img: prod3,
    name: 'lorem ipsum',
    price: '$25,00',
  },
  {
    img: prod4,
    name: 'lorem ipsum',
    price: '$25,00',
  },
];

const TopProducts = () => (
  <TopProductsWrapper>
    <SubTitle>productos destacados</SubTitle>
    <WrapperContent>
      {products.map((product, i) => (
        <TopProductCard
          key={i}
          img={product.img}
          name={product.name}
          price={product.price}
        />
      ))}
    </WrapperContent>
    <GlobalLink>ver mas</GlobalLink>
  </TopProductsWrapper>
);

export default TopProducts;
