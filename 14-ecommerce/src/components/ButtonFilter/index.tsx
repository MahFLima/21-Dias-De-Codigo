import React, { FunctionComponent } from 'react';

import { Container } from './styles';

type Props = React.HTMLProps<HTMLButtonElement>

export const ButtonFilter: FunctionComponent<Props> = ({onClick, children}) => {
  return (
    <Container onClick={onClick}>
      {children}
    </Container>
  );
}

