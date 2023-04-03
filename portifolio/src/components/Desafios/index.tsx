import React, {useState, useEffect} from 'react';
import data from "../../data"
import Card from '../Card';
import { Container } from './styles';

const projects = [data[0], data[3], data[8], data[14], data[17]]

const Desafios: React.FC = () => {

  return (
    <Container id="plus">
      <strong>Outros Projetos</strong>
      <div>
        
            <Card
              title={data[0].title} 
              image={data[0].image} 
              link={data[0].link}
            />
            <Card
              title={data[3].title} 
              image={data[3].image} 
              link={data[3].link}
            />
            <Card
              title={data[8].title} 
              image={data[8].image} 
              link={data[8].link}
            />
           <Card
              title={data[14].title} 
              image={data[14].image} 
              link={data[14].link}
            />
            <Card
              title={data[17].title} 
              image={data[17].image} 
              link={data[17].link}
            />
        
      </div>
    </Container>
  );
}

export default Desafios;
