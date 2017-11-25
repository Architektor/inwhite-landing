import styled from 'styled-components';

export const ServicesSection = styled.div.attrs({ id: 'services' })`
  margin-top: 70px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: relative;
`;

export const ServicesHeader = styled.div`
  align-self: flex-end;
  height: 72px;
  width: 46.197917vw;
  background: black;
  color: white;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding-left: 40px;
`;

export const ServicesCopy = styled.span`
  font-weight: 600;
  font-size: 38px;
`;

export const ServicesContent = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: center;
`;

export const ServicesStatueContainer = styled.div`
  width: 100%;
  height: 711px;
  padding-right: 120px;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const ServicesStatue = styled.img`
  width: 620px;
`;

function placeList(props) {
  switch (props.name) {
    case 'mediaService':
      return {
        top: '-16px',
        left: '50%',
        transform: 'translate(calc(-100% - 20px), 0%)',
      };
    case 'pr':
      return {
        top: '140px',
        left: '50%',
        transform: 'translate(calc(-100% - 170px), 0%)',
      };
    case 'strategy':
      return {
        top: '100px',
        left: '50%',
        transform: 'translate(calc(-100% + 390px), 0%)',
      };
    case 'creativity':
      return {
        top: '280px',
        left: '50%',
        transform: 'translate(calc(-100% - 145px), 0%)',
      };
    case 'analysys':
      return {
        top: '270px',
        left: '50%',
        transform: 'translate(calc(-100% + 390px), 0%)',
      }
    case 'smm':
      return {
        top: '430px',
        left: '50%',
        transform: 'translate(calc(-100% - 210px), 0%)',
      }
    case 'production':
      return {
        top: '445px',
        left: '50%',
        transform: 'translate(calc(-100% + 465px), 0%)',
      }
    default:
      return {
        top: '0px',
        left: '0px',
      };
  }
}

export const List = styled.ul`
  position: absolute;
  top: ${props => placeList(props).top};
  left: ${props => placeList(props).left};
  transform: ${props => placeList(props).transform};
  margin: 0px;
`

export const ListHeader = styled.span`
  font-weight: 500;
  font-size: 24px;
  margin-left: -1em;
`;

export const ListItem = styled.li`
  font-weight: 100;
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none !important;
  background: black;
  color: white;
  border-radius: 0px;
  border: none;
  font-weight: 500;
  font-size: 37px;
  padding: 5px 65px;
  z-index: 1;
  transform: translateX(60px);
`;
