import React from "react"
import { makeStyles, createStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.getContrastText(theme.palette.primary.main),
      padding: theme.spacing(1),
      textAlign: "center",
      minWidth: "400px",
      position: "fixed",
      right: 0,
      bottom: 0,
    },
  }),
)

const Chat = (): JSX.Element => {
  const classes = useStyles()
  return <div className={classes.title}>Chat</div>
}

export default Chat
