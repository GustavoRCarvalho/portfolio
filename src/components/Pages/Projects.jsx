import { ContentLimiter } from "../Common/ContentLimit"
import codenamesImage2 from "../../assets/images/codenamesImage2.png"
import loljatemplate1 from "../../assets/images/loljatemplateimage1.png"
import loginImage1 from "../../assets/images/loginImage1.png"
import shoppinglist1 from "../../assets/images/shopping-list1.png"
import ecommerceredux1 from "../../assets/images/ecommercereduximage1.png"
import { NewCard } from "../Card/NewCard"
import { styled } from "styled-components"
import { LayoutGroup } from "framer-motion"

export const Projects = () => {
  return (
    <ContentLimiter>
      <TechnologiesTitle>Projetos</TechnologiesTitle>
      <CardContainer>
        <NewCard
          title={"Lolja - Réplica"}
          about={
            "Neste projeto, desenvolvi uma réplica completa do famoso e-commerce geek 'https://www.lolja.com.br/' utilizando tecnologias modernas. Combinando React, Styled-Components, React Router, Redux e outras bibliotecas, criei uma experiência de compra imersiva, responsiva e envolvente para os usuários."
          }
          href={"https://lolja.gustavocarvalho.dev.br/"}
          gitHref={"https://github.com/GustavoRCarvalho/lolja-template"}
          image={loljatemplate1}
        />
        <NewCard
          title={"Logins Animate"}
          about={
            "Um projeto para testar designs inovadores, aplicar estilos e tecnologias atuais em simples telas de logins. Convido a visitar essa sequencia de logins e experimentar os designs que desenvolvi."
          }
          href={"https://loginanimate.gustavocarvalho.dev.br/"}
          gitHref={"https://github.com/GustavoRCarvalho/login-animate"}
          image={loginImage1}
        />
        <NewCard
          title={"Guess The Word - Game"}
          about={
            "Para este projeto, recriei o clássico jogo de tabuleiro Codenames em uma versão digital. Para isso as tecnologias usadas foram: React, Vite, Styled-Components, React Router e sockets. O ponto chave desta versão do jogo é a possíbilidade de jogar em uma única tela."
          }
          href={"https://guesstheword.gustavocarvalho.dev.br/"}
          gitHref={"https://github.com/GustavoRCarvalho/codenames-web"}
          image={codenamesImage2}
        />
        <NewCard
          title={"Shopping List - Estudos"}
          about={
            "Neste projeto, desenvolvi um site de criação, organização e compartilhamento de listas utilizando tecnologias modernas. Combinando React + Vite, Styled-Components, React Router e outras bibliotecas."
          }
          href={"https://shopping-list.gustavocarvalho.dev.br/list/lista%201"}
          gitHref={"https://github.com/GustavoRCarvalho/shopping-list"}
          image={shoppinglist1}
        />
        <NewCard
          title={"E-Commerce Template - Estudos de Redux"}
          about={
            "Um estudo de redux utilizando um template de E-commerce. Utilizando as tecnologias React, Styled-Components, React Router dentre outras biblitecas. Confira no link abaixo."
          }
          href={"https://ecommerceredux.gustavocarvalho.dev.br/roupas/todos"}
          gitHref={"https://github.com/GustavoRCarvalho/loja-redux"}
          image={ecommerceredux1}
        />
      </CardContainer>
    </ContentLimiter>
  )
}

const CardContainer = styled(LayoutGroup)``

const TechnologiesTitle = styled.h2`
  color: var(--color);
  margin-block: 1em;
`
