import React from 'react';
import { Container } from './styles';

type Props = {
  title: string;
  image: string;
  link: string;
}

const Card: React.FC<Props> = ({title, image, link}) => {
  return (
    <Container href={link} target="_blank">

      <img src={image} />
      <p>{title}</p>

    </Container>
  );
}

export default Card;