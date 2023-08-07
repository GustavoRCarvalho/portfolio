import { styled } from "styled-components"
import { ContentLimiter } from "../Common/ContentLimit"
import { AboutHome } from "../Home/AboutHome"
import { Links } from "../Common/Links"

export const Home = () => {
  return (
    <HomeContainer>
      <AboutHome />
      <Links />
    </HomeContainer>
  )
}

const HomeContainer = styled(ContentLimiter)`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`
