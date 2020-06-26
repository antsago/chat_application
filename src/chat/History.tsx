import React from "react"
import { makeStyles, createStyles, Grid } from "@material-ui/core"
import { Message as MessageType, MarkMessageAsRead } from "./MessengerHook"
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

const History = ({ messages, markAsRead }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root} spacing={2}>
      {messages.map((m) => (
        <Message key={m.id} message={m} onRead={markAsRead} />
      ))}
    </Grid>
  )
}

export default History
