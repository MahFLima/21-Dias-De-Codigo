import React, { useEffect, useState } from 'react';
import { saveAs } from "file-saver";
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
  Line,
  IconArrow
} from '../../styles/icons';


import {
  Container,
  EventTag,
  ContentUser,
  ImageUser,
  InfoUser,
  Content,
  DwlC,
  Top
} from './styles';
import About from '../../components/About';
import Projects from '../../components/Projects';

const urlToDownload = "https://drive.google.com/uc?id=1QpaUYFa8vuwLv1l5x5NHEEnmXkJbkLCT&export=download";

export const LadingPage: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  const divRef = React.useRef<HTMLDivElement>(null)
  const [download, setDownload] = useState("");
  const [count, setCount] = useState(0);


  function handleMode() {
    isActive ? setIsActive(false) : setIsActive(true)
    divRef.current?.classList.toggle("active")
  }

  function handleScroll(){
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Container ref={divRef}>
      <section>
        <a href="#"><IconHome /></a>
        <a href="#user"><IconUser /></a>
        <a href="#project"><IconProject /></a>
      </section>

      <Top onClick={handleScroll}><IconArrow/></Top>

      <EventTag onClick={handleMode}>
        {isActive ? (<IconMoon />) : <IconSun />}
      </EventTag>
      <ContentUser>
        <ImageUser src="https://github.com/mahflima.png" />
        <InfoUser>
          <strong>Mariana Lima</strong>
          <p>Dev Front-End</p>
          <div>
            <a href="https://github.com/MahFLima" target="_blank" className={classNames({ "txtnormal": !isActive }, { "txtactive": isActive })}><IconGitHub /></a>
            <a href="https://www.linkedin.com/in/mahflima/" target="_blank" className={classNames({ "txtnormal": !isActive }, { "txtactive": isActive })}><IconLinkedin /></a>
            <a href="https://codepen.io/mahflima" target="_blank" className={classNames({ "txtnormal": !isActive }, { "txtactive": isActive })}><IconCodepen /></a>
            <a href="https://www.codewars.com/users/MahFLima" target="_black" className={classNames({ "txtnormal": !isActive }, { "txtactive": isActive })}><IconCodewars /></a>
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
      <DwlC href="https://drive.google.com/uc?id=1QpaUYFa8vuwLv1l5x5NHEEnmXkJbkLCT&export=download">
        Download CV
      </DwlC>

      <Line></Line>
      <About />
      <Line></Line>
      <Projects />
      <Line></Line>
      <p style={{marginBottom: "1rem"}}>Made with 💜 by Mariana Lima</p>
    </Container>

  );
}

