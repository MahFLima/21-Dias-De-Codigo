import React from 'react';
import CardProject from '../CardProject';

import { Container, Content, Controls } from './styles';

const Projects: React.FC = () => {
  const divRef = React.useRef<HTMLDivElement>(null)


  return (
    <Container id="project">
      <strong>Principais Projetos</strong>
      <Content ref={divRef}>
        <CardProject
          title="Rocket NFT"
          description=" Landing page completa sobre NFTs"
          repository="https://github.com/MahFLima/Rocket-NFT"
          deploy="https://rocket-nft-five.vercel.app/"
          srcImg="https://i.pinimg.com/564x/4a/1d/9d/4a1d9d936864e73d7e39c15064f86ad3.jpg"
        />
        <CardProject
          title="RocketCoffee"
          description="Homepage para uma marca de café"
          repository="https://github.com/MahFLima/Rocket-Coffee"
          deploy="https://rocket-coffee-bay.vercel.app/"
          srcImg="https://github.com/MahFLima/Rocket-Coffee/raw/master/src/assets/Rocket-Coffee.gif"
        />
        <CardProject
          title="Event Platform"
          description="Plataforma de evento"
          repository="https://github.com/MahFLima/Ignite-Lab"
          deploy="https://ignite-lab-mahflima.vercel.app/"
          srcImg="https://github.com/MahFLima/Ignite-Lab/raw/master/src/assets/Vite%20App.gif"
        />

      </Content>
      {/* <Controls>
        <button>back</button>
        <button>next</button>
      </Controls> */}
    </Container>
  );
}

export default Projects;