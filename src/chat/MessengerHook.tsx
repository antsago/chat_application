import { useState } from "react"
import initialMessages from "./initialMessages.json"

interface Message {
  id: number
  direction: "out" | "in"
  status: "sent" | "received" | "read"
  text: string
  timestamp: string
}

type ReturnType = [Message[], (text: string) => void]

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

export default useMessenger
