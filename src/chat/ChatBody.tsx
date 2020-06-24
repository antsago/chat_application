import React from "react"
import { makeStyles, createStyles, Grid, Collapse } from "@material-ui/core"

const useStyles = makeStyles((theme) =>
  createStyles({
    body: {
      padding: theme.spacing(1),
      minHeight: "calc(100vh - 75px)",
    },
  }),
)

interface Props {
  isOpen: boolean
}

const ChatBody = ({ isOpen }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <Collapse in={isOpen}>
      <Grid container className={classes.body} direction="column">
        <Grid item>Hello?</Grid>
        <Grid item>Hi!</Grid>
      </Grid>
    </Collapse>
  )
}

export default ChatBody
