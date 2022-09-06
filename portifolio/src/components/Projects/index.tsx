import React, {useState, useEffect} from 'react';
import data from "../../data"
import Card from '../Card';
import { Container } from './styles';



const Projects: React.FC = () => {
  const [infoGitHub, setInfoGitHub] = useState([])
  const url = "https://api.github.com/users/MahFLima/repos"
  
  async function getInfoGitHub() {
    try {
      const response = await fetch(url)
      const data = await response.json()
      await setInfoGitHub(data)
      console.log(infoGitHub)
    } catch (error) {
      console.log("erro");
    }
  }

  // useEffect(() => {
  //   getInfoGitHub()
  // }, [])

  return (
    <Container id="project">
      <strong>21 Dias De Codigo</strong>
      <div>

        {data.map((item, index) => {
          return(
            <Card 
              key={index} 
              title={item.title} 
              image={item.image} 
              link="https://github.com/MahFLima/21-Dias-De-Codigo"
            />
          )
        })}
        
      </div>
    </Container>
  );
}

export default Projects;