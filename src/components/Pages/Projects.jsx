import { ContentLimiter } from "../Common/ContentLimit"
import { NewCard } from "../Card/NewCard"
import { styled } from "styled-components"

export const Projects = () => {
  return (
    <ContentLimiter>
      <TechnologiesTitle>Projetos</TechnologiesTitle>
      <CardContainer>
        <NewCard
          title={"ITOA: Image to ASCII"}
          about={
            "Converte imagens em ASCII usando Vue + Vite e cálculos complexos de filtros com muita eficiência."
          }
          href={"https://itoa.gustavocarvalho.dev.br/"}
          gitHref={"https://github.com/GustavoRCarvalho/image-converter"}
          image={"/images/ITOA_Image.png"}
        />
        <NewCard
          title={"Lolja - Réplica"}
          about={
            "Réplica do famoso e-commerce geek Lolja utilizando React, Styled-Components, React Router, Redux, Restfull API calls e outras bibliotecas."
          }
          href={"https://lolja.gustavocarvalho.dev.br/"}
          gitHref={"https://github.com/GustavoRCarvalho/lolja-template"}
          image={"/images/loljatemplateimage1.png"}
        />
        <NewCard
          title={"Design Logins"}
          about={
            "Demonstração de designs inovadores aplicados em formulários de login."
          }
          href={"https://loginanimate.gustavocarvalho.dev.br/"}
          gitHref={"https://github.com/GustavoRCarvalho/login-animate"}
          image={"/images/loginImage1.png"}
        />
        <NewCard
          title={"New Desk"}
          about={
            "Edição de texto, organização de conteúdos e conexão com Google Drive para armazenar e compartilhar artigos."
          }
          href={"https://newdesk.gustavocarvalho.dev.br/"}
          gitHref={"https://github.com/GustavoRCarvalho/newdesk"}
          image={"/images/newdeskprint.png"}
        />
        <NewCard
          title={"Guess The Word - Game"}
          about={
            "Adaptação offline e online do jogo Codenames usando conexão de sockets para transmisão de dados."
          }
          href={"https://guesstheword.gustavocarvalho.dev.br/"}
          gitHref={"https://github.com/GustavoRCarvalho/codenames-web"}
          image={"/images/codenamesImage2.png"}
        />
        {/* <NewCard
          title={"Shopping List - Estudos"}
          about={
            "Neste projeto, desenvolvi um site de criação, organização e compartilhamento de listas utilizando tecnologias modernas. Combinando React + Vite, Styled-Components, React Router e outras bibliotecas."
          }
          href={"https://shopping-list.gustavocarvalho.dev.br/list/lista%201"}
          gitHref={"https://github.com/GustavoRCarvalho/shopping-list"}
          image={shoppinglist1}
        /> */}
        {/* <NewCard
          title={"E-Commerce Template - Estudos de Redux"}
          about={
            "Um estudo de redux utilizando um template de E-commerce. Utilizando as tecnologias React, Styled-Components, React Router dentre outras biblitecas. Confira no link abaixo."
          }
          href={"https://ecommerceredux.gustavocarvalho.dev.br/roupas/todos"}
          gitHref={"https://github.com/GustavoRCarvalho/loja-redux"}
          image={ecommerceredux1}
        /> */}
      </CardContainer>
    </ContentLimiter>
  )
}

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 1em;

  margin: 1em;
`

const TechnologiesTitle = styled.h2`
  color: var(--color);
  margin-block: 1em;
`
