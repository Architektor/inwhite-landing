import styled, { injectGlobal } from 'styled-components';

import background from '../../../assets/page-background.png';

import futuraNewLight from '../../../assets/fonts/FuturaNewLight_0.otf';

import futuraNewLightOblique from '../../../assets/fonts/FuturaNewLightOblique_0.otf';

import futuraNewBook from '../../../assets/fonts/FuturaNewBook_0.otf';

import futuraNewBookOblique from '../../../assets/fonts/FuturaNewBookOblique_0.otf';

import futuraNewMedium from '../../../assets/fonts/FuturaNewMedium_0.otf';

import futuraNewMediumOblique from '../../../assets/fonts/FuturaNewMediumOblique_0.otf';

import futuraNewDemi from '../../../assets/fonts/FuturaNewDemi_0.otf';

import futuraNewDemiOblique from '../../../assets/fonts/FuturaNewDemiOblique_0.otf';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  @font-face {
    font-family: system-ui;
    font-style: normal;
    font-weight: 100;
    src: url(${futuraNewLight});
  }

  @font-face {
    font-family: system-ui;
    font-style: oblique;
    font-weight: 100;
    src: url(${futuraNewLightOblique});
  }

  @font-face {
    font-family: system-ui;
    font-style: normal;
    font-weight: normal;
    src: url(${futuraNewBook});
  }

  @font-face {
    font-family: system-ui;
    font-style: oblique;
    font-weight: normal;
    src: url('${futuraNewBookOblique}');
  }

  @font-face {
    font-family: system-ui;
    font-style: normal;
    font-weight: 500;
    src: url('${futuraNewMedium}');
  }

  @font-face {
    font-family: system-ui;
    font-style: oblique;
    font-weight: 500;
    src: url('${futuraNewMediumOblique}');
  }

  @font-face {
    font-family: system-ui;
    font-style: normal;
    font-weight: 600;
    src: url('${futuraNewDemi}');
  }

  @font-face {
    font-family: system-ui;
    font-style: oblique;
    font-weight: 600;
    src: url('${futuraNewDemiOblique}');
  }
`;

export const AppContainer = styled.div`
  font-family: system-ui;
  background: url(${background});
  background-size: cover;
`;
