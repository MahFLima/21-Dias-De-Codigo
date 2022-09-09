import React, {useState, useEffect} from 'react';
import data from "../../data"
import Card from '../Card';
import { Container } from './styles';

const Desafios: React.FC = () => {

  return (
    <Container id="plus">
      <strong>21 Dias De Codigo</strong>
      <div>

        {data.map((item, index) => {
          return(
            <Card 
              key={index} 
              title={item.title} 
              image={item.image} 
              link={item.link}
            />
          )
        })}
        
      </div>
    </Container>
  );
}

export default Desafios;