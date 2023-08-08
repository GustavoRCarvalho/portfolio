import { ContentLimiter } from "../Common/ContentLimit"
import codenamesImage2 from "../../assets/images/codenamesImage2.png"
import loljatemplate1 from "../../assets/images/loljatemplateimage1.png"
import ecommerceredux1 from "../../assets/images/ecommercereduximage1.png"
import { NewCard } from "../Card/NewCard"

export const Projects = () => {
  return (
    <ContentLimiter>
      <NewCard
        title={"Lolja - Réplica"}
        about={
          "Neste projeto, desenvolvi uma réplica completa do famoso e-commerce geek 'https://www.lolja.com.br/' utilizando tecnologias modernas. Combinando React, Styled-Components, React Router, Redux e outras bibliotecas, criei uma experiência de compra imersiva, responsiva e envolvente para os usuários."
        }
        href={"https://lolja.xn--gustavocarvalhoportflio-pjc.com.br/"}
        gitHref={"https://github.com/GustavoRCarvalho/lolja-template"}
        image={loljatemplate1}
      />
      <NewCard
        title={"Guess The Word - Game"}
        about={
          "Para este projeto, recriei o clássico jogo de tabuleiro Codenames em uma versão digital. Para isso as tecnologias usadas foram: React, Vite, Styled-Components, React Router e sockets. O ponto chave desta versão do jogo é a possíbilidade de jogar em uma única tela."
        }
        href={"https://codenames-web.xn--gustavocarvalhoportflio-pjc.com.br/"}
        gitHref={"https://github.com/GustavoRCarvalho/codenames-web"}
        image={codenamesImage2}
      />
      <NewCard
        title={"E-Commerce Template - Estudos de Redux"}
        about={
          "Um estudo de redux utilizando um template de E-commerce. Utilizando as tecnologias React, Styled-Components, React Router dentre outras biblitecas. Confira no link abaixo."
        }
        href={
          "https://ecommerceredux.xn--gustavocarvalhoportflio-pjc.com.br/roupas/todos"
        }
        gitHref={"https://github.com/GustavoRCarvalho/loja-redux"}
        image={ecommerceredux1}
      />
    </ContentLimiter>
  )
}
