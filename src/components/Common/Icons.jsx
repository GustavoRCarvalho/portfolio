import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import vite from "../../assets/icons/vite-js-logo.svg"
import router from "../../assets/icons/react-router-mark-color.svg"
import figma from "../../assets/icons/figma_logo.svg"
import { styled } from "styled-components"
const GitIcon = styled(AiOutlineGithub)`
  width: 2em;
  height: 2em;
`

const LinkedIcon = styled(AiOutlineLinkedin)`
  width: 2em;
  height: 2em;
`

const NoStyleLink = styled.a`
  text-decoration: none;
  color: #ffffffde;
  margin-inline: 1em;
  &:first-child {
    margin-inline: 0;
    margin-right: 1em;
  }

  @media (prefers-color-scheme: light) {
    color: #65656d;
  }
`

export const Linkedin = () => (
  <NoStyleLink href="https://www.linkedin.com/in/gustavo-carvalho-0/">
    <LinkedIcon />
  </NoStyleLink>
)
export const Git = () => (
  <NoStyleLink href="https://github.com/GustavoRCarvalho">
    <GitIcon />
  </NoStyleLink>
)

export const FigmaIcon = () => {
  return <img alt="Icone" src={figma} />
}

export const ViteIcon = () => {
  return <img alt="Icone" src={vite} />
}

export const RouterIcon = () => {
  return <img alt="Icone" src={router} />
}
