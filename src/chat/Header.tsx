import React from "react"
import { makeStyles, createStyles, Badge, Typography } from "@material-ui/core"
import ChatIcon from "@material-ui/icons/Chat"

const useStyles = makeStyles((theme) =>
  createStyles({
    header: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.getContrastText(theme.palette.primary.main),
      padding: theme.spacing(2),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      marginRight: theme.spacing(2),
    },
  }),
)

interface Props {
  unreadMessagesNo: number
  onClick: () => void
}

const ChatHeader = ({ unreadMessagesNo, onClick }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <div
      className={classes.header}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
    >
      <Typography className={classes.title}>Chat</Typography>

      <Badge badgeContent={unreadMessagesNo} color="secondary">
        <ChatIcon fontSize="small" />
      </Badge>
    </div>
  )
}

export default ChatHeader
