import { useState } from "react"
import { styled } from "styled-components"
import { motion } from "framer-motion"
import { About } from "./About"

export const NewCard = ({ title, about, href, gitHref, image }) => {
  const [showMore, setShowMore] = useState(false)
  const [hover, setHover] = useState(false)

  return (
    <CardContainer layout>
      <CardImage
        $hover={hover}
        $showmore={showMore}
        img={image}
        onClick={() => setShowMore((value) => !value)}
      />
      <Title
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        layout="position"
        onClick={() => setShowMore((value) => !value)}
      >
        {title}
      </Title>
      <About gitHref={gitHref} href={href} showMore={showMore} about={about} />
    </CardContainer>
  )
}

const CardImage = styled(motion.img)`
  position: absolute;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-color: var(--bg-color);
  filter: blur(2px)
    ${(props) =>
      !props.$showmore
        ? props.$hover
          ? "grayscale(0)"
          : "grayscale(1)"
        : "grayscale(0)"};

  height: 100%;
  width: 100%;

  transition: filter 250ms;

  &:hover {
    filter: blur(2px) grayscale(0);
  }
`
const CardContainer = styled(motion.div)`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  box-shadow: 0px 0px 8px 1px #ffffff2d;
  margin: 1em 1em 5em 1em;
  border-radius: 1em;
  min-height: 15vh;

  cursor: pointer;
`

const Title = styled(motion.h2)`
  color: var(--color);
  background-color: #0000008b;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  padding: 0.5em;
  padding-inline: 1em;

  border-radius: 2em;
  box-shadow: 0px 0px 8px 4px #0000008b;
  z-index: 1;

  @media (prefers-color-scheme: light) {
    background-color: #f0f0f0df;
    box-shadow: 0px 0px 8px 4px #d1d1d1b0;
  }
`
