import React from "react"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Chat from "./Chat"

describe("Chat", () => {
  test("Opens on click", () => {
    const { queryByText } = render(<Chat />)

    expect(queryByText("Hi!")).not.toBeVisible()

    userEvent.click(queryByText("Chat"))

    expect(queryByText("Hi!")).toBeVisible()
  })

  test("Closes on click", async () => {
    const { queryByText } = render(<Chat />)
    userEvent.click(queryByText("Chat"))
    expect(queryByText("Hi!")).toBeVisible()

    userEvent.click(queryByText("Chat"))
    // Wait for the chat to finish collapsing
    await new Promise((res) => setTimeout(res, 500))

    expect(queryByText("Hi!")).not.toBeVisible()
  })
})
