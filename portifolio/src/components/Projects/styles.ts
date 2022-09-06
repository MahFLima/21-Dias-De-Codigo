import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > strong {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 4rem;
    gap: 1rem;
  }
`;
