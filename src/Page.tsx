import React from "react"
import {
  Container,
  makeStyles,
  createStyles,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: theme.palette.background.default,
    },
  }),
)

const Page = (): JSX.Element => {
  const classes = useStyles()

  return (
    <Container className={classes.content} maxWidth="md">
      <Typography component="h1" variant="h3">
        Presumably useful page.
      </Typography>
      <Typography variant="caption">Pssst, click the chat!</Typography>
    </Container>
  )
}

export default Page
