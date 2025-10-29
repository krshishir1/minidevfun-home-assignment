"use client"

import { useState } from "react"
import PreviewToolbar from "./PreviewToolbar"

interface PreviewPanelProps {
  projectId: string
}

export default function PreviewPanel({ projectId }: PreviewPanelProps) {
  const [showCode, setShowCode] = useState(false)

  return (
    <div className="hidden h-full lg:flex flex-col flex-1 bg-background border-l border-border overflow-hidden">
      <PreviewToolbar onToggleCode={() => setShowCode(!showCode)} />

      {/* iPhone Frame - takes remaining space */}
      <div className="flex-1 flex items-center justify-center p-4 bg-muted/30 overflow-auto">
        <div className="relative w-full max-w-xs">
          {/* iPhone Bezel */}
          <div className="bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-black">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10" />

            {/* Screen */}
            <div className="bg-background w-full aspect-video flex items-center justify-center relative">
              {showCode ? (
                <div className="w-full h-full p-4 bg-muted overflow-auto font-mono text-xs text-muted-foreground">
                  <pre>{`// Your miniapp code\nexport default function App() {\n  return (\n    <div>Your app here</div>\n  )\n}`}</pre>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                  <div className="text-sm text-muted-foreground mb-4">Miniapp Preview</div>
                  <div className="text-xs text-muted-foreground">Your miniapp will render here as you build it</div>
                </div>
              )}
            </div>
          </div>

          {/* Home Indicator */}
          <div className="flex justify-center mt-2">
            <div className="w-32 h-1 bg-black rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
