import styled from 'styled-components';

export const HomeSection = styled.div`
  width: 100%;
  height: 54.1667vw;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const HomeBackground = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
`;

export const HeaderContainer = styled.div`
  width: 60.9375vw;
  min-height: 60px;
  margin-top: 54px;
  z-index: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export const LogoMuted = styled.img`
  height: 60px;
  width: 144px;
`;

export const HeaderLinks = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

export const Button = styled.button`
  background: ${props => props.black ? 'black' : 'transparent'};
  color: ${props => props.black ? 'white': 'black'};
  font-weight: ${props => props.black ? '300' : 'normal'};
  border: none;
  font-size: 18px;
  height: 27px;
  outline: none !important;
  cursor: pointer;
  margin: 0px 11px;
`;

export const PhoneNumber = styled.div`
  font-weight: 500;
  white-space: nowrap;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 0px 11px;
`

export const PhoneIcon = styled.img`
  height: 27px;
  margin: 0px 9px;
`;

export const HomeStatue = styled.img`
  width: 44.375vw;
  transform: translate(-4.114583vw, 5.384615%);
`;

export const Number = styled.a`
  color: black;
  text-decoration: none;
  font-weight: 500;
`;

export const LogoContainer = styled.div`
  z-index: 1;
  margin-left: 45.375vw;
  margin-top: calc(22% - 114px);
  display: flex;
  flex-flow: column nowrap;
`;

export const Slogan = styled.span`
  font-size: 24px;
  font-weight: 100;
`;

export const Logo = styled.img`
  width: 16.09375vw;
`;

