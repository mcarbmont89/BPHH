"use client"

import { useState } from "react"
import { useChat } from "@ai-sdk/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { X } from "lucide-react"

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, t } = useLanguage()
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content:
          language === "es"
            ? "Hola, soy el asistente virtual de Botic Partners. ¿En qué puedo ayudarte hoy?"
            : "Hello, I'm the Botic Partners virtual assistant. How can I help you today?",
      },
    ],
  })

  if (!isOpen) {
    return (
      <Button onClick={() => setIsOpen(true)} className="fixed bottom-4 right-4 bg-primary hover:bg-primary/90">
        AI Assistant
      </Button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden">
      <div className="flex items-center justify-between p-3 border-b">
        <h2 className="text-sm font-semibold">AI Assistant</h2>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => setIsOpen(false)}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-3 max-h-[400px]">
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`rounded-lg p-2 max-w-[85%] text-sm ${
                m.role === "user" ? "bg-[#7C3AED] text-white" : "bg-gray-100 text-gray-800"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-3 border-t">
        <div className="flex space-x-2">
          <Input value={input} onChange={handleInputChange} placeholder="Type your message..." className="text-sm" />
          <Button type="submit" size="sm" className="bg-[#7C3AED] hover:bg-[#7C3AED]/90">
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}
