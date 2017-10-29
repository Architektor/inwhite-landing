import styled from 'styled-components';

export const ServicesSection = styled.div`
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
  height: 52.3437503vw;
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: center;
`;

export const ServicesStatue = styled.div`
  width: 45.104167vw;
  height: 100%;
  position: absolute;
  top: 50px;
  left: 23.229167vw;
  background: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
`;

function placeList(props) {
  switch (props.name) {
    case 'mediaService':
      return {
        top: '-16px',
        left: '7vw',
      };
    case 'pr':
      return {
        top: '200px',
        left: '-2.645833vw',
      };
    case 'strategy':
      return {
        top: '142px',
        left: '39vw',
      };
    case 'creativity':
      return {
        top: '397px',
        left: '2vw',
      };
    case 'analysys':
      return {
        top: '378px',
        left: '39.38125vw',
      }
    case 'smm':
      return {
        top: '606px',
        left: '-3vw',
      }
    case 'production':
      return {
        top: '630px',
        left: '44.5vw',
      }
    default:
      return {
        top: '0px',
        left: '0px',
      };
  }
  return {
    top: '0px',
    left: '0px',
  };
}

export const List = styled.ul`
  position: absolute;
  top: ${props => placeList(props).top};
  left: ${props => placeList(props).left};
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
  outline: none !important;
  background: black;
  color: white;
  border-radius: 0px;
  border: none;
  font-weight: 500;
  font-size: 37px;
  padding: 5px 65px;
  z-index: 1;
`;
