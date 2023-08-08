import { styled } from "styled-components"
import { AiOutlineLink } from "react-icons/ai"
import { AiOutlineGithub } from "react-icons/ai"

export const About = ({ showMore, about, href, gitHref }) => {
  return (
    <ContentContainer $showmore={showMore ? "flex" : "none"}>
      <ContentAbout>{about}</ContentAbout>
      <ButtonsWrapper>
        <VisitButton href={href}>
          <LinkIcon />
          Acesse
        </VisitButton>
        <VisitButton href={gitHref}>
          <GitIcon />
          Repositório
        </VisitButton>
      </ButtonsWrapper>
    </ContentContainer>
  )
}

const LinkIcon = styled(AiOutlineLink)`
  width: 2em;
  height: 2em;
  margin-right: 0.5em;
`
const GitIcon = styled(AiOutlineGithub)`
  width: 2em;
  height: 2em;
  margin-right: 0.5em;
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const VisitButton = styled.a`
  background-color: var(--bg-color);
  color: var(--color);

  font-size: 1em;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;

  border-radius: 0.5em;

  margin: 0.5em;
  padding-block: 0.5em;
  padding-inline: 1em;

  cursor: pointer;
`

const ContentAbout = styled.p`
  width: 70%;

  margin: 1em 0 0 0;
`

const ContentContainer = styled.div`
  display: ${(props) => props.$showmore};
  flex-direction: column;
  justify-content: space-between;
  background-color: #7a7a7a80;

  min-height: 20vh;
  width: calc(100% - 2em);

  padding: 1em;

  z-index: 1;

  transition: display 500ms;

  cursor: default;

  @media (prefers-color-scheme: light) {
    background-color: #f0f0f0a0;
  }
`
