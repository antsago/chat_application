import React from "react"
import SendIcon from "@material-ui/icons/Send"
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core"

const Input = (): JSX.Element => (
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
)

export default Input
