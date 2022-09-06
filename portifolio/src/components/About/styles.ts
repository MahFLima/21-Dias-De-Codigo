import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  >strong{
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  >p{
    text-align: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2.5rem;

  >strong{
    font-size: 2rem;
  }

`

export const Skills = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
 
  >div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 74px;

    >span{
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background: lightgray;
      position: relative;
    }

    >p{
      font-size: 14px;
    }
  }
`
