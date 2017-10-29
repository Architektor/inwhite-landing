import styled from 'styled-components';

export const PortfolioSection = styled.div`
  margin-top: 51px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: relative;
`;

export const PortfolioHeader = styled.div`
  align-self: flex-start;
  height: 72px;
  width: 34.010417vw;
  background: black;
  color: white;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
`;

export const PortfolioCopy = styled.span`
  font-weight: 600;
  font-size: 38px;
`

export const BrandsContainer = styled.div`
  width: 60.9375vw;
`;

export const Brands = styled.img`
  width: 41.145833vw;
`;

export const PortfolioStatue = styled.img`
  width: 42.03125vw;
  position: absolute;
  top: 0;
  right: 40px;
  z-index: 2;
`;
