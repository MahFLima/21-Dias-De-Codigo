import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  
  padding: 1rem 2rem;
  border: none;
  background: transparent;
  gap: 0.5rem;
  cursor: pointer;

  @media(min-width: 720px){
    flex-direction: column;
    justify-content: center;
  }

  &:hover{
    opacity: 0.7;
  }

  >div{
    padding: 1rem 1.5rem;
    border-radius: 1.5rem;
  }

  p{
    font-weight: 500;
    font-size: 1rem;
    line-height: 19px;
  }
`;

