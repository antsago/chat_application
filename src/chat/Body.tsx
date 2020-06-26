import React from "react"
import { makeStyles, createStyles, Collapse, Box } from "@material-ui/core"
import { Message as MessageType, SendMessage, MarkMessageAsRead } from "./utils"
import { Input, History } from "./components"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      paddingTop: theme.spacing(1),
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
        <History messages={messages} markAsRead={markAsRead} />
        <Input sendMessage={sendMessage} />
      </Box>
    </Collapse>
  )
}

export default Body
