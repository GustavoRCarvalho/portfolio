import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { styled } from "styled-components"

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

const GitIcon = styled(AiOutlineGithub)`
  width: 2em;
  height: 2em;
`

const LinkedIcon = styled(AiOutlineLinkedin)`
  width: 2em;
  height: 2em;
`
