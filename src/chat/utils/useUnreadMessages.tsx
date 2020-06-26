import { useMemo, RefObject, useRef } from "react"
import { Message, GoToMessage } from "./types"

export const useUnreadMessageNo = (messages: Message[]): number =>
  useMemo(
    () =>
      messages.filter((m) => m.direction === "in" && m.status === "received")
        .length,
    [messages],
  )

type ReturnType = [Message, RefObject<HTMLDivElement>, GoToMessage]

export const useGoToUnreadMessage = (messages: Message[]): ReturnType => {
  const messageRef = useRef<HTMLDivElement>()
  const goToMessage = () => {
    messageRef.current.scrollIntoView(false)
  }
  const unreadMessage = messages.find(
    (m) => m.direction === "in" && m.status === "received",
  )

  return [unreadMessage, messageRef, goToMessage]
}
