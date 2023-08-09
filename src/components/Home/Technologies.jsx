import { LayoutGroup } from "framer-motion"
import { styled } from "styled-components"
import { ContentLimiter } from "../Common/ContentLimit"
import {
  CssIcon,
  GitIcon2,
  GithubIcon,
  HtmlIcon,
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

export const Technologies = () => {
  return (
    <TechnologiesBackground>
      <TechnologiesContainer>
        <TechnologiesTitle>Tecnologias</TechnologiesTitle>
        <CardContainer>
          <LayoutGroup>
            <TechnologyCard delay={0.75}>
              <ReactIcon /> React
            </TechnologyCard>
            <TechnologyCard delay={1}>
              <HtmlIcon /> HTML
            </TechnologyCard>
            <TechnologyCard delay={1.25}>
              <CssIcon /> CSS
            </TechnologyCard>
            <TechnologyCard delay={1.5}>
              <JsIcon /> JS
            </TechnologyCard>
            <TechnologyCard delay={1.75}>
              <NodeIcon /> NODE
            </TechnologyCard>
            <TechnologyCard delay={2}>
              <GitIcon2 /> GIT
            </TechnologyCard>
            <TechnologyCard delay={2.25}>
              <GithubIcon /> GITHUB
            </TechnologyCard>
            <TechnologyCard delay={2.5}>
              <VscodeIcon /> VSCODE
            </TechnologyCard>
            <TechnologyCard delay={2.75}>
              <StyledIcon /> STYLED COMPONENTS
            </TechnologyCard>
            <TechnologyCard delay={3}>
              <RouterIcon /> REACT ROUTER
            </TechnologyCard>
            <TechnologyCard delay={3}>
              <ReduxIcon /> REACT REDUX
            </TechnologyCard>
            <TechnologyCard delay={3.25}>
              <ViteIcon /> VITE
            </TechnologyCard>
          </LayoutGroup>
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
`
const TechnologiesContainer = styled(ContentLimiter)`
  display: flex;
  flex-direction: column;

  overflow: visible;
`
const TechnologiesTitle = styled.h2`
  color: #141414;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: start;

  flex-wrap: wrap;
  @media screen and (max-width: 390px) {
    justify-content: center;
  }
`
