import React from 'react';
import PropTypes from 'prop-types';

import { HeaderContainer, HeaderLinks, LogoMuted, Button, PhoneNumber, PhoneIcon, Number } from './styled';
import logoMuted from '../../assets/logo-muted.png';
import phoneIcon from '../../assets/phone-icon.png';

const Header = () => (
  <HeaderContainer>
    <LogoMuted src={logoMuted} />
    <HeaderLinks>
      <Button>
        Портфолио
      </Button>
      <Button black>
        Услуги
      </Button>
      <Button>
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

Header.propTypes = {

};

export default Header;
