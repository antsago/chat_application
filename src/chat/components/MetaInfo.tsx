import React from "react"
import { format } from "date-fns"
import DoneIcon from "@material-ui/icons/Done"
import DoneAllIcon from "@material-ui/icons/DoneAll"
import { Typography, makeStyles, createStyles } from "@material-ui/core"
import { Message as MessageType } from "./utils"

interface Props {
  message: MessageType
}

interface TickIconProps {
  message: MessageType
  className: string
}

const useStyles = makeStyles((theme) =>
  createStyles({
    text: {
      color: theme.palette.grey[300],
      fontSize: "0.7rem",
      textAlign: "right",
      whiteSpace: "nowrap",
      marginLeft: "auto",
      paddingLeft: "10px",
      alignSelf: "center",
    },
    icon: (message: MessageType) => ({
      fontSize: "1rem",
      verticalAlign: "text-bottom",
      marginLeft: "3px",
      color: message.status === "read" ? theme.palette.primary.dark : "inherit",
    }),
  }),
)

const TickIcon = ({ message, className }: TickIconProps): JSX.Element => {
  if (message.direction === "in") {
    return null
  }

  if (message.status === "sent") {
    return <DoneIcon className={className} />
  }

  return <DoneAllIcon className={className} />
}

const MetaInfo = ({ message }: Props): JSX.Element => {
  const classes = useStyles(message)

  return (
    <Typography className={classes.text}>
      {format(Number(message.timestamp), "dd/MM K:m aaaa")}
      <TickIcon message={message} className={classes.icon} />
    </Typography>
  )
}

export default MetaInfo
