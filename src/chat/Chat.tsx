import React, { useState } from "react"
import { makeStyles, createStyles } from "@material-ui/core"
import Body from "./Body"
import Header from "./Header"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "400px",
      position: "fixed",
      right: 10,
      bottom: 10,
      border: "solid 1px grey",
      borderRadius: "3px",
      zIndex: theme.zIndex.speedDial,
      backgroundColor: theme.palette.grey[200],
    },
  }),
)

const Chat = (): JSX.Element => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={classes.root}>
      <Header onClick={() => setIsOpen(!isOpen)} />
      <Body isOpen={isOpen} />
    </div>
  )
}

export default Chat
