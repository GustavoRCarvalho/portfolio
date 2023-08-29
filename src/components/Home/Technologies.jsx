import { motion } from "framer-motion"
import { styled } from "styled-components"
import { ContentLimiter } from "../Common/ContentLimit"
import { FigmaIcon, RouterIcon, ViteIcon } from "../Common/Icons"
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaGithubSquare,
} from "react-icons/fa"
import { BiLogoVisualStudio } from "react-icons/bi"
import { SiStyledcomponents, SiRedux } from "react-icons/si"
import { TechnologyCard } from "./TechnologyCard"

const listTech = [
  { Icon: FaReact, color: "#149eca", label: "REACT" },
  { Icon: FaHtml5, color: "#e34c26", label: "HTML" },
  { Icon: FaCss3Alt, color: "#264de4", label: "CSS" },
  { Icon: FaJsSquare, color: "#f0db4f", label: "JS" },
  { Icon: FaNodeJs, color: "#68a063", label: "NODE" },
  { Icon: RouterIcon, color: "#f10a0a", label: "REACT ROUTER" },
  { Icon: SiRedux, color: "#764abc", label: "REACT REDUX" },
  { Icon: SiStyledcomponents, color: "#ffbd43", label: "STYLED COMPONENTS" },
  { Icon: FaGitAlt, color: "#f34f29", label: "GIT" },
  { Icon: FaGithubSquare, color: "#424242", label: "GITHUB" },
  { Icon: BiLogoVisualStudio, color: "#0078d7", label: "VSCODE" },
  { Icon: ViteIcon, color: "#9c19f3", label: "VITE" },
  { Icon: FigmaIcon, color: "#f87509", label: "FIGMA" },
]

export const Technologies = () => {
  return (
    <TechnologiesBackground>
      <TechnologiesContainer>
        <TechnologiesTitle>Tecnologias</TechnologiesTitle>
        <CardContainer>
          {listTech.map((item, index) => {
            return (
              <TechnologyCard
                item={item}
                key={item.label}
                delay={index * 0.15}
              />
            )
          })}
        </CardContainer>
      </TechnologiesContainer>
    </TechnologiesBackground>
  )
}

const TechnologiesBackground = styled.div`
  background-color: rgba(244, 244, 246, 1);
  display: flex;
  justify-content: center;

  width: 100vw;
  margin-top: 2em;
`
const TechnologiesContainer = styled(ContentLimiter)`
  display: flex;
  flex-direction: column;

  overflow: visible;
`
const TechnologiesTitle = styled.h2`
  color: #141414;
`

const CardContainer = styled(motion.div)`
  display: flex;
  justify-content: start;
  padding: 0;

  flex-wrap: wrap;
  @media screen and (max-width: 678px) {
    justify-content: center;
  }
`
