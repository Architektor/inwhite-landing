import styled, { keyframes } from 'styled-components';

export const PortfolioSection = styled.div.attrs({ id: 'portfolio' })`
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

export const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

export const fadeOut = keyframes`
  from { opacity: 1 }
  to { opacity: 0 }
`;

export const BrandsContainer = styled.div`
  width: 838.5px;
  position: relative;
  margin-top: 10px;
`;

export const Brands = styled.img`
  width: 566.16px;
  height: 452px;
`;

export const BrandsHovered = styled.img`
  width: 566.16px;
  height: 456px;
  display: none;
`;

export const PortfolioStatue = styled.img`
  width: 578.34px;
  position: absolute;
  top: -31px;
  right: -210px;
  z-index: 2;
`;

export const HoverHandler = styled.div`
  position: absolute;
  top: 192px;
  left: 221px;
  width: 135px;
  height: 135px;
  transform: rotate(45deg);
  cursor: crosshair;
  &:hover ~ img {
   display: block;
   & ~ img:not(:last-child) {
     display: none;
   }
  }
`
