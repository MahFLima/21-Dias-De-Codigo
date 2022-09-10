import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  height: 300px;
  position: relative;
  cursor: pointer;
  scroll-snap-align: start;
  background: black;

  @media (min-width: 500px) {
    max-width: 500px;
  }

  > img {
    width: 400px;
    height: 300px;
    object-fit: contain;

    @media (min-width: 500px) {
      width: 500px;
    }
  }

  &:hover div {
    display: flex;
  }
`;

export const Content = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 300px;
  color: white;
  background: blueviolet;
  opacity: 0.9;
  position: absolute;
  top: 0;
  gap: 1rem;

  @media(min-width: 500px){
    align-items: center;
  }

  > strong {
    font-size: 2rem;
    padding-left: 2rem;
  }

  >p{
    padding-left: 2rem;
  }

  > div {
    display: flex;
    gap: 2rem;
    padding-left: 2rem;

    a {
      width: 120px;
      color: white;
      background: black;
      padding: 0.5rem 1rem;
      text-align: center;

      &:hover {
        background: white;
        color: black;
      }
    }
  }
`;
