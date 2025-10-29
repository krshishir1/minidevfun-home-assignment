"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ChatPanel from "@/components/dashboard/ChatPanel";
import PreviewPanel from "@/components/dashboard/PreviewPanel";
import ProjectHeader from "@/components/dashboard/ProjectHeader";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const ideaParam = searchParams.get("idea");
  const [projectId, setProjectId] = useState("project-1");
  const [initialMessage, setInitialMessage] = useState<string | null>(null);

  useEffect(() => {
    if (ideaParam) {
      setInitialMessage(ideaParam);
    }
  }, [ideaParam]);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* <ProjectHeader projectId={projectId} /> */}

      <ResizablePanelGroup
        direction="horizontal"
        className="flex-1 flex overflow-hidden gap-0"
      >
        <ResizablePanel minSize={25} defaultSize={25} maxSize={40}>
          <ChatPanel initialMessage={initialMessage} projectId={projectId} />
        </ResizablePanel>
        <ResizableHandle className="bg-transparent" withHandle>
            
        </ResizableHandle>
        <ResizablePanel>
          <PreviewPanel projectId={projectId} />
        </ResizablePanel>
      </ResizablePanelGroup>
      {/* <div >
      </div> */}
    </div>
  );
}
