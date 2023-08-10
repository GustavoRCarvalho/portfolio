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
import { motion } from "framer-motion"
import { useSelector } from "react-redux"

const heightValue = "7em"
const widthValue = "7em"
const delayValue = 2
const durationValue = 0.5

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

export const ViteIcon = () => {
  const { isColorized } = useSelector((state) => state.color)

  return (
    <ImgIcon
      transition={{ duration: durationValue, delay: delayValue }}
      animate={{
        filter: isColorized ? "grayscale(0)" : "grayscale(1)",
      }}
      src={vite}
    />
  )
}

export const RouterIcon = () => {
  const { isColorized } = useSelector((state) => state.color)
  return (
    <ImgIcon
      transition={{ duration: durationValue, delay: delayValue }}
      animate={{
        filter: isColorized ? "grayscale(0)" : "grayscale(1)",
      }}
      src={router}
    />
  )
}

export const IconMotion = ({ Icon, color }) => {
  const { isColorized } = useSelector((state) => state.color)

  return (
    <motion.div
      transition={{ duration: durationValue, delay: delayValue }}
      animate={{
        color: isColorized ? color : "#ddd",
      }}
    >
      <Icon />
    </motion.div>
  )
}

export const ReactIcon = styled(FaReact)`
  width: ${widthValue};
  height: ${heightValue};
`
export const HtmlIcon = styled(FaHtml5)`
  width: ${widthValue};
  height: ${heightValue};
`
export const CssIcon = styled(FaCss3Alt)`
  width: ${widthValue};
  height: ${heightValue};
`
export const JsIcon = styled(FaJsSquare)`
  width: ${widthValue};
  height: ${heightValue};
`
export const NodeIcon = styled(FaNodeJs)`
  width: ${widthValue};
  height: ${heightValue};
`
export const GitIcon2 = styled(FaGitAlt)`
  width: ${widthValue};
  height: ${heightValue};
`
export const GithubIcon = styled(FaGithubSquare)`
  width: ${widthValue};
  height: ${heightValue};
`
export const VscodeIcon = styled(BiLogoVisualStudio)`
  width: ${widthValue};
  height: ${heightValue};
`
export const StyledIcon = styled(SiStyledcomponents)`
  width: ${widthValue};
  height: ${heightValue};
`

export const ReduxIcon = styled(SiRedux)`
  width: ${widthValue};
  height: ${heightValue};
`

const ImgIcon = styled(motion.img)`
  width: ${widthValue};
  height: ${heightValue};

  filter: grayscale(1);

  -webkit-user-drag: none;
`
