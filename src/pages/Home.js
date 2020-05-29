import React from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import heroImg from '../assets/19ALBC0079.png';
import BookBar from '../components/BookBar/BookBar';
import Banner from '../components/Banner/Banner';
import { Postion } from '../styles/Shared';
import HomeServices from '../components/HomeServices/HomeServices';
import TopProducts from '../components/TopProducts/TopProducts';
import Blog from '../components/Blog/Blog';

const Home = () => (
  <Layout>
    <Hero
      img={heroImg}
      title="tu asesor de belleza a domicilio"
      description="Servicios de peluqueria, maquillaje, unas y estetica. tu asesor de belleza a domicilio"
    />
    <BookBar />
    <Banner />
    <HomeServices />
    <TopProducts />
    <Blog />
  </Layout>
);

export default Home;
