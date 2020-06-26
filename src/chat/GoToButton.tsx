import React from "react"
import { makeStyles, createStyles } from "@material-ui/core"
import { GoToMessage } from "./MessengerHooks"

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "calc(100vh - 175px)",
      overflow: "scroll",
    },
  }),
)

interface Props {
  onClick: GoToMessage
}

const GoToButton = ({ onClick }: Props): JSX.Element => (
  <button onClick={onClick} type="button">Hi!</button>
)

export default GoToButton
