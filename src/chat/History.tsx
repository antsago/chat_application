// Ideally the message history should be virtualized, I tried with react-window, but couldn't get
// it to work within a reasonable timeframe :(

import React, { useRef, RefObject } from "react"
import { makeStyles, createStyles, Grid } from "@material-ui/core"
import { Message as MessageType, MarkMessageAsRead } from "./MessengerHooks"
import Message from "./Message"

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

const useGoToUnreadMessage = (
  messages: MessageType[],
): [number, RefObject<HTMLDivElement>, () => void] => {
  const unreadMessage = messages.find(
    (m) => m.direction === "in" && m.status === "received",
  )

  const messageRef = useRef<HTMLDivElement>()
  const goToMessage = () => {
    messageRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  return [unreadMessage.id, messageRef, goToMessage]
}

const History = ({ messages, markAsRead }: Props): JSX.Element => {
  const classes = useStyles()
  const [unreadMessageId, messageRef, goToMessage] = useGoToUnreadMessage(
    messages,
  )

  return (
    <Grid container className={classes.root} spacing={2}>
      <button onClick={goToMessage} type="button">Hi!</button>
      {messages.map((m) => (
        <Message
          key={m.id}
          message={m}
          onRead={markAsRead}
          reference={m.id === unreadMessageId ? messageRef : undefined}
        />
      ))}
    </Grid>
  )
}

export default History
