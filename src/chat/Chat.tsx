import React, { useState } from "react"
import { makeStyles, createStyles } from "@material-ui/core"
import ChatBody from "./ChatBody"

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
      <ChatBody isOpen={isOpen} />
    </div>
  )
}

export default Chat
