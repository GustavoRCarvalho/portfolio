import styled from "styled-components"
import { ContentLimiter } from "../Common/ContentLimit"
import { FuturisticCard } from "../Contact/FuturisticCard"

import image1 from "../../assets/images/animeMountains.png"
import image2 from "../../assets/images/animeMontainsNight.png"
import image3 from "../../assets/images/animeImage.png"
import { BiLogoLinkedinSquare } from "react-icons/bi"
import { FaGithub } from "react-icons/fa"
import { AiFillMail } from "react-icons/ai"

export const Contact = () => {
  const openLinkInNewTab = (link) => {
    window.open(link, "_blank", "noreferrer")
  }

  return (
    <ContentLimiter>
      <ContactTitle>Contato</ContactTitle>
      <CardsContainer>
        <FuturisticCard
          onClick={() => {
            openLinkInNewTab("https://github.com/GustavoRCarvalho")
          }}
          borderColor="#0099ff"
          image={image3}
          Logo={GitIcon}
          isLink={true}
        />

        <FuturisticCard
          onClick={() => {
            openLinkInNewTab("https://www.linkedin.com/in/gustavo-carvalho-0/")
          }}
          borderColor="#5be6ff"
          image={image1}
          Logo={LinkedinIcon}
          isLink={true}
        />
        <FuturisticCard
          onClick={() => {
            navigator.clipboard.writeText("gustavorafaeldecarvalho@gmail.com")
          }}
          borderColor="#ff814f"
          image={image2}
          Logo={MailIcon}
          isCopy={true}
        />
      </CardsContainer>
    </ContentLimiter>
  )
}

const ContactTitle = styled.h2`
  color: var(--color);
  margin-block: 1em;
`

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const LinkedinIcon = styled(BiLogoLinkedinSquare)`
  width: ${(props) => (props.$active ? "3em" : "4em")};
  height: ${(props) => (props.$active ? "3em" : "4em")};

  color: #fff;
  transition: 250ms;
`

const GitIcon = styled(FaGithub)`
  width: ${(props) => (props.$active ? "3em" : "4em")};
  height: ${(props) => (props.$active ? "3em" : "4em")};

  color: #fff;
  transition: 250ms;
`

const MailIcon = styled(AiFillMail)`
  width: ${(props) => (props.$active ? "3em" : "4em")};
  height: ${(props) => (props.$active ? "3em" : "4em")};

  color: #fff;
  transition: 250ms;
`
