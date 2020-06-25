import React from "react"
import {
  makeStyles,
  createStyles,
  Grid,
  Collapse,
  Box,
} from "@material-ui/core"
import {
  Message as MessageType,
  SendMessage,
  MarkMessageAsRead,
} from "./MessengerHook"
import Input from "./Input"
import Message from "./Message"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
    messages: {
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
      <Box className={classes.root}>
        <Grid container className={classes.messages} spacing={2}>
          {messages.map((m) => (
            <Message key={m.id} message={m} onRead={markAsRead} />
          ))}
        </Grid>
        <Input sendMessage={sendMessage} />
      </Box>
    </Collapse>
  )
}

export default Body
