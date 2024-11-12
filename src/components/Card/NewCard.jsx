import { styled } from "styled-components"
import { About } from "./About"

export const NewCard = ({ title, about, href, gitHref, image }) => {
  return (
    <CardContainer>
      <CardImage $img={image} onClick={() => window.open(href, "_blank")} />
      <DescriptionWrapper>
        <Title onClick={() => window.open(href, "_blank")}>{title}</Title>
        <About gitHref={gitHref} about={about} />
      </DescriptionWrapper>
    </CardContainer>
  )
}

const CardImage = styled.img`
  background-image: url(${(props) => props.$img});
  background-position: center;
  background-color: var(--bg-color);
  background-size: 150%;

  height: 100%;
  width: 101%;

  filter: grayscale(1);

  transition: filter 250ms;

  &:hover {
    filter: grayscale(0);
  }
  cursor: pointer;
`
const CardContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow: hidden;

  box-shadow: 0px 0px 4px 0.5px #ffffff2d;
  border-radius: 0.5em;
  width: calc(32%);
  min-height: 25em;

  @media screen and (max-width: 720px) {
    width: calc(45%);
  }

  @media screen and (max-width: 520px) {
    width: calc(100%);
  }
`

const Title = styled.h2`
  color: var(--color);
  font-size: 1.2em;

  text-align: start;

  width: 100%;

  margin: 0;
  padding: 0.5em;
  padding-inline: 1em;

  border-radius: 2em;

  cursor: pointer;
`

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: start;

  width: 100%;
`
