import React, { FunctionComponent } from 'react';
import { MenuIcon, SearchIcon, ShopIcon } from '../../styles/icons';

import { 
  Container, 
  Title, 
  SearchInput, 
 
  Button, 
  SignIn, 

  LinkShop,
  ButtonIconMenu,
 
} from './styles';

type Props = React.HTMLProps<HTMLInputElement>

export const Header: FunctionComponent<Props> = ({ children }) => {
  return (
    <Container>
      <ButtonIconMenu>
        <MenuIcon />
      </ButtonIconMenu>
      <Title><strong>Eco</strong>mmerce</Title>
      <SearchInput>
        {children}
        <Button><SearchIcon /></Button>
      </SearchInput>
      <SignIn>Sign in</SignIn>
      <LinkShop href="#">
        <ShopIcon />
      </LinkShop>
    </Container>
  );
}

