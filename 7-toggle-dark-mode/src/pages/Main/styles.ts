import styled, {css} from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: #CDE7FF;
`;

export const Box = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 4rem;
`

export const Button = styled.button`
  background: #A2D1FD;
  border-radius: 78px;
  border: none;
  width: 169px;
  height: 65px;

  position: relative;

  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 8px;
`

const iconCss = css`
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 50%;
`

export const IconSun = styled.div`
  ${iconCss}
  background-color: #FFC100;
`

export const IconMoon = styled.div`
  ${iconCss}
  background-color: #DEE5F3;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const Title = styled.div`
  >strong{
    font-size: 4rem;
  }
  >p{
    font-size: 1rem;
    margin-top: 1rem;
    text-align: center;
  }
`

export const BoxImage = styled.div`
  width: 500px;
  height: 500px;
  background: #FFFFFF;
  border-radius: 50%;
  margin-left: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Image = styled.img`
  width: 400px;
  height: 400px;
`



