import { styled } from "styled-components"
import { ContentLimiter } from "../Common/ContentLimit"
import { Menu } from "../Header/Menu"
import { ImageHeader } from "../Header/ImageHeader"

export const Header = ({ setColorized }) => {
  return (
    <ContainerHeader>
      <ContainerLimiteMenu>
        <ImageHeader />
        <Menu />
        <ButtonMagic onClick={() => setColorized((value) => !value)}>
          Botão Mágico
        </ButtonMagic>
      </ContainerLimiteMenu>
    </ContainerHeader>
  )
}

const ButtonMagic = styled.button`
  background: linear-gradient(
    to right,
    #ff0000,
    #ff8800,
    #fffb00,
    #3cff00,
    #00eeff,
    #ff00f2
  );
  border: none;
  font-weight: bold;

  padding: 1em;

  border-radius: 2em;

  cursor: pointer;
`

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
