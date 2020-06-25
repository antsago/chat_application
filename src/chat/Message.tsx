import React from "react"
import { Grid } from "@material-ui/core"
import VisibilitySensor from "react-visibility-sensor"
import { Message as MessageType } from "./MessengerHook"

interface Props {
  message: MessageType
  onRead: (messageId: number) => void
}

const Message = ({ message, onRead }: Props): JSX.Element => (
  <VisibilitySensor
    onChange={(isVisible) => {
      if (
        isVisible &&
        message.direction === "in" &&
        message.status === "received"
      ) {
        onRead(message.id)
      }
    }}
  >
    <Grid item xs={12}>
      {message.text}
    </Grid>
  </VisibilitySensor>
)

export default Message
