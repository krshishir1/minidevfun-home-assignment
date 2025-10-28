"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

type TimeFrame = "today" | "week" | "all"

const MOCK_DATA = [
  { rank: 1, name: "TokenLaunch Pro", creator: "@cryptodev", volume: "$12.5K", mini: "450" },
  { rank: 2, name: "NFT Betting Arena", creator: "@betmaster", volume: "$9.8K", mini: "380" },
  { rank: 3, name: "Music Quiz Battle", creator: "@quizking", volume: "$7.2K", mini: "290" },
  { rank: 4, name: "Artist Token Hub", creator: "@musicfan", volume: "$5.6K", mini: "220" },
  { rank: 5, name: "Prediction Market", creator: "@trader99", volume: "$4.3K", mini: "180" },
]

export default function Leaderboard() {
  const [timeFrame, setTimeFrame] = useState<TimeFrame>("week")

  return (
    <section className="container mx-auto px-4 py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Earn $MINI for the apps you launch</h2>
          <p className="text-lg text-muted-foreground">Top miniapp creators get weekly $MINI rewards.</p>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          <Button
            variant={timeFrame === "today" ? "default" : "outline"}
            onClick={() => setTimeFrame("today")}
            className={timeFrame === "today" ? "bg-primary hover:bg-primary/90" : ""}
          >
            Today
          </Button>
          <Button
            variant={timeFrame === "week" ? "default" : "outline"}
            onClick={() => setTimeFrame("week")}
            className={timeFrame === "week" ? "bg-primary hover:bg-primary/90" : ""}
          >
            This Week
          </Button>
          <Button
            variant={timeFrame === "all" ? "default" : "outline"}
            onClick={() => setTimeFrame("all")}
            className={timeFrame === "all" ? "bg-primary hover:bg-primary/90" : ""}
          >
            All-time
          </Button>
        </div>

        <Card className="overflow-hidden">
          {/* Desktop view */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Rank</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Miniapp</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Creator</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">24h Volume</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">MINI Earned</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {MOCK_DATA.map((item) => (
                  <tr key={item.rank} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-semibold text-lg">{item.rank}</span>
                    </td>
                    <td className="px-6 py-4 font-medium">{item.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">{item.creator}</td>
                    <td className="px-6 py-4 font-semibold">{item.volume}</td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-secondary">{item.mini} $MINI</span>
                    </td>
                    <td className="px-6 py-4">
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                        Try
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile view */}
          <div className="md:hidden divide-y divide-border">
            {MOCK_DATA.map((item) => (
              <div key={item.rank} className="p-4 hover:bg-muted/30 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-lg text-muted-foreground">#{item.rank}</span>
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm text-muted-foreground">{item.creator}</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 -mt-1">
                    Try
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </div>
                <div className="flex items-center justify-between text-sm mt-3">
                  <span className="text-muted-foreground">
                    24h: <span className="font-semibold text-foreground">{item.volume}</span>
                  </span>
                  <span className="font-semibold text-secondary">{item.mini} $MINI</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
