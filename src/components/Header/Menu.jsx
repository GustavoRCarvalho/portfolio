import { useLocation } from "react-router-dom"
import { styled } from "styled-components"
import { NoStyleLinkRouter } from "../Common/NoStyleLinkRouter"

export const Menu = () => {
  const { pathname } = useLocation()
  const path = pathname.split("/")[1]

  return (
    <ListMenu>
      <NoStyleLinkRouter to={"/"}>
        <MenuItem $isSelected={path === ""}>Início</MenuItem>
      </NoStyleLinkRouter>
      <NoStyleLinkRouter to={"/projects"}>
        <MenuItem $isSelected={path === "projects"}>Projetos</MenuItem>
      </NoStyleLinkRouter>
      <NoStyleLinkRouter to={"/contact"}>
        <MenuItem $isSelected={path === "contact"}>Contato</MenuItem>
      </NoStyleLinkRouter>
    </ListMenu>
  )
}

const ListMenu = styled.ul`
  background-color: #242424;
  width: min-content;

  border-radius: 2em;

  list-style-type: none;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 8px 1px #ffffff2d;

  margin: 1em auto;
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
  height: 40px;

  font-size: 0.7em;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: ${(props) => (props.$isSelected ? "#c96bff" : "#fff")};
  transition: color 200ms;

  cursor: pointer;

  &:hover {
    color: #c96bff;
  }

  @media (prefers-color-scheme: light) {
    color: ${(props) => (props.$isSelected ? "#c96bff" : "#213547")};
  }
`
