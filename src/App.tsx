import React from "react"
import { CssBaseline, ThemeProvider } from "@material-ui/core"
import theme from "./theme"
import Page from "./Page"

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Page />
  </ThemeProvider>
)

export default App
