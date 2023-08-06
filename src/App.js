import { BrowserRouter } from "react-router-dom"
import { Content } from "./router/Content"
import { Header } from "./components/Pages/Header"

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Content />
    </BrowserRouter>
  )
}
