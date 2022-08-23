import React, { useState } from 'react';

type Props = {
  click: () => void;
}

import { Container, Header, Title, Content, Button } from './styles';

const Window: React.FC<Props> = ({click}) => {
  const [color, setColor] = useState("")

  function handleColor(color: string){
    setColor(color)
  }
  return (
    <Container>
      <Header>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Header>
      <Content>
        <Title style={{color: `${color}`}}>Hello World</Title>
        <div>
          <button onClick={() => handleColor("red")}></button>
          <button onClick={() => handleColor("blue")}></button>
          <button onClick={() => handleColor("green")}></button>
        </div>
        <Button onClick={click}>OK</Button>
      </Content>
    </Container>
  );
}

export default Window;