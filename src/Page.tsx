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
    },
  }),
)

const Page = (): JSX.Element => {
  const classes = useStyles()

  return (
    <Container className={classes.content} maxWidth="md">
      <Typography component="h1" variant="h3" align="center">
        Presumably useful page
      </Typography>
    </Container>
  )
}

export default Page
