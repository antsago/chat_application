// In a production application this should be managed with
// some kind of global state (e.g. Redux). That would reduce
// interemdiate props but also add quite a bit of boilerplate.
// Here we'll just use a state hook and suffer the intermediate props.

import { useState, useMemo, RefObject, useRef } from "react"
import initialMessages from "./initialMessages.json"

export interface Message {
  id: number
  direction: "out" | "in"
  status: "sent" | "received" | "read"
  text: string
  timestamp: string
}
export type SendMessage = (text: string) => void
export type MarkMessageAsRead = (id: number) => void
export type GoToMessage = () => void

type ReturnType = [Message[], SendMessage, MarkMessageAsRead]

export function useMessenger(): ReturnType {
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

export const useUnreadMessageNo = (messages: Message[]): number =>
  useMemo(
    () =>
      messages.filter((m) => m.direction === "in" && m.status === "received")
        .length,
    [messages],
  )

type GoToMessageReturn = [Message, RefObject<HTMLDivElement>, GoToMessage]

export const useGoToUnreadMessage = (
  messages: Message[],
): GoToMessageReturn => {
  const messageRef = useRef<HTMLDivElement>()
  const goToMessage = () => {
    messageRef.current.scrollIntoView(false)
  }
  const unreadMessage = messages.find(
    (m) => m.direction === "in" && m.status === "received",
  )

  return [unreadMessage, messageRef, goToMessage]
}
