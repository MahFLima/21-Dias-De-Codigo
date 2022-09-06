import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  position: relative;
  gap: 0.5rem;


  >p{
    font-size: 14px;
  }

  > img {
    width: 100%;
    height: 80%;
    object-fit: cover;

    &:hover{
      border: 4px solid blueviolet;
    }
  }
`;
