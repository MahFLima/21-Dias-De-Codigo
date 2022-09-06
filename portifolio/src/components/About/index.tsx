import React from 'react';
import { IconCss, IconHtml, IconJs, IconReact, IconTs } from '../../styles/icons';

import { Container,Content, Skills } from './styles';

const About: React.FC = () => {
  return (
    <Container id="user">
      <strong>Sobre Mim</strong>
      <p>Sou formada em Ciência da Computação. Atualmente 
        trabalho<br/>
        com HelpDesk e suporte remoto ao usuário,<br/> 
        principalmente na analise e solução de problemas.<br/>
        Tenho 3 anos de experiência na área de <br/> 
        suporte técnico, incluindo auxilio ao usuário, <br/> 
        infraestrutura e manutenção de hardware.<br/> 
        Desenvolvo projetos pessoais e open-source <br/> 
        voltados para o front-end, para criar uma <br/> 
        experiência sólida enquanto busco novos desafios <br/> 
        na área de tecnologia para agregar todas as minhas <br/> 
        skills, que vão além de skills técnicas.</p>
        <Content>
          <strong>Skills</strong>
          <Skills>
            <div>
              <p>JavaScript</p>
              <IconJs/>
              <span>
                <div style={{position: 'absolute', background: "orange", width: "90%", height: "4px", borderRadius: "2px"}}></div>
              </span>
            </div>
            <div>
              <p>HTML</p>
              <IconHtml/>
              <span>
                <div style={{position: 'absolute', background: "darkblue", width: "98%", height: "4px", borderRadius: "2px"}}></div>
              </span>
            </div>
            <div>
              <p>CSS</p>
              <IconCss/>
              <span>
                <div style={{position: 'absolute', background: "blue", width: "98%", height: "4px", borderRadius: "2px"}}></div>
              </span>
            </div>
            <div>
              <p>React</p>
              <IconReact/>
              <span>
                <div style={{position: 'absolute', background: "green", width: "60%", height: "4px", borderRadius: "2px"}}></div>
              </span>
            </div>
            <div>
              <p>Typescript</p>
              <IconTs/>
              <span>
                <div style={{position: 'absolute', background: "red", width: "40%", height: "4px", borderRadius: "2px"}}></div>
              </span>
            </div>
          </Skills>
        </Content>
    </Container>
  );
}


export default About;