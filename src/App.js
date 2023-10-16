import { Header } from "./components/Pages/Header"
import { Provider } from "react-redux"
import store from "./store/store"
import { Home } from "./components/Pages/Home"

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Home />
    </Provider>
  )
}
