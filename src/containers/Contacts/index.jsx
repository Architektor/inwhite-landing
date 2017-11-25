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

import { address, socialLinks, phoneNumber, emailAddress } from '../../config/materials';

const Contacts = () => (
  <ContactsSection>
    <Map src={map} />
    <ContactsBlock src={contactsBlock} />
    <ContactsInfo>
      <Icon src={geolocation} />
      <Address>
        г. {address.city}, м. {address.metroStation}<br />
        ул {address.street}<br />
        д. {address.houseNumber}, {address.additionalString} 
      </Address>
      <Separator />
      <Icon src={phoneBigIcon} /> 
      <PhoneNumber href={`tel:${phoneNumber.replace(/\s*\)*\(*/g, '')}`}>
        {phoneNumber}
      </PhoneNumber>
      <Icon src={mailIcon} />
      <Mail href={`mailto:${emailAddress}`}>
        {emailAddress}
      </Mail>
      <Separator />
      <SocialBlock>
        <a href={socialLinks.vkLink}>
          <Icon src={vkIcon} />
        </a>
        <a href={socialLinks.instagramLink}>
          <Icon src={instagramIcon} />
        </a>
        <a href={socialLinks.facebookLink}>
          <Icon src={facebookIcon} />
        </a>
      </SocialBlock>
    </ContactsInfo>
  </ContactsSection>
);

export default Contacts;
