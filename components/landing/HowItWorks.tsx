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
        <h2 className="text-4xl font-bold text-center mb-10">How it works</h2>
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative h-[300px] text-center flex-1 p-6 rounded-xl bg-white border shadow-md transition-transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-white mb-6 mx-auto">
                  <Icon className="w-10 h-10" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="mb-2 text-lg font-bold text-secondary">{`Step ${
                    index + 1
                  }`}</span>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {/* Arrow between steps, except last */}
                {/* {index < STEPS.length - 1 && (
                  <div className="hidden md:block absolute -right-5 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                    <svg width="44" height="44" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M5 12h14m0 0l-5-5m5 5l-5 5"
                        stroke="#F97316"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                )} */}
                {/* {index < STEPS.length - 1 && (
                  <div className="md:hidden flex justify-center mt-6">
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M12 5v14m0 0l-5-5m5 5l5-5"
                        stroke="#F97316"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                )} */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
