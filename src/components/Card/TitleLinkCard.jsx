import { styled } from "styled-components"
import { AiOutlineLink } from "react-icons/ai"

export const TitleLinkCard = ({ children, title, href }) => {
  return (
    <NoStyleLink href={href}>
      <Title>
        Acesse <AiOutlineLink /> <LineSpan> | </LineSpan> {children}
        {title}
      </Title>
    </NoStyleLink>
  )
}

const NoStyleLink = styled.a`
  text-decoration: none;
`

const LineSpan = styled.span`
  margin-inline: 1rem;
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
