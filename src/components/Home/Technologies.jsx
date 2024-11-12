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
import { useState } from "react"
import { LuAppWindow } from "react-icons/lu"

const listSoft = [
  { Icon: FaGithubSquare, color: "#424242", label: "Github" },
  { Icon: BiLogoVisualStudio, color: "#0078d7", label: "VSCode" },
  { Icon: FigmaIcon, color: "#f87509", label: "Figma" },
]

const listTech = [
  { Icon: FaReact, color: "#149eca", label: "React" },
  { Icon: FaHtml5, color: "#e34c26", label: "HTML" },
  { Icon: FaCss3Alt, color: "#264de4", label: "CSS" },
  { Icon: FaJsSquare, color: "#f0db4f", label: "JavaScript" },
  { Icon: FaNodeJs, color: "#68a063", label: "Node.js" },
  { Icon: RouterIcon, color: "#f10a0a", label: "React Router" },
  { Icon: SiRedux, color: "#764abc", label: "React Redux" },
  { Icon: SiStyledcomponents, color: "#ffbd43", label: "Styled Components" },
  { Icon: FaGitAlt, color: "#f34f29", label: "Git" },
  { Icon: ViteIcon, color: "#9c19f3", label: "Vite" },
]

export const Technologies = () => {
  const options = [
    { Icon: LuAppWindow, title: "Tecnologias" },
    { Icon: LuAppWindow, title: "Softwares" },
  ]
  const [selected, setSelected] = useState(options[0]?.title)

  return (
    <TechnologiesBackground>
      <TechnologiesContainer>
        <TechnologiesTitle>Habilidades</TechnologiesTitle>
        <SkillsOptionsList>
          {options.map(({ Icon, title }) => (
            <SkillOption
              key={title}
              onClick={() => {
                setSelected(title)
              }}
              $isSelected={title === selected}
            >
              <Icon /> {title}
            </SkillOption>
          ))}
        </SkillsOptionsList>
        <CardContainer>
          {selected === "Softwares" &&
            listSoft.map((item, index) => {
              return (
                <TechnologyCard
                  item={item}
                  key={item.label}
                  delay={index * 0.05}
                />
              )
            })}
          {selected === "Tecnologias" &&
            listTech.map((item, index) => {
              return (
                <TechnologyCard
                  item={item}
                  key={item.label}
                  delay={index * 0.05}
                />
              )
            })}
        </CardContainer>
      </TechnologiesContainer>
    </TechnologiesBackground>
  )
}

const SkillsOptionsList = styled.div`
  display: flex;
`

const SkillOption = styled.button`
  background-color: transparent;
  display: inline-flex;
  gap: 0.5em;

  padding: 0.5em 0.5em;

  border: none;
  border-bottom: 2px solid;
  border-color: ${(props) => (props.$isSelected ? "black" : "transparent")};

  cursor: pointer;
`

const TechnologiesBackground = styled.div`
  background-color: var(--bg-color-white);
  display: flex;
  justify-content: center;

  width: 100vw;
  min-height: 50vh;
  margin-top: 2em;
  padding-top: 1em;
  padding-bottom: 3em;
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
`
