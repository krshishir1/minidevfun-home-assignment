"use client";

import type React from "react";

import { useState } from "react";
import { Plus, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectAvatar } from "@/components/ui/avatar-gen";

interface Project {
  id: string;
  name: string;
  created: string;
}

const MOCK_PROJECTS: Project[] = [
  { id: "1", name: "Music Launchpad", created: "2 days ago" },
  { id: "2", name: "Betting Game", created: "1 week ago" },
  { id: "3", name: "Quiz Master", created: "2 weeks ago" },
];

interface AppSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (v: boolean) => void;
}

export default function AppSidebar({
  sidebarOpen,
  setSidebarOpen,
}: AppSidebarProps) {
  const [activeProject, setActiveProject] = useState("1");
  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex(Math.min(index + 1, MOCK_PROJECTS.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex(Math.max(index - 1, 0));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveProject(MOCK_PROJECTS[index].id);
    }
  };

  return (
    <div className={`flex flex-col h-full p-2 gap-2`}>
      <div className="flex items-center justify-between">
        {!sidebarOpen && (
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-lg"
            aria-label="Create new project"
            title="Create new project"
          >
            <Plus className="h-5 w-5" />
          </Button>
        )}

        {!sidebarOpen && (
          <div className="text-sm font-semibold text-foreground">Projects</div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-lg"
          aria-label={sidebarOpen ? "Expand sidebar" : "Collapse sidebar"}
          title={sidebarOpen ? "Expand" : "Collapse"}
          onClick={() => setSidebarOpen((v) => !v)}
        >
          {sidebarOpen ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Projects list */}
      <div
        className="flex-1 flex flex-col gap-1 overflow-auto"
        role="listbox"
        aria-label="Projects list"
      >
        {MOCK_PROJECTS.map((project, index) => {
          const isActive = activeProject === project.id;
          const isFocused = focusedIndex === index;
          return (
            <button
              key={project.id}
              onClick={() => setActiveProject(project.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onFocus={() => setFocusedIndex(index)}
              role="option"
              aria-selected={isActive}
              title={project.name}
              className={`h-10 ${
                sidebarOpen ? "w-10" : "w-full"
              } rounded-lg flex items-center gap-3 px-2 transition-colors outline-none ${
                isActive
                  ? `${!sidebarOpen ? 'bg-secondary' : 'bg-muted'} text-white`
                  : isFocused
                  ? "bg-muted/60 text-foreground"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <span className="inline-flex items-center justify-center">
                <ProjectAvatar seed={project.name} />
              </span>
              {!sidebarOpen && (
                <span className="truncate text-sm font-medium">
                  {project.name}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Settings button at bottom */}
      <Button
        variant="ghost"
        size="icon"
        className={`h-10 ${
          sidebarOpen ? "w-10 justify-center" : "w-full justify-start px-2"
        } rounded-lg gap-3`}
        aria-label="Settings"
        title="Settings"
      >
        <Settings className="h-5 w-5" />
        {!sidebarOpen && <span className="text-sm">Settings</span>}
      </Button>
    </div>
  );
}
