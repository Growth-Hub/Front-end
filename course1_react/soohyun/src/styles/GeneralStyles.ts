import { createGlobalStyle } from 'styled-components';

const GeneralStyles = createGlobalStyle`
  body {
    padding: 90px 150px 0px;
    font-family: 'Noto Sans';
  }

  h1, h2, h3, p, ul, ol, li {
    margin: 0;
    padding: 0;
  }

`;

export default GeneralStyles;
