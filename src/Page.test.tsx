import React from "react"
import { render } from "@testing-library/react"
import Page from "./Page"

describe("Page", () => {
  test("Renders correctly", () => {
    const { getByText } = render(<Page />)

    expect(getByText("Presumably useful page.")).toBeInTheDocument()
    expect(getByText("Pssst, click the chat!")).toBeInTheDocument()
  })
})
