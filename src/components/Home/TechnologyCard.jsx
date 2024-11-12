import { styled } from "styled-components"

export const TechnologyCard = ({ item: { Icon, color, label } }) => {
  return (
    <Card $color={color}>
      <Icon />
      <CardSpan>{label}</CardSpan>
    </Card>
  )
}

const CardSpan = styled.span`
  color: #000;
`

const Card = styled.div`
  background-color: var(--bg-color-white);

  display: flex;
  gap: 1em;

  width: calc(33% - 2.8em);

  align-items: center;
  justify-content: start;

  text-align: center;

  padding: 1em;

  border-radius: 0.5em;
  margin-block: 1em;
  margin-right: 1em;
  box-shadow: 0px 0px 4px 0.5px #b6b6b6;
  &:hover {
    box-shadow: 0px 0px 4px 0.5px ${(props) => props.$color ?? "#b6b6b6"};
  }

  svg {
    color: ${(props) => props.$color ?? "inset"};
  }
  svg,
  img {
    width: 2em;
    height: 2em;
    pointer-events: none;
  }

  transition: box-shadow 200ms;

  @media screen and (max-width: 720px) {
    width: calc(45% - 2.8em);
  }
  @media screen and (max-width: 390px) {
    width: calc(100%);
  }

  user-select: none;
`
