import React from "react"
import { makeStyles, createStyles, IconButton } from "@material-ui/core"
import ArrowIcon from "@material-ui/icons/DoubleArrowRounded"
import { GoToMessage } from "./MessengerHooks"

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      position: "absolute",
      bottom: 80,
      right: 10,
    },
    icon: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
      transform: "rotate(90deg)",
      borderRadius: "50%",
      padding: "2px",
    },
  }),
)

interface Props {
  onClick: GoToMessage
}

const GoToButton = ({ onClick }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <IconButton
      className={classes.button}
      onClick={onClick}
      aria-label="Go to unread message"
      type="button"
    >
      <ArrowIcon className={classes.icon} />
    </IconButton>
  )
}

export default GoToButton
