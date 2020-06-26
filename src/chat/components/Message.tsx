import React, { RefObject } from "react"
import VisibilitySensor from "react-visibility-sensor"
import {
  Grid,
  Card,
  Typography,
  makeStyles,
  createStyles,
} from "@material-ui/core"
import { Message as MessageType } from "./utils"
import MetaInfo from "./MetaInfo"

interface Props {
  message: MessageType
  onRead: (messageId: number) => void
  reference?: RefObject<HTMLDivElement>
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
        display: "flex",
        flexWrap: "wrap",
      }
    },
  }),
)

const Message = ({ message, onRead, reference }: Props): JSX.Element => {
  const classes = useStyles(message)

  return (
    <VisibilitySensor
      offset={{ bottom: 75 }}
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
      <Grid item className={classes.row} ref={reference}>
        <Card className={classes.message} elevation={5}>
          <Typography>{message.text}</Typography>
          <MetaInfo message={message} />
        </Card>
      </Grid>
    </VisibilitySensor>
  )
}

export default Message
