import styled from 'styled-components';
import image from "../../assets/background.png"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(25, 25, 25);
  background-repeat: no-repeat;
  color: white;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  border: 1px solid white;
`

export const Button = styled.button`
  background: black;
  border: 1px solid white;
  padding: 1rem 2rem;
  font-weight: 700;
  font-size: 1rem;
  margin-left: 0.5rem;
  cursor: pointer;

  &:hover{
    opacity: 0.7;
  }
`
