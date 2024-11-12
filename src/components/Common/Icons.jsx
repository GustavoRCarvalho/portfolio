import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import vite from "../../assets/icons/vite-js-logo.svg"
import router from "../../assets/icons/react-router-mark-color.svg"
import figma from "../../assets/icons/figma_logo.svg"
import { styled } from "styled-components"
import { motion } from "framer-motion"

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

const heightValue = "7em"
const widthValue = "7em"
const delayValue = 2
const durationValue = 0.5

const IconsProperties = (props) => `
    width: ${widthValue};
    height: ${heightValue};
    ${props.$onHover && "filter: drop-shadow(0 0 5px)"};
    transition: filter 250ms;
    `

export const FigmaIcon = () => {
  return <img alt="Icone" src={figma} />
}

export const ViteIcon = () => {
  return <img alt="Icone" src={vite} />
}

export const RouterIcon = () => {
  return <img alt="Icone" src={router} />
}

export const CommonIcon = ({ onHover, Icon, color }) => {
  return (
    <CommonIconContainer
      $onHover={onHover}
      transition={{ duration: durationValue, delay: delayValue }}
      animate={{
        color: color,
      }}
    >
      <Icon style={{ width: widthValue, height: heightValue }} />
    </CommonIconContainer>
  )
}

const CommonIconContainer = styled(motion.div)`
  ${(props) => IconsProperties(props)}
`
