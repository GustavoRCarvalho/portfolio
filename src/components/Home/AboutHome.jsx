import { styled } from "styled-components"
import { ContentLimiter } from "../Common/ContentLimit"

export const AboutHome = () => {
  return (
    <AboutContainer>
      <AboutTextWrapper>
        <Title>
          Desenvolvedor front end web e desenvolvedor de aplicações móveis.
        </Title>
        <Description>
          Eu sou um Front End Developer formado em Técnico em Informática.
          Possuo experiência com desenvolvimento web em JS - React e
          desenvolvimento mobile com Kotlin e React Native. Trabalhei em times
          com colaboração de analistas, designs, back ends e QAs, utilizando
          metodologias ágeis e uma excelente cooperação e organização. Este é
          meu portfólio onde mostro o que venho desenvolvendo nos últimos anos.
        </Description>
      </AboutTextWrapper>
      <AboutImage />
    </AboutContainer>
  )
}

const AboutContainer = styled(ContentLimiter)`
  display: flex;

  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const AboutImage = styled.img`
  background-color: #eee;

  border-radius: 1em;
  width: 30vw;
  height: 30vw;
  max-height: calc(1280 * 0.3px);
  max-width: calc(1280 * 0.3px);
  margin: calc(1280 * 0.02px);

  transform: rotate(5deg);
  @media screen and (max-width: 768px) {
    width: 40vw;
    height: 40vw;
    margin: 2vw;
  }
`

const AboutTextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: start;

  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const Title = styled.h1`
  font-size: 1.5em;
`

const Description = styled.p`
  font-size: 1em;
`
