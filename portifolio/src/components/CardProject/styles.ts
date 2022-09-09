import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: 300px;
  position: relative;
  cursor: pointer;
  scroll-snap-align: start;

  > img {
    width: 500px;
    height: 300px;
    object-fit: cover;
  }

  &:hover div{
    display: flex;
  }
`;

export const Content = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 300px;
  color: white;
  background: blueviolet;
  opacity: 0.9;
  position: absolute;
  top: 0;
  gap: 1rem;

  >strong{
    font-size: 2rem;
  }

  >div{
    display: flex;
    gap: 2rem;

    a{
      width: 120px;
      color: white;
      background: black;
      padding: 0.5rem 1rem;
      text-align: center;

      &:hover{
        background: white;
        color: black;
      }
    }
  }

`;
