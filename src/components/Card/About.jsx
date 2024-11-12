import { styled } from "styled-components"
import { AiOutlineGithub } from "react-icons/ai"

export const About = ({ about, gitHref }) => {
  return (
    <ContentContainer>
      <ContentAbout>{about}</ContentAbout>
      <ButtonsWrapper>
        <VisitButton href={gitHref} target="_blank">
          <GitIcon />
          Repositório
        </VisitButton>
      </ButtonsWrapper>
    </ContentContainer>
  )
}

const GitIcon = styled(AiOutlineGithub)`
  width: 2em;
  height: 2em;
  margin-right: 0.5em;
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const VisitButton = styled.a`
  background-color: #161616;
  color: var(--color);

  font-size: 1em;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;

  border-radius: 0.5em;

  padding-block: 0.5em;
  padding-inline: 1em;

  cursor: pointer;
`

const ContentAbout = styled.p`
  margin: 0;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: calc(100% - 2.4em);
  min-height: 10em;

  padding-inline: 1.2em;
  padding-bottom: 1.2em;

  z-index: 1;

  transition: display 500ms;

  cursor: default;
`
