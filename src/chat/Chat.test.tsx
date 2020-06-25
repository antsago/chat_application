import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Chat from "./Chat"

describe("Chat", () => {
  test("Displays unread messages", () => {
    const { getByText } = render(<Chat />)

    expect(getByText("47")).toBeVisible()
  })

  test("Opens on click", () => {
    const { queryByLabelText, getByText } = render(<Chat />)

    expect(queryByLabelText("Send message")).not.toBeVisible()

    userEvent.click(getByText("Chat"))

    expect(queryByLabelText("Send message")).toBeVisible()
  })

  test("Closes on click", async () => {
    const { queryByLabelText, getByText } = render(<Chat />)
    userEvent.click(getByText("Chat"))
    expect(queryByLabelText("Send message")).toBeVisible()

    userEvent.click(getByText("Chat"))

    await waitFor(() =>
      expect(queryByLabelText("Send message")).not.toBeVisible(),
    )
  })

  test("Sends message", async () => {
    const { queryByLabelText, getByText } = render(<Chat />)
    userEvent.click(getByText("Chat"))
    const newMessage = "New message"

    await userEvent.type(queryByLabelText("Send message"), newMessage)
    userEvent.click(queryByLabelText("Send the message"))

    await waitFor(() => expect(getByText(newMessage)).toBeVisible())
    expect(queryByLabelText("Send message")).toHaveAttribute("value", "")
  })
})
