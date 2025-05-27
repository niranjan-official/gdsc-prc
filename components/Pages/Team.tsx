"use client"
import { GridBackground } from "../ui/GridBackground"
import SlowFade from "@/Animations/SlowFade"
import TimeLine from "../TimeLine"
import { DotBackground } from "../ui/DotBackground"

const Team = () => {
  return (
    <section id="team" className="min-h-screen flex flex-col items-center justify-center py-10 md:py-24 select-none">
      <DotBackground shadow>
        <div className="w-full mx-auto px-4">
          <div className="text-center mb-10 md:mb-20">
            <SlowFade>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-3 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 relative z-100">
                Our Team
              </h2>
            </SlowFade>

            <SlowFade delay={0.3}>
              <div className="max-w-2xl mx-auto">
                <p className="text-lg md:text-xl text-neutral-300 italic mb-2">
                  "Individually, we are one drop. Together, we are an ocean"
                </p>
                <p className="text-sm md:text-base text-neutral-400">- Ryunosuke Satoro</p>
              </div>
            </SlowFade>
          </div>

          <SlowFade delay={0.6}>
            <TimeLine />
          </SlowFade>
        </div>
      </DotBackground>
    </section>
  )
}

export default Team
