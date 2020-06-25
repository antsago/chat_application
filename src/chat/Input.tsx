import React, { useState } from "react"
import SendIcon from "@material-ui/icons/Send"
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core"

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

  return (
    <form onSubmit={onSubmit}>
      <FormControl variant="outlined">
        <InputLabel htmlFor="new-message">Send message</InputLabel>
        <OutlinedInput
          id="new-message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Send the message"
                edge="end"
                type="submit"
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
