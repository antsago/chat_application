import React from "react"
import VisibilitySensor from "react-visibility-sensor"
import {
  Grid,
  Card,
  Typography,
  makeStyles,
  createStyles,
} from "@material-ui/core"
import { Message as MessageType } from "./MessengerHook"

const useStyles = makeStyles(() =>
  createStyles({
    row: {
      width: "100%",
    },
  }),
)

interface Props {
  message: MessageType
  onRead: (messageId: number) => void
}

const Message = ({ message, onRead }: Props): JSX.Element => {
  const classes = useStyles()

  return (
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
      <Grid item className={classes.row}>
        <Card>
          <Typography>{message.text}</Typography>
        </Card>
      </Grid>
    </VisibilitySensor>
  )
}

export default Message
