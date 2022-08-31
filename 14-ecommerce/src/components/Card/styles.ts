import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover{
    >img{
      border: 4px solid var(--text-orange);
    }
    
  }
  
  
  >img{
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }
`;
