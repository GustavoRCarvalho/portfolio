import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { SiStyledcomponents, SiRedux } from "react-icons/si"
import vite from "../../assets/icons/vite-js-logo.svg"
import router from "../../assets/icons/react-router-mark-color.svg"
import { BiLogoVisualStudio } from "react-icons/bi"
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaGithubSquare,
} from "react-icons/fa"
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

export const ReactIcon = styled(FaReact)`
  color: ${(props) => (props.theme.colorized ? "#149eca" : "#ddd")};
  width: 7em;
  height: 7em;
`
export const HtmlIcon = styled(FaHtml5)`
  color: ${(props) => (props.theme.colorized ? "#e34c26" : "#ddd")};
  width: 7em;
  height: 7em;
`
export const CssIcon = styled(FaCss3Alt)`
  color: ${(props) => (props.theme.colorized ? "#264de4" : "#ddd")};
  width: 7em;
  height: 7em;
`
export const JsIcon = styled(FaJsSquare)`
  color: ${(props) => (props.theme.colorized ? "#f0db4f" : "#ddd")};
  width: 7em;
  height: 7em;
`
export const NodeIcon = styled(FaNodeJs)`
  color: ${(props) => (props.theme.colorized ? "#68a063" : "#ddd")};
  width: 7em;
  height: 7em;
`
export const GitIcon2 = styled(FaGitAlt)`
  color: ${(props) => (props.theme.colorized ? "#f34f29" : "#ddd")};
  width: 7em;
  height: 7em;
`
export const GithubIcon = styled(FaGithubSquare)`
  color: ${(props) => (props.theme.colorized ? "#424242" : "#ddd")};
  width: 7em;
  height: 7em;
`
export const VscodeIcon = styled(BiLogoVisualStudio)`
  color: ${(props) => (props.theme.colorized ? "#0078d7" : "#ddd")};
  width: 7em;
  height: 7em;
`
export const StyledIcon = styled(SiStyledcomponents)`
  color: ${(props) => (props.theme.colorized ? "#ffbd43" : "#ddd")};
  width: 7em;
  height: 7em;
`

export const ReduxIcon = styled(SiRedux)`
  color: ${(props) => (props.theme.colorized ? "#764abc" : "#ddd")};
  width: 7em;
  height: 7em;
`

const ImgIcon = styled.img`
  filter: ${(props) =>
    props.theme.colorized ? "grayscale(0)" : "grayscale(1)"};
  width: 7em;
  height: 7em;
`

export const ViteIcon = () => {
  return <ImgIcon src={vite} />
}

export const RouterIcon = () => {
  return <ImgIcon src={router} />
}

const GitIcon = styled(AiOutlineGithub)`
  width: 2em;
  height: 2em;
`

const LinkedIcon = styled(AiOutlineLinkedin)`
  width: 2em;
  height: 2em;
`
