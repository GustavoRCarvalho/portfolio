import { styled } from "styled-components"
import { AiOutlineLink } from "react-icons/ai"

export const TitleLinkCard = ({ children, title, href }) => {
  return (
    <NoStyleLink href={href}>
      <Title>
        {children}
        {title} | Acesse <AiOutlineLink />
      </Title>
    </NoStyleLink>
  )
}

const NoStyleLink = styled.a`
  text-decoration: none;
`

const Title = styled.h2`
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  margin: 0;
  padding: 1em;
`
