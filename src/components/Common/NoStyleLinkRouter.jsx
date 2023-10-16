import { Link } from "react-scroll"
import styled from "styled-components"

export const NoStyleLinkRouter = (props) => {
  return (
    <NoStyleLink
      duration={500}
      smooth={true}
      spy={true}
      offset={-50}
      {...props}
    >
      {props.children}
    </NoStyleLink>
  )
}

const NoStyleLink = styled(Link)`
  text-decoration: none;
`
