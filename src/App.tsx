import React from 'react'
import { CssBaseline, ThemeProvider, Container, makeStyles, createStyles, Typography } from '@material-ui/core'
import theme from './theme'

const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  }),
)

const App = () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Container className={classes.content} maxWidth="md">
          <Typography component="h1" variant="h3" align="center">
            Presumably useful page
          </Typography>
        </Container>
    </ThemeProvider>
  )
}

export default App;
