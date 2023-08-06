import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import { Projects } from "../components/Pages/Projects"

export default function Content() {
  return (
    <MainContainer>
      <Routes>
        {/* <Route path="/" element={<Menu />}></Route> */}
        <Route path="/" element={<Projects />}></Route>
      </Routes>
    </MainContainer>
  )
}

const MainContainer = styled.main`
  background-color: #222;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
