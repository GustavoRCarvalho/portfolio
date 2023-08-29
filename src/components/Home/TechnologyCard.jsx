import { motion } from "framer-motion"
import { styled } from "styled-components"
import { CommonIcon } from "../Common/Icons"
import { useState } from "react"

export const TechnologyCard = ({ item, delay, children }) => {
  const [onHover, setOnHover] = useState(false)

  return (
    <Card
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay }}
      onHoverStart={() => setOnHover(true)}
      onHoverEnd={() => setOnHover(false)}
    >
      <CommonIcon onHover={onHover} Icon={item.Icon} color={item.color} />
      <CardSpan>{item.label}</CardSpan>
    </Card>
  )
}

const CardSpan = styled.span`
  user-select: none;
`

const Card = styled(motion.div)`
  background-color: var(--bg-color);

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;

  text-align: center;

  width: 13em;
  height: 13em;

  border-radius: 1em;
  margin-block: 1em;
  margin-right: 1em;
  box-shadow: 0px 35px 120px -15px #1f1f1f;

  @media screen and (max-width: 390px) {
    width: 10em;
    height: 10em;
  }
`
