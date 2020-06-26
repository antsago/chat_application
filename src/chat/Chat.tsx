import React, { useState } from "react"
import { makeStyles, createStyles } from "@material-ui/core"
import Body from "./Body"
import Header from "./Header"
import { useUnreadMessageNo, useMessenger } from "./utils"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      border: "solid 1px grey",
      borderRadius: "3px",
      zIndex: theme.zIndex.speedDial,
      backgroundColor: theme.palette.common.white,
      position: "fixed",
      bottom: 0,
      width: "100%",
      [theme.breakpoints.up("md")]: {
        right: 0,
        width: "400px",
      },
    },
  }),
)

const Chat = (): JSX.Element => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, sendMessage, markAsRead] = useMessenger()
  const unreadMessagesNo = useUnreadMessageNo(messages)

  return (
    <div className={classes.root}>
      <Header
        onClick={() => setIsOpen(!isOpen)}
        unreadMessagesNo={unreadMessagesNo}
      />
      <Body
        isOpen={isOpen}
        messages={messages}
        sendMessage={sendMessage}
        markAsRead={markAsRead}
      />
    </div>
  )
}

export default Chat
