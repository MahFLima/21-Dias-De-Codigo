import styled, {css} from "styled-components"
import { Github, Sun, Moon, Linkedin } from "@styled-icons/bootstrap"
import { Codepen, Html5, Javascript, Css3, ReactLogo } from "@styled-icons/boxicons-logos"
import { Codewars, Typescript } from "@styled-icons/simple-icons"
import { Home, User } from "@styled-icons/boxicons-solid"
import { DocumentPerson } from "@styled-icons/fluentui-system-regular"
import { ProjectDiagram } from "@styled-icons/fa-solid"



const iconCss = css`
  width: 2rem; 
  height: 2rem;
`
export const IconHome = styled(Home)`${iconCss}`
export const IconUser = styled(User)`${iconCss}`
export const IconDocument = styled(DocumentPerson)`${iconCss}`
export const IconProject = styled(ProjectDiagram)`${iconCss}`

export const IconSun = styled(Sun)`${iconCss}`
export const IconMoon = styled(Moon)`${iconCss}`

export const IconGitHub = styled(Github)`
  ${iconCss}
  &:hover{
    color: blueviolet;
  }
`

export const IconLinkedin = styled(Linkedin)`
  ${iconCss}
  &:hover{
    color: blueviolet;
  }
`

export const IconCodepen = styled(Codepen)`
  ${iconCss}
  &:hover{
    color: blueviolet;
  }
`
export const IconCodewars = styled(Codewars)`
  ${iconCss}
  &:hover{
    color: blueviolet;
  }
`

export const IconJs = styled(Javascript)`
  ${iconCss}
  color: orange;
`

export const IconHtml = styled(Html5)`
  ${iconCss}
  color: darkblue
`
export const IconCss = styled(Css3)`
  ${iconCss}
  color: blue;
`
export const IconReact = styled(ReactLogo)`
  ${iconCss}
  color: green;
`
export const IconTs = styled(Typescript)`
  ${iconCss}
  color: red;
`

export const Line = styled.div`
  width: 100%;
  height: 4px;
  margin: 4rem 0;
  background: transparent;
`

