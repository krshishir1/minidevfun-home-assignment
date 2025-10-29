import { Lightbulb, Sparkles, Rocket } from "lucide-react";

const STEPS = [
  {
    icon: Lightbulb,
    title: "Type an Idea",
    description: "Describe your idea in natural language.",
  },
  {
    icon: Sparkles,
    title: "We Generate Everything",
    description:
      "Smart contracts, UI, and miniapp are auto-generated. Iterate with AI.",
  },
  {
    icon: Rocket,
    title: "Launch & Earn",
    description: "Go live with a token and start earning $MINI.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white/90 py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">How it works</h2>
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative h-[300px] text-center flex-1 p-6 pt-12 rounded-xl bg-white border shadow-md transition-transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-orange-500/10 text-primary mb-6 mx-auto">
                  <Icon size={32}  />
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="absolute -top-5 -left-5 text-lg bg-purple-500/90 text-white font-bold w-32 h-10 py-1 pt-2 rounded-lg">
                  <span>Step</span> {index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
