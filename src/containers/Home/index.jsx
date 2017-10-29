import React from 'react';
import PropTypes from 'prop-types';

import { HomeSection, HomeBackground, HomeStatue, Slogan, LogoContainer, Logo } from './styled';
import Header from './Header';

import homeBackground from '../../assets/home-background.png';
import homeStatue from '../../assets/home-statue.svg';
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

Home.propTypes = {

};

export default Home;
