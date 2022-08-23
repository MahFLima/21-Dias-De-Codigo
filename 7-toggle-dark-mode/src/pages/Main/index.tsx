import React, { useState } from 'react';
import image1 from '../../assets/image1.svg'
import image2 from '../../assets/image2.svg'

import { 
  Container, 
  Button, 
  Box, 
  IconSun, 
  IconMoon, 
  Content, 
  Title, 
  Image, 
  BoxImage 
} from './styles';
import classNames from 'classnames';

const Main: React.FC = () => {
  const [isActive, setIsActive] = useState(false)

  function handleActive() {
    isActive ? setIsActive(false) : setIsActive(true)
  }
  return (
    <Container className={
      classNames({ "container-active": isActive })}>
      <Box>
        <Button className={
          classNames({ "button-active": isActive })}
          onClick={handleActive}
        >
          {isActive ? <IconMoon /> : <IconSun />}
        </Button>
      </Box>

      {isActive ?
        (
          <Content>
            <BoxImage>
              <Image src={image2} />
            </BoxImage>
            <Title>
              <strong>Dark Mode</strong>
              <p>✔️ Day 8/21</p>
            </Title>
          </Content>
        ) : (
          <Content>
            <BoxImage>
              <Image src={image1} />
            </BoxImage>
            <Title>
              <strong>Light Mode</strong>
              <p>✔️ Day 8/21</p>
            </Title>
          </Content>
        )}

    </Container>
  );
}

export default Main;