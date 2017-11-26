import React from 'react';
import PropTypes from 'prop-types';

import {
  ServicesSection,
  ServicesHeader,
  ServicesCopy,
  ServicesContent,
  ServicesStatueContainer,
  ServicesStatue,
  List,
  ListHeader,
  ListItem,
  Button,
} from './styled';

import servicesStatue from '../../assets/services-statue.svg';

import { servicesSectionName, CTAcopy } from '../../config/materials';

const Services = ({ onCTAClick }) => (
  <ServicesSection>
    <ServicesHeader> 
      <ServicesCopy>
        {servicesSectionName}
      </ServicesCopy>
    </ServicesHeader>
    <ServicesContent>
      <ServicesStatueContainer>
      <ServicesStatue src={servicesStatue} />
      <List name="mediaService">
        <ListHeader>
          Медийный сервис:
        </ListHeader>
        <ListItem>Performace-маркетинг</ListItem>
        <ListItem>Имиджевая кампания</ListItem>
        <ListItem>Видео-реклама</ListItem>
        <ListItem>Продвижение в поисковых системах (SEO)</ListItem>
        <ListItem>Контекстная и таргетированная реклама</ListItem>
      </List>
      <List name="pr">
        <ListHeader>
          PR:
        </ListHeader>
        <ListItem>Управление репутацией (SERM)</ListItem>
        <ListItem>Написание и размещение статей</ListItem>
        <ListItem>Работа с лидерами мнений</ListItem>
      </List>
      <List name="strategy">
        <ListHeader>
          Стратегия:
        </ListHeader>
        <ListItem>Коммуникационная стратегия</ListItem>
        <ListItem>Медийная стратегия</ListItem>
        <ListItem>SMM-стратегия</ListItem>
        <ListItem>Комплексная digital-стратегия</ListItem>
      </List>
      <List name="creativity">
        <ListHeader>
          Креатив:
        </ListHeader>
        <ListItem>Креативные концепции</ListItem>
        <ListItem>Спецпроекты</ListItem>
        <ListItem>Интегрированные кампании</ListItem>
        <ListItem>Дизайн</ListItem>
        <ListItem>Фирменный стиль</ListItem>
      </List>
      <List name="analysys">
        <ListHeader>
          Анализ:
        </ListHeader>
        <ListItem>Анализ конкурентов</ListItem>
        <ListItem>Анализ аудитории</ListItem>
        <ListItem>Post-campaign аналитика</ListItem>
        <ListItem>Аудит сайта</ListItem>
        <ListItem>Настройка аналитических сервисов</ListItem>
      </List>
      <List name="smm">
        <ListHeader>
          SMM:
        </ListHeader>
        <ListItem>Продвижение в социальных медия</ListItem>
        <ListItem>Продвижение сообществ</ListItem>
        <ListItem>Мониторинг и аналитика</ListItem>
        <ListItem>Продвижение личного бренда</ListItem>
      </List>
      <List name="production">
        <ListHeader>
          Production
        </ListHeader>
        <ListItem>Web-разработка</ListItem>
        <ListItem>Promo - видео</ListItem>
        <ListItem>Promo - фото</ListItem>
      </List>
      <Button onClick={onCTAClick}>
        {CTAcopy}
      </Button>
      </ServicesStatueContainer>
    </ServicesContent>
  </ServicesSection>
);

Services.propTypes = {
  onCTAClick: PropTypes.func.isRequired,
};

export default Services;
