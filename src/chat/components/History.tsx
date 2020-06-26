// Ideally the message history should be virtualized, I tried with react-window, but couldn't get
// it to work within a reasonable timeframe :(

import React from "react"
import { makeStyles, createStyles, Grid } from "@material-ui/core"
import {
  Message as MessageType,
  MarkMessageAsRead,
  useGoToUnreadMessage,
} from "../utils"
import Message from "./Message"
import GoToButton from "./GoToButton"

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "calc(100vh - 175px)",
      overflow: "scroll",
    },
  }),
)

interface Props {
  messages: MessageType[]
  markAsRead: MarkMessageAsRead
}

const History = ({ messages, markAsRead }: Props): JSX.Element => {
  const classes = useStyles()
  const [unreadMessage, messageRef, goToMessage] = useGoToUnreadMessage(
    messages,
  )

  return (
    <Grid container className={classes.root} spacing={2}>
      {unreadMessage && <GoToButton onClick={goToMessage} />}
      {messages.map((m) => (
        <Message
          key={m.id}
          message={m}
          onRead={markAsRead}
          reference={
            unreadMessage && m.id === unreadMessage.id ? messageRef : undefined
          }
        />
      ))}
    </Grid>
  )
}

export default History
