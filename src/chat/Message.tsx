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

interface Props {
  message: MessageType
  onRead: (messageId: number) => void
}

const useStyles = makeStyles((theme) =>
  createStyles({
    row: {
      width: "100%",
    },
    message: (message: MessageType) => {
      const isIn = message.direction === "in"

      return {
        backgroundColor: isIn
          ? theme.palette.primary.light
          : theme.palette.secondary.light,
        padding: theme.spacing(1),
        color: theme.palette.common.white,
        width: "fit-content",
        maxWidth: "75%",
        marginLeft: isIn ? "unset" : "auto",
      }
    },
  }),
)

const Message = ({ message, onRead }: Props): JSX.Element => {
  const classes = useStyles(message)

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
        <Card className={classes.message} elevation={5}>
          <Typography>{message.text}</Typography>
        </Card>
      </Grid>
    </VisibilitySensor>
  )
}

export default Message
