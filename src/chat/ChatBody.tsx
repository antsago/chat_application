import React from "react"
import { makeStyles, createStyles, Grid } from "@material-ui/core"

const useStyles = makeStyles((theme) =>
  createStyles({
    body: {
      padding: theme.spacing(1),
      minHeight: "calc(100vh - 75px)",
    },
  }),
)

const ChatBody = (): JSX.Element => {
  const classes = useStyles()

  return (
    <Grid container className={classes.body} direction="column">
      <Grid item>Hello?</Grid>
      <Grid item>Hi!</Grid>
    </Grid>
  )
}

export default ChatBody
