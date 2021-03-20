import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }
  body {
    background: #a6a6a6 ;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 16px Roboto, sans-serif
  }
  button {
    cursor: pointer
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    color: #008396
  }
  #root {
    display: flex;
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
    align-items: center;
    justify-content: center;
    flex: 1
  }
`;
