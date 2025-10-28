import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-foreground">
          Minidev
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="https://x.com/minidevfun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            X
          </Link>
          <Link
            href="https://farcaster.xyz/minidev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Farcaster
          </Link>
        </div>
      </div>
    </nav>
  )
}