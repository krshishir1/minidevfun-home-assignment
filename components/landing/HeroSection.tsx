"use client"

import PromptBar from "./PromptBar"
import IdeaChips from "./IdeaChips"

const IDEA_PILLS = ["Launchpad", "Betting Game", "Quiz"]

export default function Hero() {
  const handleSubmit = (idea: string) => {
    // Trigger login flow and redirect to app
    window.location.href = `https://app.minidev.fun?idea=${encodeURIComponent(idea)}`
  }

  const handlePillClick = (pill: string) => {
    // This will be handled by the PromptBar component
    const idea = `Create a ${pill.toLowerCase()} for music artist tokens`
    handleSubmit(idea)
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

        <PromptBar onSubmit={handleSubmit} />

        <IdeaChips 
          ideas={IDEA_PILLS} 
          onIdeaClick={handlePillClick} 
        />
      </div>
    </section>
  )
}
