import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  a{
    text-decoration: none;
  }

  li{
    list-style-type: none;
  }

  .active{
    background: #0C151D;
    color: #F1F2F4;
  }

  .txtnormal{
    color: #3d3d3d;
  }

  .txtactive{
    color: #F1F2F4;
  }

  section{
    position: fixed;
    left: 2rem;
    top: 30%;
    display: none;
    flex-direction: column;
    gap: 1rem;

    @media(min-width: 820px){
      display: flex;
    }

    >a {
      border: none;
      padding: 0.5rem;
      background: white;
      border-radius: 50%;
      color: #3d3d3d;

      &:hover{
        background: blueviolet;
        color: white;
      }
    }
  }
`;
