import React from "react"
import { makeStyles, createStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) =>
  createStyles({
    header: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.getContrastText(theme.palette.primary.main),
      padding: theme.spacing(1),
      textAlign: "center",
    },
  }),
)

interface Props {
  onClick: () => void
}

const ChatHeader = ({ onClick }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <div
      className={classes.header}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
    >
      Chat
    </div>
  )
}

export default ChatHeader
