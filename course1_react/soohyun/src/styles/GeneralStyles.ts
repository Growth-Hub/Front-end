import { createGlobalStyle } from 'styled-components';

const GeneralStyles = createGlobalStyle`
  body {
    padding: 130px 150px;
    font-family: 'Noto Sans';
    background-color:  ${props => props.theme.colors.bg};
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
