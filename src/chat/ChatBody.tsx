import React from "react"
import { makeStyles, createStyles, Grid, Collapse, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"
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
      <FormControl variant="outlined">
        <InputLabel htmlFor="new-message">Send message</InputLabel>
        <OutlinedInput
          id="new-message"
          type="text"
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="Send the message" edge="end">
                <SendIcon />
              </IconButton>
            </InputAdornment>
          }
          label="Send message"
        />
      </FormControl>
    </Collapse>
  )
}

export default ChatBody
