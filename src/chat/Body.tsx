import React from "react"
import { makeStyles, createStyles, Grid, Collapse } from "@material-ui/core"
import {
  Message as MessageType,
  SendMessage,
  MarkMessageAsRead,
} from "./MessengerHook"
import Input from "./Input"
import Message from "./Message"

const useStyles = makeStyles((theme) =>
  createStyles({
    body: {
      padding: theme.spacing(1),
      height: "calc(100vh - 150px)",
      overflow: "scroll",
    },
  }),
)

interface Props {
  isOpen: boolean
  messages: MessageType[]
  sendMessage: SendMessage
  markAsRead: MarkMessageAsRead
}

const Body = ({
  isOpen,
  messages,
  sendMessage,
  markAsRead,
}: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <Collapse in={isOpen}>
      <Grid container className={classes.body}>
        {messages.map((m) => (
          <Message key={m.id} message={m} onRead={markAsRead} />
        ))}
      </Grid>
      <Input sendMessage={sendMessage} />
    </Collapse>
  )
}

export default Body
