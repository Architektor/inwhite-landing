import React from 'react';
import PropTypes from 'prop-types';

import {
  PortfolioSection,
  PortfolioHeader,
  PortfolioCopy,
  BrandsContainer,
  Brands,
  PortfolioStatue,
} from './styled';

import brands from '../../assets/brands.svg';
import portfolioStatue from '../../assets/portfolio-statue.png';

const Portfolio = () => (
  <PortfolioSection>
    <PortfolioHeader>
      <PortfolioCopy>
        Наши работы
      </PortfolioCopy>
    </PortfolioHeader>
    <BrandsContainer>
      <Brands src={brands} />
      <PortfolioStatue src={portfolioStatue} />
    </BrandsContainer>
  </PortfolioSection>
);

Portfolio.propTypes = {

};

export default Portfolio;
