import React, { useState } from "react"
import { makeStyles, createStyles, Grid, Collapse } from "@material-ui/core"
import Input from "./Input"
import initialMessages from "./initialMessages.json"

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
}

const ChatBody = ({ isOpen }: Props): JSX.Element => {
  const classes = useStyles()
  const [messages, setMessages] = useState(initialMessages)

  return (
    <Collapse in={isOpen}>
      <Grid container className={classes.body}>
        {messages.map((message) => (
          <Grid key={message.id} item xs={12}>
            {message.text}
          </Grid>
        ))}
      </Grid>
      <Input
        sendMessage={(text) =>
          setMessages([
            ...messages,
            {
              id: 1000,
              direction: "out",
              status: "sent",
              text,
              timestamp: String(Date.now()),
            },
          ])
        }
      />
    </Collapse>
  )
}

export default ChatBody
