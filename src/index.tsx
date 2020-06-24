/* eslint-disable */
import * as React from "react"
import * as ReactDOM from "react-dom"
import App from "./App"

// Parcel removes this when bundling for production
if (module.hot) {
  module.hot.accept()
}

const mountNode = document.getElementById("app")
ReactDOM.render(<App />, mountNode)
