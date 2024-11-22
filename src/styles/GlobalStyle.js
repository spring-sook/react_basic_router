import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  // 이런식으로도.. 사용.. 가능....?
  /* .container {
    background-color: aquamarine;
  } */
`;

export default GlobalStyle;
