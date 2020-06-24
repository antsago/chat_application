import React, { useState } from "react"
import { makeStyles, createStyles, Grid, Collapse } from "@material-ui/core"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      minWidth: "400px",
      position: "fixed",
      right: 10,
      bottom: 10,
      border: "solid 1px grey",
      borderRadius: "3px",
      zIndex: theme.zIndex.speedDial,
      backgroundColor: theme.palette.grey[200],
    },
    title: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.getContrastText(theme.palette.primary.main),
      padding: theme.spacing(1),
      textAlign: "center",
    },
    body: {
      padding: theme.spacing(1),
      minHeight: "calc(100vh - 75px)",
    },
  }),
)

const Chat = (): JSX.Element => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => setIsOpen(!isOpen)

  return (
    <div className={classes.root}>
      <div
        className={classes.title}
        onClick={toggleChat}
        onKeyDown={toggleChat}
        role="button"
        tabIndex={0}
      >
        Chat
      </div>
      <Collapse in={isOpen}>
        <Grid container className={classes.body} direction="column">
          <Grid item>Hello?</Grid>
          <Grid item>Hi!</Grid>
        </Grid>
      </Collapse>
    </div>
  )
}

export default Chat
