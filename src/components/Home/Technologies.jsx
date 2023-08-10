import { motion } from "framer-motion"
import { styled } from "styled-components"
import { ContentLimiter } from "../Common/ContentLimit"
import {
  CssIcon,
  FigmaIcon,
  GitIcon2,
  GithubIcon,
  HtmlIcon,
  IconMotion,
  JsIcon,
  NodeIcon,
  ReactIcon,
  ReduxIcon,
  RouterIcon,
  StyledIcon,
  ViteIcon,
  VscodeIcon,
} from "../Common/Icons"
import { TechnologyCard } from "./TechnologyCard"

const listTech = [
  { Icon: ReactIcon, color: "#149eca", label: "REACT" },
  { Icon: HtmlIcon, color: "#e34c26", label: "HTML" },
  { Icon: CssIcon, color: "#264de4", label: "CSS" },
  { Icon: JsIcon, color: "#f0db4f", label: "JS" },
  { Icon: NodeIcon, color: "#68a063", label: "NODE" },
  { Icon: RouterIcon, color: "", label: "REACT ROUTER" },
  { Icon: ReduxIcon, color: "#764abc", label: "REACT REDUX" },
  { Icon: StyledIcon, color: "#ffbd43", label: "STYLED COMPONENTS" },
  { Icon: GitIcon2, color: "#f34f29", label: "GIT" },
  { Icon: GithubIcon, color: "#424242", label: "GITHUB" },
  { Icon: VscodeIcon, color: "#0078d7", label: "VSCODE" },
  { Icon: ViteIcon, color: "", label: "VITE" },
  { Icon: FigmaIcon, color: "", label: "FIGMA" },
]

export const Technologies = () => {
  return (
    <TechnologiesBackground>
      <TechnologiesContainer>
        <TechnologiesTitle>Tecnologias</TechnologiesTitle>
        <CardContainer>
          {listTech.map((item, index) => {
            return (
              <TechnologyCard key={item.label} delay={index * 0.15}>
                {item.color !== "" ? (
                  <IconMotion Icon={item.Icon} color={item.color} />
                ) : (
                  <item.Icon />
                )}
                {item.label}
              </TechnologyCard>
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
  @media screen and (max-width: 390px) {
    justify-content: center;
  }
`
