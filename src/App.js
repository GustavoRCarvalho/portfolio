import { BrowserRouter } from "react-router-dom"
import { Content } from "./router/Content"
import { Header } from "./components/Pages/Header"
import { Provider } from "react-redux"
import store from "./store/store"

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Content />
      </Provider>
    </BrowserRouter>
  )
}
