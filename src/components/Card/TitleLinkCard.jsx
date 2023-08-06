import { styled } from "styled-components"
import { AiOutlineLink } from "react-icons/ai"

export const TitleLinkCard = ({ children, title, href, color }) => {
  return (
    <NoStyleLink href={href}>
      <Title $color={color}>
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
  color: ${(props) => props.$color ?? "#ffffffde"};
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  margin: 0;
  padding: 1em;
  @media (prefers-color-scheme: light) {
    color: ${(props) => props.$color ?? "#383838"};
  }
`
