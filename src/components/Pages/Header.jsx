import { styled } from "styled-components"
import { ContentLimiter } from "../Common/ContentLimit"
import { Menu } from "../Header/Menu"

export const Header = () => {
  return (
    <ContainerHeader>
      <ContentLimiter>
        <Menu />
      </ContentLimiter>
    </ContainerHeader>
  )
}

const ContainerHeader = styled.header`
  position: sticky;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  top: 0;
`
