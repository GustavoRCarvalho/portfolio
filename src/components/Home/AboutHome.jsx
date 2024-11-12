import { styled } from "styled-components"
import { ContentLimiter } from "../Common/ContentLimit"
import facePhoto from "../../assets/images/perfil2.jpg"

export const AboutHome = () => {
  return (
    <AboutContainer>
      <AboutTextWrapper>
        <FirstTitle>Portfólio</FirstTitle>
        <SecondTitle>Olá, eu sou o Gustavo de Carvalho.</SecondTitle>
        <Description>
          Eu sou um <b>Front End Developer</b>, graduando em Análise e
          Desenvolvimento de Sistemas e formado em Técnico em Informática.
          Possuo experiência com desenvolvimento web em <b>JS - React</b> e
          desenvolvimento mobile com <b>Kotlin e React Native</b>. Trabalhei em
          times com colaboração de analistas, designs, back ends e QAs,
          utilizando metodologias ágeis e uma excelente cooperação e
          organização. Este é meu portfólio onde mostro o que venho
          desenvolvendo nos últimos anos.
        </Description>
      </AboutTextWrapper>
      <AboutImage src={facePhoto} />
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

  filter: grayscale(1);

  &:hover {
    filter: grayscale(0);
  }

  transition: filter 200ms;
  @media screen and (max-width: 768px) {
    display: none;
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

const FirstTitle = styled.h1`
  font-size: 2em;
`

const SecondTitle = styled.h2`
  font-size: 1.3em;
`

const Description = styled.p`
  font-size: 1em;
`
