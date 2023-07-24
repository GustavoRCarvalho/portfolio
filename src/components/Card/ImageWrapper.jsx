import { styled } from "styled-components"
import { CardImage } from "./CardImage"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { useState } from "react"

export const ImageWrapper = ({ children, imagesList = [], $bordercolor }) => {
  const [carouselShow, setCarouselShow] = useState(false)
  const [selected, setSelected] = useState(0)
  function handleOutsideClick(e) {
    if (e.target.id === "carousel") {
      setCarouselShow(false)
    }
  }
  function handleImageClick(e) {
    console.log(e.target.id)
    setSelected(Number(e.target.id))
    setCarouselShow(true)
  }

  return (
    JSON.stringify(imagesList) !== "[]" && (
      <>
        {carouselShow && (
          <CarouselContainer onClick={handleOutsideClick} id={"carousel"}>
            <CarouselImage
              selectedItem={selected}
              emulateTouch
              showThumbs={false}
              showIndicators={false}
            >
              {imagesList.map((element) => {
                return <CardImage key={element} src={element} />
              })}
            </CarouselImage>
          </CarouselContainer>
        )}
        <Wrapper>
          {imagesList.map((element, index) => {
            return (
              <CardImage
                id={index}
                onClick={handleImageClick}
                key={element}
                src={element}
                $bordercolor={$bordercolor}
              />
            )
          })}
        </Wrapper>
      </>
    )
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  margin: 1em;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const CarouselContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 90vw;
  height: 90vh;
  padding-inline: 5vw;
  padding-block: 5vh;

  display: flex;
  justify-content: center;
  align-items: center;

  backdrop-filter: blur(2px);

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    padding: 0;
  }
`
const CarouselImage = styled(Carousel)`
  height: 100%;
  max-height: 60vw;
  width: 100%;
  max-width: 180vh;

  .carousel-slider {
    background-color: #0004;
    height: 100%;
  }
  .slider-wrapper {
    height: 100%;
  }
  .slider {
    height: 100%;
  }
  .slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    height: 100%;
    max-height: 60vw;
    width: auto !important;
    max-width: 180vh;
  }
`
