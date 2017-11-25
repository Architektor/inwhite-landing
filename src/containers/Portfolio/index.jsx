import React from 'react';

import {
  PortfolioSection,
  PortfolioHeader,
  PortfolioCopy,
  BrandsContainer,
  Brands,
  BrandsHovered,
  PortfolioStatue,
  HoverHandler,
} from './styled';

import brands from '../../assets/brands.svg';
import brandsHovered from '../../assets/brands-hover.png';
import portfolioStatue from '../../assets/portfolio-statue.png';

const Portfolio = () => (
  <PortfolioSection>
    <PortfolioHeader>
      <PortfolioCopy>
        Наши работы
      </PortfolioCopy>
    </PortfolioHeader>
    <BrandsContainer>
      <HoverHandler />
      <BrandsHovered src={brandsHovered} />
      <Brands src={brands} />
      <PortfolioStatue src={portfolioStatue} />
    </BrandsContainer>
  </PortfolioSection>
);

export default Portfolio;
