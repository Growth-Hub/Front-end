import { createGlobalStyle } from 'styled-components';

const GeneralStyles = createGlobalStyle`
  body {
    padding: 0px 150px;
    font-family: 'Noto Sans';
  }

  h1, h2, h3, p, ul, ol, li {
    margin: 0;
    padding: 0;
  }

  input {
    all: unset;
  }

`;

export default GeneralStyles;
