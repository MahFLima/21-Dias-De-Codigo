import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > strong {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  @media(min-width: 500px){
    max-width: 500px;
  }

  ::-webkit-scrollbar {
    background: gray;
  }
  ::-webkit-scrollbar-thumb {
    background: blueviolet;
  }
`;

export const Controls = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 2rem;

  > button {
    padding: 0.5rem 1rem;
  }
`;
