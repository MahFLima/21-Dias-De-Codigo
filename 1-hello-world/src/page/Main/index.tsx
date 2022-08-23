import React, { useState } from 'react';
import Window from '../../component/Window';

import { Container, Button } from './styles';

export const Main: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <Container>
      {!isActive ? (<Button onClick={() => setIsActive(true)}>START</Button>): (<Window click={() => setIsActive(false)}/>)}
    </Container>
  );
}

