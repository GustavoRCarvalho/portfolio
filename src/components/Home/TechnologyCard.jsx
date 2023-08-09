import { motion } from "framer-motion"
import { styled } from "styled-components"

export const TechnologyCard = ({ delay, children }) => {
  return (
    <Card
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      {children}
    </Card>
  )
}

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
