"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

interface PromptBarProps {
  onSubmit: (idea: string) => void
  placeholder?: string
  className?: string
}

export default function PromptBar({ 
  onSubmit, 
  placeholder = "Create a launchpad for music artist tokens",
  className = ""
}: PromptBarProps) {
  const [idea, setIdea] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!idea.trim()) {
      setError("Tell us your idea to get started.")
      return
    }

    setError("")
    onSubmit(idea)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e as any)
    }
  }

  const handleIdeaChange = (value: string) => {
    setIdea(value)
    setError("")
  }

  return (
    <form onSubmit={handleSubmit} className={`mb-8 ${className}`}>
      <div className="relative max-w-3xl mx-auto">
        <div className="relative">
          <Input
            value={idea}
            onChange={(e) => handleIdeaChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            rows={3}
            error={error}
          />
          <div className="absolute bottom-4 right-4">
            <Button
              type="submit"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md"
            >
              Generate
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
