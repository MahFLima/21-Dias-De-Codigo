import React from 'react';

import { Container, Content } from './styles';

type Props = {
  title: string;
  srcImg: string;
  description: string;
  repository: string;
  deploy: string;
}

const CardProject: React.FC<Props> = ({title, srcImg, description, repository, deploy}) => {
  return (
    <Container>
      <img src={srcImg}/>
      <Content>
        <strong>{title}</strong>
        <p>{description}</p>
        <div>
          <a href={repository} target="_blank">Repositorio</a>
          <a href={deploy} target="_blank">Deploy</a>
        </div>
      </Content>
    </Container>
  );
}

export default CardProject;