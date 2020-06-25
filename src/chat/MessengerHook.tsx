// In a production application this should be managed with
// some kind of global state (e.g. Redux). That would reduce
// interemdiate props but also add quite a bit of boilerplate.
// Here we'll just use a state hook and suffer the intermediate props.

import { useState, useMemo } from "react"
import initialMessages from "./initialMessages.json"

export interface Message {
  id: number
  direction: "out" | "in"
  status: "sent" | "received" | "read"
  text: string
  timestamp: string
}
export type SendMessage = (text: string) => void

type ReturnType = [Message[], SendMessage]

function useMessenger(): ReturnType {
  const [messages, setMessages] = useState<Message[]>(
    initialMessages as Message[],
  )

  const sendMessage = (text: string) =>
    setMessages([
      ...messages,
      {
        id: 1000,
        direction: "out",
        status: "sent",
        text,
        timestamp: String(Date.now()),
      },
    ])

  return [messages, sendMessage]
}

export const useUnreadMessageNo = (messages: Message[]): number =>
  useMemo(
    () =>
      messages.filter((m) => m.direction === "in" && m.status === "received")
        .length,
    [messages],
  )

export default useMessenger
