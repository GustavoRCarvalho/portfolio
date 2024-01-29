import { styled } from "styled-components"
import { NoStyleLinkRouter } from "../Common/NoStyleLinkRouter"

export const Menu = () => {
  return (
    <ListMenu>
      <NoStyleLinkRouter to={""}>
        <MenuItem>Início</MenuItem>
      </NoStyleLinkRouter>
      <NoStyleLinkRouter to={"projects"}>
        <MenuItem>Projetos</MenuItem>
      </NoStyleLinkRouter>
      <NoStyleLinkRouter to={"tecnologies"}>
        <MenuItem>Tecnologias</MenuItem>
      </NoStyleLinkRouter>
      <NoStyleLinkRouter to={"contact"}>
        <MenuItem>Contato</MenuItem>
      </NoStyleLinkRouter>
      {/* <NoStyleLinkRouter to={"/contact"}>
        <MenuItem $isSelected={path === "contact"}>Contato</MenuItem>
      </NoStyleLinkRouter> */}
    </ListMenu>
  )
}

const ListMenu = styled.ul`
  background-color: #242424;
  width: min-content;
  height: min-content;

  border-radius: 2em;

  list-style-type: none;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 8px 1px #ffffff2d;

  margin: auto;
  padding: 1em;
  padding-inline: 2em;
  gap: 2rem;
  overflow: hidden;
  @media (prefers-color-scheme: light) {
    box-shadow: 0px 0px 8px 1px #00000019;
    background-color: #fff;
  }
`

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  text-align: center;

  font-size: 0.7em;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #fff;

  cursor: pointer;

  &:hover {
    color: #c96bff;
  }
  transition: color 200ms;

  @media (prefers-color-scheme: light) {
    color: ${(props) => (props.$isSelected ? "#c96bff" : "#213547")};
  }
`
