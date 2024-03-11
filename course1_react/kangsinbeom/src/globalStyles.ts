import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body{
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
}
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  a {
    text-decoration: none;
    color: black;
  }
  p {
    margin: 0;
  }
`;
