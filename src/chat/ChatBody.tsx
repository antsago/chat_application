import React from "react"
import { makeStyles, createStyles, Grid, Collapse } from "@material-ui/core"
import messages from "./initialMessages.json"

const useStyles = makeStyles((theme) =>
  createStyles({
    body: {
      padding: theme.spacing(1),
      height: "calc(100vh - 75px)",
      overflow: "scroll",
    },
  }),
)

interface Props {
  isOpen: boolean
}

const ChatBody = ({ isOpen }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <Collapse in={isOpen}>
      <Grid container className={classes.body}>
        {messages.map((message) => (
          <Grid key={message.id} item xs={12}>
            {message.text}
          </Grid>
        ))}
      </Grid>
    </Collapse>
  )
}

export default ChatBody
