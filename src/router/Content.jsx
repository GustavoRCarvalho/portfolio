import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import { Projects } from "../components/Pages/Projects"
import { Home } from "../components/Pages/Home"

export const Content = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<div>Contato</div>}></Route>
      </Routes>
    </MainContainer>
  )
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
