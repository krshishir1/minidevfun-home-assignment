"use client";

import { useState } from "react";
import PreviewToolbar from "./PreviewToolbar";
import ProjectExplorer from "./code-preview/ProjectExplorer";

interface PreviewPanelProps {
  projectId: string;
}

export default function PreviewPanel({ projectId }: PreviewPanelProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="hidden h-full lg:flex flex-col flex-1 bg-muted border-l border-border overflow-hidden">
      <PreviewToolbar onToggleCode={() => setShowCode(!showCode)} />

      {/* iPhone Frame - takes remaining space */}
      <div className="flex-1 flex items-center justify-center bg-muted/30 overflow-auto">
        {showCode ? (
          <div className="px-2 h-full w-full">
            <ProjectExplorer />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-full md:w-2/3">
              <div className="bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-black">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10" />

                <div className="bg-background w-full aspect-video flex items-center justify-center relative">
                  <div className="w-full h-full flex flex-col bg-blue-400 items-center justify-center p-4 text-center">
                    <div className="text-md text-white mb-4">
                      Miniapp Preview
                    </div>
                    <div className="text-xs text-white">
                      Your miniapp will render here as you build it
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <div className="w-32 h-1 bg-black rounded-full" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
