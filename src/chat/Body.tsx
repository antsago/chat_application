import React from "react"
import { makeStyles, createStyles, Grid, Collapse } from "@material-ui/core"
import Input from "./Input"
import { Message, SendMessage } from "./MessengerHook"

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
  messages: Message[]
  sendMessage: SendMessage
}

const ChatBody = ({ isOpen, messages, sendMessage }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <Collapse in={isOpen}>
      <Grid container className={classes.body}>
        {messages.map((message) => (
          <Grid key={message.id} item xs={12}>
            {message.text}
          </Grid>
        ))}
      </Grid>
      <Input sendMessage={sendMessage} />
    </Collapse>
  )
}

export default ChatBody
