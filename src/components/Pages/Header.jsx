import { styled } from "styled-components"
import { ContentLimiter } from "../Common/ContentLimit"
import { Menu } from "../Header/Menu"
import { ImageHeader } from "../Header/ImageHeader"

export const Header = () => {
  return (
    <ContainerHeader>
      <ContainerLimiteMenu>
        <ImageHeader />
        <Menu />
      </ContainerLimiteMenu>
    </ContainerHeader>
  )
}

const ContainerLimiteMenu = styled(ContentLimiter)`
  display: flex;
  align-items: center;

  padding-block: 1em;
`
const ContainerHeader = styled.header`
  position: sticky;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  top: 0;

  z-index: 2;
`
