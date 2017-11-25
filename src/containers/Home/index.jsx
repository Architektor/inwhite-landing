import React from 'react';

import { HomeSection, HomeBackground, Slogan, LogoContainer, Logo } from './styled';
import Header from './Header';

import homeBackground from '../../assets/home-background.png';
import logo from '../../assets/logo.svg';

const Home = () => (
  <HomeSection>
    <HomeBackground src={homeBackground} />
    <Header />
    <LogoContainer>
      <Logo src={logo} />
      <Slogan>
        Никакой воды. Чисто Цифры.
      </Slogan>
    </LogoContainer>
  </HomeSection>
);

export default Home;
