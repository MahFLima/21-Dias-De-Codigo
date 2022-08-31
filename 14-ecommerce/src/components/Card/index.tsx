import React from 'react';
import data from "../../data"
import { Container } from './styles';

type Props = {
  title: string
  imgUrl: string
  value: string
}

const Card: React.FC<Props> = ({title, imgUrl, value}) => {
  return (
    <Container>
      <img src={imgUrl}/>
      <strong>{title}</strong>
      <p>R$ {value}</p>
    </Container>
  );
}

export default Card;