import React from 'react';

import {
  ContactsSection,
  Map,
  ContactsBlock,
  ContactsInfo,
  Icon,
  Separator,
  Address,
  PhoneNumber,
  Mail,
  SocialBlock,
} from './styled';

import map from '../../assets/map.svg';
import contactsBlock from '../../assets/contacts-block.svg';
import geolocation from '../../assets/geolocation.svg';
import phoneBigIcon from '../../assets/phone-big.svg';
import mailIcon from '../../assets/mail-icon.svg';
import vkIcon from '../../assets/vk-icon.png';
import instagramIcon from '../../assets/instagram-icon.png';
import facebookIcon from '../../assets/facebook-icon.png';

const Contacts = () => (
  <ContactsSection>
    <Map src={map} />
    <ContactsBlock src={contactsBlock} />
    <ContactsInfo>
      <Icon src={geolocation} />
      <Address>
        г. Москва, м. Героев Днепра<br />
        ул Степана Бандеры<br />
        д. 14, стр. 88, подьезд 1
      </Address>
      <Separator />
      <Icon src={phoneBigIcon} /> 
      <PhoneNumber href="tel:+790372814188">
        8 (903) 728-14-88
      </PhoneNumber>
      <Icon src={mailIcon} />
      <Mail href="mailto:adolf@hitler.ss">
        adolf@hitler.ss
      </Mail>
      <Separator />
      <SocialBlock>
        <Icon src={vkIcon} />
        <Icon src={instagramIcon} />
        <Icon src={facebookIcon} />
      </SocialBlock>
    </ContactsInfo>
  </ContactsSection>
);

export default Contacts;
