import React from 'react';
import PropTypes from 'prop-types';

import {
  ServicesSection,
  ServicesHeader,
  ServicesCopy,
  ServicesContent,
  ServicesStatue,
  List,
  ListHeader,
  ListItem,
  Button,
} from './styled';

import servicesStatue from '../../assets/services-statue.svg';

const Services = () => (
  <ServicesSection>
    <ServicesHeader> 
      <ServicesCopy>
        Услуги
      </ServicesCopy>
    </ServicesHeader>
    <ServicesContent>
      <ServicesStatue src={servicesStatue}>
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
        <ListItem>Коммуникационная стратегия</ListItem>
        <ListItem>Медийная стратегия</ListItem>
        <ListItem>SMM-стратегия</ListItem>
        <ListItem>Комплексная digital-стратегия</ListItem>
      </List>
      <List name="analysys">
        <ListHeader>
          Анализ:
        </ListHeader>
        <ListItem>Коммуникационная стратегия</ListItem>
        <ListItem>Медийная стратегия</ListItem>
        <ListItem>SMM-стратегия</ListItem>
        <ListItem>Комплексная digital-стратегия</ListItem>
      </List>
      <List name="smm">
        <ListHeader>
          SMM:
        </ListHeader>
        <ListItem>Коммуникационная стратегия</ListItem>
        <ListItem>Медийная стратегия</ListItem>
        <ListItem>SMM-стратегия</ListItem>
        <ListItem>Комплексная digital-стратегия</ListItem>
      </List>
      <List name="production">
        <ListHeader>
          Production
        </ListHeader>
        <ListItem>Коммуникационная стратегия</ListItem>
        <ListItem>Медийная стратегия</ListItem>
        <ListItem>SMM-стратегия</ListItem>
        <ListItem>Комплексная digital-стратегия</ListItem>
      </List>
      </ServicesStatue>
      <Button>
        Начать работу
      </Button>
    </ServicesContent>
  </ServicesSection>
);

Services.propTypes = {

};

export default Services;
