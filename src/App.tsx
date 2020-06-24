import React from 'react'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from './theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div>Presumably useful page</div>
  </ThemeProvider>
)

export default App;
