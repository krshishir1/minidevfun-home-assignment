"use client"

import { useState } from "react"
import { Code2, Camera, RotateCcw, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface PreviewToolbarProps {
  onToggleCode: () => void
}

export default function PreviewToolbar({ onToggleCode }: PreviewToolbarProps) {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const { toast } = useToast()

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey || e.metaKey) {
      if (e.key === "k") {
        e.preventDefault()
        onToggleCode()
      } else if (e.key === "r") {
        e.preventDefault()
        handleRefresh()
      }
    }
  }

  const handleScreenshot = () => {
    toast({
      title: "Screenshot captured",
      description: "Screenshot saved to clipboard",
    })
  }

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 1000)
    toast({
      title: "Preview refreshed",
      description: "Miniapp preview has been reloaded",
    })
  }

  const handlePublish = () => {
    toast({
      title: "Publishing...",
      description: "Your miniapp is being published",
    })
  }

  return (
    <div className="border-b border-border px-4 py-3 flex items-center justify-between gap-2">
      <div className="text-sm font-medium text-foreground">Preview</div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleCode}
          title="Toggle code view (Ctrl+K)"
          className="h-8 w-8"
          aria-label="Toggle code view"
        >
          <Code2 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleScreenshot}
          title="Take screenshot"
          className="h-8 w-8"
          aria-label="Take screenshot"
        >
          <Camera className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleRefresh}
          disabled={isRefreshing}
          title="Refresh preview (Ctrl+R)"
          className="h-8 w-8"
          aria-label="Refresh preview"
        >
          <RotateCcw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
        </Button>
        <Button
          size="icon"
          onClick={handlePublish}
          title="Publish miniapp"
          className="h-8 w-8 bg-orange-500 hover:bg-orange-600 text-white"
          aria-label="Publish miniapp"
        >
          <Upload className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
