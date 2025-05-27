"use client"
import { GridBackground } from "../ui/GridBackground"
import SlowFade from "@/Animations/SlowFade"
import { Smartphone, Globe, Brain, Palette } from "lucide-react"
import { DotBackground } from "../ui/DotBackground"

const About = () => {
  const fields = [
    {
      title: "App Development",
      icon: Smartphone,
      gradient: "from-blue-400 to-blue-600",
      bgGradient: "from-blue-500/10 to-blue-600/5",
      borderGradient: "from-blue-500/30 to-blue-600/20",
      iconColor: "96 165 250", // blue-400 RGB
    },
    {
      title: "Web Development",
      icon: Globe,
      gradient: "from-green-400 to-green-600",
      bgGradient: "from-green-500/10 to-green-600/5",
      borderGradient: "from-green-500/30 to-green-600/20",
      iconColor: "74 222 128", // green-400 RGB
    },
    {
      title: "AI / ML",
      icon: Brain,
      gradient: "from-yellow-400 to-yellow-600",
      bgGradient: "from-yellow-500/10 to-yellow-600/5",
      borderGradient: "from-yellow-500/30 to-yellow-600/20",
      iconColor: "250 204 21", // yellow-400 RGB
    },
    {
      title: "UI / UX",
      icon: Palette,
      gradient: "from-orange-400 to-orange-600",
      bgGradient: "from-orange-500/10 to-orange-600/5",
      borderGradient: "from-orange-500/30 to-orange-600/20",
      iconColor: "251 146 60", // orange-400 RGB
    },
  ]

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center py-10 md:py-24 select-none">
      <DotBackground shadow>
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8 md:mb-20 text-center">
            <SlowFade>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 relative z-10">
                What We Do?
              </h2>
            </SlowFade>
            <SlowFade delay={0.3}>
              <p className="text-lg md:text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
                We at{" "}
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                  GDGC-PRC
                </span>{" "}
                are a passionate group of people who work towards bringing a change in the ecosystem of{" "}
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                  development
                </span>{" "}
                around the campus. We want to create a healthy environment for the budding developers to explore{" "}
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                  solutions
                </span>{" "}
                to real life problems and{" "}
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
                  promote
                </span>{" "}
                the developer culture.
              </p>
            </SlowFade>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {fields.map((field, index) => (
              <SlowFade key={index} delay={0.6 + index * 0.2}>
                <div
                  className={`group relative p-6 md:p-8 rounded-2xl border bg-gradient-to-br ${field.bgGradient} border-neutral-800 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-neutral-700 cursor-pointer`}
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div
                      className={`p-3 md:p-4 rounded-xl bg-gradient-to-br ${field.bgGradient} border border-neutral-700 group-hover:border-neutral-600 transition-all duration-300`}
                    >
                      <field.icon
                        className={`w-6 h-6 md:w-8 md:h-8 stroke-current`}
                        style={{ color: `rgb(${field.iconColor})` }}
                      />
                    </div>
                    <h3
                      className={`text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${field.gradient}`}
                    >
                      {field.title}
                    </h3>
                  </div>

                  {/* Subtle glow effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${field.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                  />
                </div>
              </SlowFade>
            ))}
          </div>
        </div>
      </DotBackground>
    </section>
  )
}

export default About
