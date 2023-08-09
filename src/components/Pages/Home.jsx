import { styled } from "styled-components"
import { AboutHome } from "../Home/AboutHome"
import { Links } from "../Common/Links"
import { Technologies } from "../Home/Technologies"

export const Home = () => {
  return (
    <HomeContainer>
      <AboutHome />
      <Links />
      <Technologies />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`
