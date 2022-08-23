import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .container-active{
    background: #535C72;
    color: white;
  }
  
  .button-active{
    display: flex;
    justify-content: end;
    background: #1F2533;
    padding-right: 8px;
  }
`;