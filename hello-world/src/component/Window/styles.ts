import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  background: black;
  border: 2px solid white;
  overflow: hidden;
  animation: animation-window 1s normal;

  @keyframes animation-window{
    from{
      width: 0;
    }
    to{
      width: 600px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem 1rem;
  border-bottom: 2px solid white;

  > div {
    display: flex;
    gap: 1rem;

    > span {
      background: red;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  >div{
    display: flex;
    justify-content: center;
    gap: 1rem;

    >button{
      width: 1rem;
      height: 1rem;
      border: none;
      border-radius: 50%;
      cursor: pointer;

      &:first-child{
        background: red;
      }

      &:nth-child(2){
        background: blue;
      }

      &:last-child{
        background: green;
      }
    }
  }
`;

export const Title = styled.strong`
  font-weight: 700;
  font-size: 5rem;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 3rem;
    animation: blinkCursor 500ms infinite steps(40) normal, typingMobile 4s steps(40) normal;
  }
  
  animation: blinkCursor 500ms infinite steps(40) normal, typing 4s steps(40) normal;

  @keyframes typing{
    from {
      width: 0;
    }
    to {
      width: 452.27px;
    }
  }

  @keyframes typingMobile{
    from {
      width: 0;
    }
    to {
      width: 273.36px;
    }
  }

  @keyframes blinkCursor {
    from {
      border-right-color: rgba(255, 255, 255, 0.75);
    }
    to {
      border-right-color: transparent;
    }
  }
`;

export const Button = styled.button`
  background: black;
  border: 1px solid white;
  padding: 0.5rem 2rem;
  font-weight: 700;
  font-size: 1rem;
  margin-left: 0.5rem;
  cursor: pointer;
  margin-top: 3rem;



  &:hover {
    opacity: 0.7;
  }
`;
