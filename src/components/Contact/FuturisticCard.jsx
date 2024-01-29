import { useState } from "react"
import { BiCopy, BiLinkAlt } from "react-icons/bi"
import styled, { keyframes } from "styled-components"
import { Tooltip } from "react-tooltip"

export const FuturisticCard = ({
  onClick = () => {},
  image,
  borderColor = "#fff",
  Logo,
  isCopy,
  isLink,
}) => {
  const [active, setActive] = useState(false)
  const [showCopyToolkit, setShowCopyToolkit] = useState(false)
  const [mouseHover, setMouseHover] = useState(false)

  return (
    <>
      <Tooltip
        id="my-tooltip"
        style={{ backgroundColor: "#fff", color: "#000" }}
        isOpen={showCopyToolkit}
      />
      <Card
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Copy!"
        data-tooltip-place="top"
        onClick={onClick}
        $borderColor={borderColor}
        $hover={mouseHover}
        onMouseEnter={() => {
          setMouseHover(true)
        }}
        onMouseLeave={() => {
          setMouseHover(false)
          setShowCopyToolkit(false)
        }}
        onMouseDown={() => {
          setActive(true)
          setTimeout(() => {
            setActive(false)
          }, 250)
          if (isCopy) {
            setShowCopyToolkit(true)
            setTimeout(() => {
              setShowCopyToolkit(false)
            }, 600)
          }
        }}
      >
        <CardImage $image={image} $hover={mouseHover} />
        <CardInsideBorder $borderColor={borderColor} $hover={mouseHover}>
          {Logo && <Logo $active={active} />}
          {isCopy && <CopyIcon $active={active} />}
          {isLink && <LinkIcon $active={active} />}
        </CardInsideBorder>
      </Card>
    </>
  )
}

const Card = styled.div`
  position: relative;
  background-color: #9b9b9b;

  width: 20em;
  height: 30em;
  margin: 1em;

  border-radius: 1em;
  border: 2px solid ${(props) => (props.$hover ? props.$borderColor : "#fff")};

  overflow: hidden;
  cursor: pointer;
`

const CardInsideBorder = styled.div`
  position: absolute;
  background-color: #0000;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: calc(90% - 2px);
  height: calc(92.5% + 2px);

  margin: 5%;

  border-radius: 0.5em;

  border: 1px solid ${(props) => (props.$hover ? props.$borderColor : "#fff")};
`

const translateImage = keyframes`
  /* valores de background-size devem ficar no minimo em 350% para estas imagens por conta do aspect-ratio e resolução delas. Ajuste a depender da necessidade. */

   0% {
    background-position: 36% 42%;
    background-size: 350%;
  }
  20% {
    background-position: 30% 35%;
    background-size: 350%;
  }
  
  20.0001% {
    background-position: 60% 85%;
    background-size: 500%;
  }
  
  40% {
    background-position: 49% 81%;
    background-size: 500%;
  }
  
  40.0001% {
    background-position: 80% 42%;
    background-size: 350%;
  }
  
  60% {
    background-position: 84% 33%;
    background-size: 350%;
  }
  
  60.0001% {
    background-position: 0% 0%;
    background-size: 350%;
  }
  
  80% {
    background-position: 15% 4%;
    background-size: 350%;
  }
  
  80.0001% {
    background-position: 80% 10%;
    background-size: 350%;
  }
  
  100% {
    background-position: 72% 14%;
    background-size: 350%;
  }
`

const CardImage = styled.div.attrs((props) => ({
  style: {
    backgroundImage: `url(${props.$image})`,
  },
}))`
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  position: absolute;
  background-size: 350%;
  background-position: 0% 0%;

  opacity: 0.8;
  filter: ${(props) => (props.$hover ? "grayscale(0)" : "grayscale(1)")};
  animation: ${translateImage}${(props) => props.$hover && ` infinite 15s linear`};
  transition: 500ms;
`

const LinkIcon = styled(BiLinkAlt)`
  width: ${(props) => (props.$active ? "2em" : "3em")};
  height: ${(props) => (props.$active ? "2em" : "3em")};

  color: #fff;
  transition: 250ms;
`

const CopyIcon = styled(BiCopy)`
  width: ${(props) => (props.$active ? "2em" : "3em")};
  height: ${(props) => (props.$active ? "2em" : "3em")};

  color: #fff;
  transition: 250ms;
`
