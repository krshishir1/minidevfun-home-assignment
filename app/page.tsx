import Navbar from "@/components/shared/Navbar"
import Hero from "@/components/landing/HeroSection"
import HowItWorks from "@/components/landing/HowItWorks"
import Leaderboard from "@/components/landing/Leaderboard"
import Footer from "@/components/shared/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Leaderboard />
      </main>
      <Footer />
    </div>
  )
}