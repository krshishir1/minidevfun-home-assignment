"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const IDEA_PILLS = ["Launchpad", "Betting Game", "Quiz"]

export default function Hero() {
  const [idea, setIdea] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!idea.trim()) {
      setError("Tell us your idea to get started.")
      return
    }

    setError("")
    // Trigger login flow and redirect to app
    window.location.href = `https://app.minidev.fun?idea=${encodeURIComponent(idea)}`
  }

  const handlePillClick = (pill: string) => {
    setIdea(`Create a ${pill.toLowerCase()} for music artist tokens`)
    setError("")
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e as any)
    }
  }

  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
          Build viral miniapps on Farcaster
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-balance mb-12">
          Create miniapps with a single prompt—no coding required.
        </p>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="relative max-w-3xl mx-auto">
            <div className="relative rounded-xl border border-border bg-card shadow-lg overflow-hidden focus-within:ring-2 focus-within:ring-ring transition-all">
              <textarea
                value={idea}
                onChange={(e) => {
                  setIdea(e.target.value)
                  setError("")
                }}
                onKeyDown={handleKeyDown}
                placeholder="Create a launchpad for music artist tokens"
                className="w-full px-6 py-5 pr-32 bg-transparent text-foreground placeholder:text-muted-foreground resize-none focus:outline-none min-h-[120px] md:min-h-[140px] text-base md:text-lg"
                rows={3}
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
            {error && <p className="text-destructive text-sm mt-2 text-left">{error}</p>}
          </div>
        </form>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground">Popular:</span>
          {IDEA_PILLS.map((pill) => (
            <button
              key={pill}
              onClick={() => handlePillClick(pill)}
              className="px-4 py-2 rounded-full bg-muted hover:bg-accent text-sm font-medium text-foreground transition-colors"
            >
              {pill}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
