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
})
