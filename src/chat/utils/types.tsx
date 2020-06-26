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
