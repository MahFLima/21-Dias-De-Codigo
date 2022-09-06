import React, { useEffect, useState } from 'react';
import classNames from "classnames"
import {
  IconCodepen,
  IconCodewars,
  IconGitHub,
  IconLinkedin,
  IconSun,
  IconMoon,
  IconHome,
  IconUser,
  IconDocument,
  IconProject,
  Line
} from '../../styles/icons';


import {
  Container,
  EventTag,
  ContentUser,
  ImageUser,
  InfoUser,
  Content,
  DwlC
} from './styles';
import About from '../../components/About';
import Projects from '../../components/Projects';

export const LadingPage: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  const [infoGitHub, setInfoGitHub] = useState({})
  const url = "https://api.github.com/users/MahFLima/repos"
  const divRef = React.useRef<HTMLDivElement>(null)
  
  async function getInfoGitHub() {
    try {
      const response = await fetch(url)
      const data = await response.json()

      setInfoGitHub(data)

    } catch (error) {
      console.log("erro");
    }
  }

  useEffect(() => {
    getInfoGitHub()
  }, [])

  function handleMode() {
    isActive ? setIsActive(false) : setIsActive(true)
    divRef.current?.classList.toggle("active")
  }

  return (


    <Container ref={divRef}>
      <section>
        <a href="#"><IconHome /></a>
        <a href="#user"><IconUser /></a>
        <a href="#project"><IconProject /></a>
      </section>

      <EventTag onClick={handleMode}>
        {isActive ? (<IconMoon />) : <IconSun />}
      </EventTag>
      <ContentUser>
        <ImageUser src="https://github.com/mahflima.png" />
        <InfoUser>
          <strong>Mariana Lima</strong>
          <p>Dev Front-End</p>
          <div>
            <a href="https://github.com/MahFLima" target="_blank" className={classNames({"txtnormal": !isActive}, {"txtactive": isActive})}><IconGitHub /></a>
            <a href="https://www.linkedin.com/in/mahflima/" target="_blank" className={classNames({"txtnormal": !isActive}, {"txtactive": isActive})}><IconLinkedin /></a>
            <a href="https://codepen.io/mahflima" target="_blank" className={classNames({"txtnormal": !isActive}, {"txtactive": isActive})}><IconCodepen /></a>
            <a href="https://www.codewars.com/users/MahFLima" target="_black" className={classNames({"txtnormal": !isActive}, {"txtactive": isActive})}><IconCodewars /></a>
          </div>
        </InfoUser>
      </ContentUser>
      <Content>
        {/* <div>
          <span>1</span>
          <p>Years of work <br /> experience</p>
        </div> */}
        <div>
          <span>20 +</span>
          <p>Completed <br /> projects</p>
        </div>
      </Content>
      <DwlC href="../../assets/curriculo.pdf" download="curriculo.pdf" type="application/pdf">Download CV</DwlC>
      <Line></Line>
      <About/>
      <Line></Line>
      <Projects/>
      <Line></Line>
    </Container>

  );
}

