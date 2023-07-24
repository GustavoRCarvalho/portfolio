import { styled } from "styled-components"
import { CardImage } from "./CardImage"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

export const ImageWrapper = ({ children, imagesList = [] }) => {
  function handleImageClick(e) {
    console.log(e)
  }

  return (
    <>
      {imagesList && (
        <CarouselImage
          onClick={handleImageClick}
          emulateTouch
          showThumbs={false}
          showIndicators={false}
          id={"carousel"}
        >
          {imagesList.map((element) => {
            return <CardImage key={element} src={element} />
          })}
        </CarouselImage>
      )}
      <Wrapper>
        {imagesList.map((element) => {
          return <CardImage key={element} src={element} />
        })}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  margin: 2px;
`

const CarouselImage = styled(Carousel)`
  position: fixed;
  left: 0;
  top: 0;
  width: 90vw;
  height: 90vh;
  overflow: scroll;

  padding-inline: 5vw;
  padding-block: 5vh;

  backdrop-filter: blur(2px);

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
  img {
    height: 100%;
    width: auto !important;
  }
`
