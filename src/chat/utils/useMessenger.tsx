import { useState } from "react"
import { Message, SendMessage, MarkMessageAsRead } from "./types"
// In a production application this should be managed with
// some kind of global state (e.g. Redux). That would reduce
// interemdiate props but also add quite a bit of boilerplate.
// Here we'll just use a state hook and suffer the intermediate props.
import initialMessages from "./initialMessages.json"

type ReturnType = [Message[], SendMessage, MarkMessageAsRead]

export default function useMessenger(): ReturnType {
  const [messages, setMessages] = useState<Message[]>(
    initialMessages as Message[],
  )

  const sendMessage: SendMessage = (text) =>
    setMessages([
      ...messages,
      {
        id: Date.now(),
        direction: "out",
        status: "sent",
        text,
        timestamp: String(Date.now()),
      },
    ])

  const markAsRead: MarkMessageAsRead = (idRead) =>
    setMessages(
      messages.map((message) =>
        message.id === idRead ? { ...message, status: "read" } : message,
      ),
    )

  return [messages, sendMessage, markAsRead]
}
