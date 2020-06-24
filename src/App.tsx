import React from "react"
import { CssBaseline, ThemeProvider } from "@material-ui/core"
import appTheme from "./theme"
import Page from "./Page"
import Chat from "./Chat"

const App = (): JSX.Element => (
  <ThemeProvider theme={appTheme}>
    <CssBaseline />
    <Page />
    <Chat />
  </ThemeProvider>
)

export default App
