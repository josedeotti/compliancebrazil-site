import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"
import { ValueProps } from "@/components/sections/ValueProps"
import { Services } from "@/components/sections/Services"
import { Technology } from "@/components/sections/Technology"
import { SocialProof } from "@/components/sections/SocialProof"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { FinalCTA } from "@/components/sections/FinalCTA"

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <ValueProps />
      <Services />
      <Technology />
      <SocialProof />
      <HowItWorks />
      <FinalCTA />
    </main>
  )
}
