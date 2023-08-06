import { Card } from "../Card"
import { ContentLimiter } from "../Common/ContentLimit"
import loljatemplate1 from "../../assets/images/loljatemplateimage1.png"
import loljatemplate2 from "../../assets/images/loljatemplateimage2.png"
import loljatemplate3 from "../../assets/images/loljatemplateimage3.png"
import loljatemplate4 from "../../assets/images/loljatemplateimage4.png"
import loljatemplate5 from "../../assets/images/loljatemplateimage5.png"
import ecommerceredux1 from "../../assets/images/ecommercereduximage1.png"
import ecommerceredux2 from "../../assets/images/ecommercereduximage2.png"
import ecommerceredux3 from "../../assets/images/ecommercereduximage3.png"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"

export const Projects = () => {
  return (
    <ContentLimiter>
      <Card.Background>
        <Card.TitleLink
          title={"Lolja - Réplica de Template"}
          href={"https://lolja.xn--gustavocarvalhoportflio-pjc.com.br/"}
        />
        <Card.ImageWrapper
          imagesList={[
            loljatemplate1,
            loljatemplate2,
            loljatemplate3,
            loljatemplate4,
            loljatemplate5,
          ]}
        ></Card.ImageWrapper>
      </Card.Background>
      <Card.Background>
        <Card.TitleLink
          title={"E-Commerce Template - Estudos de Redux"}
          href={
            "https://ecommerceredux.xn--gustavocarvalhoportflio-pjc.com.br/roupas/todos"
          }
        />
        <Card.ImageWrapper
          imagesList={[ecommerceredux1, ecommerceredux2, ecommerceredux3]}
          $bordercolor={"violet"}
        ></Card.ImageWrapper>
      </Card.Background>
      <Card.GitLinkedin>
        <Card.Background $backgroundcolor={"#696969"}>
          <Card.TitleLink
            color={"#ffffffde"}
            title={"GitHub"}
            href={"https://github.com/GustavoRCarvalho"}
          >
            <AiOutlineGithub />
          </Card.TitleLink>
        </Card.Background>
        <Card.Background $backgroundcolor={"#1975ff"}>
          <Card.TitleLink
            color={"#ffffffde"}
            title={"Linkedin"}
            href={"https://www.linkedin.com/in/gustavo-carvalho-0/"}
          >
            <AiOutlineLinkedin />
          </Card.TitleLink>
        </Card.Background>
      </Card.GitLinkedin>
    </ContentLimiter>
  )
}
