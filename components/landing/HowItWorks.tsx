import { Lightbulb, Sparkles, Rocket } from "lucide-react"

const STEPS = [
  {
    icon: Lightbulb,
    title: "Type an Idea",
    description: "Describe your idea in natural language.",
  },
  {
    icon: Sparkles,
    title: "We Generate Everything",
    description: "Smart contracts, UI, and miniapp are auto-generated. Iterate with AI.",
  },
  {
    icon: Rocket,
    title: "Launch & Earn",
    description: "Go live with a token and start earning $MINI.",
  },
]

export default function HowItWorks() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How it works</h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {STEPS.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}