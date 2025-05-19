import { styled } from "styled-components"
import { NoStyleLinkRouter } from "../Common/NoStyleLinkRouter"

export const ImageHeader = () => {
  return (
    <NoStyleLinkRouter to="/">
      <Image src="/images/perfil2.jpg"></Image>
    </NoStyleLinkRouter>
  )
}

const Image = styled.img`
  position: fixed;
  top: 1em;

  width: 3.1em;
  height: 3em;

  border-radius: 50%;
  border: 1px solid white;
  box-shadow: 0px 4px 10px #00000081;
`
