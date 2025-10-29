"use client"

import type React from "react"

import { useState } from "react"
import AppNavbar from "./AppNavbar"
import AppSidebar from "./AppSidebar"

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex flex-col h-screen bg-background">
      <AppNavbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1 overflow-hidden">
        <div
          className={`md:flex transition-all duration-300 overflow-hidden ${
            sidebarOpen ? "w-16" : "w-64"
          } border-r border-border bg-background flex-col`}
        >
          <AppSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>

        {/* Main content - flex-1 to take remaining space */}
        <div className="flex-1 overflow-hidden">{children}</div>
      </div>
    </div>
  )
}
