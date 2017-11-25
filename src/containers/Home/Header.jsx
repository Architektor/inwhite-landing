import React from 'react';

import { HeaderContainer, HeaderLinks, LogoMuted, Button, PhoneNumber, PhoneIcon, Number } from './styled';
import logoMuted from '../../assets/logo-muted.png';
import phoneIcon from '../../assets/phone-icon.png';

function scrollTo(selector) {
  return () => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

const Header = () => (
  <HeaderContainer>
    <LogoMuted src={logoMuted} />
    <HeaderLinks>
      <Button onClick={scrollTo('#portfolio')}>
        Портфолио
      </Button>
      <Button black onClick={scrollTo('#services')}>
        Услуги
      </Button>
      <Button onClick={scrollTo('#contacts')}>
        Контакты
      </Button>
      <PhoneNumber>
        <PhoneIcon src={phoneIcon} />
        <Number href="tel:+79163292111">
          8 (916) 239-21-11
        </Number>
      </PhoneNumber>
    </HeaderLinks>
  </HeaderContainer>
);

export default Header;
