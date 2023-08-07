import { styled } from "styled-components"
import { Git, Linkedin } from "../Common/Icons"

export const Links = () => {
  return (
    <LinksContainer>
      <Linkedin />
      <Git />
    </LinksContainer>
  )
}
const LinksContainer = styled.div`
  display: flex;

  width: 100%;
`
