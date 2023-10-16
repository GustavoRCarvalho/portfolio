import { styled } from "styled-components"
import { AboutHome } from "../Home/AboutHome"
import { Links } from "../Common/Links"
import { Technologies } from "../Home/Technologies"
import { Projects } from "./Projects"
import { Element } from "react-scroll"
export const Home = () => {
  return (
    <HomeContainer id="containerElement">
      <Element name="" className="element">
        <AboutHome />
      </Element>
      <Links />
      <Element name="projects" className="element">
        <Projects />
      </Element>
      <Element name="tecnologies" className="element">
        <Technologies />
      </Element>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  .element {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`
