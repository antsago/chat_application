import React, { useState } from "react"
import SendIcon from "@material-ui/icons/Send"
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  makeStyles,
  createStyles,
} from "@material-ui/core"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing(2),
    },
  }),
)

interface Props {
  sendMessage: (text: string) => void
}

const Input = ({ sendMessage }: Props): JSX.Element => {
  const [message, setMessage] = useState("")

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    sendMessage(message)
    setMessage("")
  }

  const classes = useStyles()

  return (
    <form onSubmit={onSubmit}>
      <FormControl
        variant="outlined"
        className={classes.root}
        color="secondary"
      >
        <InputLabel htmlFor="new-message">Send message</InputLabel>
        <OutlinedInput
          id="new-message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          color="secondary"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Send the message"
                edge="end"
                type="submit"
                color="secondary"
              >
                <SendIcon />
              </IconButton>
            </InputAdornment>
          }
          label="Send message"
        />
      </FormControl>
    </form>
  )
}
export default Input
