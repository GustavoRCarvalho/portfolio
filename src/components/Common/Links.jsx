import { styled } from "styled-components"
import { Git, Linkedin } from "../Common/Icons"
import { ContentLimiter } from "./ContentLimit"

export const Links = () => {
  return (
    <LinksContainer>
      <Linkedin />
      <Git />
    </LinksContainer>
  )
}
const LinksContainer = styled(ContentLimiter)`
  display: flex;
`
