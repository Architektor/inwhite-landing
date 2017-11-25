import styled from 'styled-components';

export const ContactsSection = styled.div`
  margin-top: 79px;
  height: 442px;
  position: relative;
`;

export const Map = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
`;

export const ContactsBlock = styled.img`
  height: 468px;
  position: absolute;
  top: -26px;
  left: 50%;
  transform: translateX(-50%);
`;

export const ContactsInfo = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  color: white;
`;

export const Icon = styled.img`
  width: 43px;
  margin: 0px 7px;
  z-index: 3;
`;

export const Separator = styled.div`
  width: 6.23vw;
  height: 1px;
  border-top: 1px dashed white;
  z-index: 3;
  margin: 17px 0px;
`;

export const Address = styled.span`
  z-index: 3;
  font-size: 13px;
  text-align: center;
  margin-top: 11px;
  letter-spacing: 1px;
`;

export const PhoneNumber = styled.a`
  margin: 11px 0px 18px 0px;
  text-align: center;
  z-index: 3;
  font-size: 16px;
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
`;

export const Mail = styled.a`
  margin-top: 11px;
  text-align: center;
  z-index: 3;
  font-size: 16px;
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
`;

export const SocialBlock = styled.div`
  z-index: 3;
`;
