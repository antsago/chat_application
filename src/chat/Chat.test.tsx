import React from "react"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Chat from "./Chat"

describe("Chat", () => {
  test("Opens on click", () => {
    const { queryByLabelText, getByText } = render(<Chat />)

    expect(queryByLabelText("Send the message")).not.toBeVisible()

    userEvent.click(getByText("Chat"))

    expect(queryByLabelText("Send the message")).toBeVisible()
  })

  test("Closes on click", async () => {
    const { queryByLabelText, getByText } = render(<Chat />)
    userEvent.click(getByText("Chat"))
    expect(queryByLabelText("Send the message")).toBeVisible()

    userEvent.click(getByText("Chat"))
    // Wait for the chat to finish collapsing
    await new Promise((res) => setTimeout(res, 500))

    expect(queryByLabelText("Send the message")).not.toBeVisible()
  })
})
