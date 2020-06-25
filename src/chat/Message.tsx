import React from "react"
import { Grid } from "@material-ui/core"
import { Message as MessageType } from "./MessengerHook"

interface Props {
  message: MessageType
}

const Message = ({ message }: Props): JSX.Element => (
  <Grid key={message.id} item xs={12}>
    {message.text}
  </Grid>
)

export default Message
