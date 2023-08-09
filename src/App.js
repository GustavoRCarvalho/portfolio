import { BrowserRouter } from "react-router-dom"
import { Content } from "./router/Content"
import { Header } from "./components/Pages/Header"
import { ThemeProvider } from "styled-components"
import { themeColorized, themeUncolorized } from "./components/theme/theme"
import { useState } from "react"

export const App = () => {
  const [colorized, setColorized] = useState(false)

  return (
    <BrowserRouter>
      <ThemeProvider theme={colorized ? themeColorized : themeUncolorized}>
        <Header setColorized={setColorized} />
        <Content />
      </ThemeProvider>
    </BrowserRouter>
  )
}
