"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GridBackground } from "../ui/GridBackground"
import FadeUp from "@/Animations/FadeUp"
import GDSC from "../GDSC"
import { ChevronDown } from "lucide-react"

interface Faq {
  que: React.ReactNode
  ans: React.ReactNode
}

const faqs: Faq[] = [
  {
    que: (
      <>
        What is Google Developer Groups On Campus ( <GDSC /> ) ?
      </>
    ),
    ans: (
      <>
        <GDSC /> are university-based community groups for students interested in Google developer technologies,
        providing a platform to grow and build solutions together.
      </>
    ),
  },
  {
    que: (
      <>
        Who can join <GDSC /> ?
      </>
    ),
    ans: (
      <>
        <GDSC /> is open to all university students, regardless of major or technical skill level. Beginners and
        experienced developers are welcome.
      </>
    ),
  },
  {
    que: (
      <>
        How can I join a <GDSC /> chapter ?
      </>
    ),
    ans: (
      <>
        Join by finding your university's chapter through social media, the official website, or by attending events.
        Contact the leadership team for more info.
      </>
    ),
  },
  {
    que: (
      <>
        What kind of events does <GDSC /> organize?
      </>
    ),
    ans: (
      <>
        <GDSC /> organizes workshops, hackathons, speaker sessions, and study jams covering various tech topics,
        featuring industry professionals.
      </>
    ),
  },
  {
    que: (
      <>
        What are the benefits of joining <GDSC />?
      </>
    ),
    ans: (
      <>
        Gain technical skills, network with peers, work on impactful projects, enhance your resume, and gain leadership
        experience with <GDSC />.
      </>
    ),
  },
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="min-h-screen flex flex-col items-center justify-center py-10 md:py-24 select-none">
      {/* <GridBackground shadow> */}
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-8 md:mb-16 text-center">
            <FadeUp>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-3 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 relative z-10">
                FAQ
              </h2>
            </FadeUp>
            <FadeUp>
              <p className="text-base md:text-lg lg:text-xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-400 via-neutral-100 to-neutral-400">
                Find answers to common questions about our community
              </p>
            </FadeUp>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FadeUp key={index}>
                <div className="group relative border border-neutral-800 rounded-2xl overflow-hidden backdrop-blur-sm bg-neutral-900/20 hover:border-neutral-700 transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 md:p-6 lg:p-8 flex justify-between items-center text-left focus:outline-none group-hover:bg-neutral-800/10 transition-all duration-300"
                  >
                    <span className="text-base md:text-lg lg:text-xl font-semibold text-neutral-200 pr-4">
                      {faq.que}
                    </span>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`p-2 rounded-full transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-neutral-700 text-neutral-200"
                          : "bg-neutral-800/50 text-neutral-400 group-hover:bg-neutral-700/50 group-hover:text-neutral-300"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 md:px-6 lg:px-8 pb-4 md:pb-6 lg:pb-8 text-neutral-300 border-t border-neutral-800 bg-neutral-900/10">
                          <div className="pt-4 md:pt-6 text-sm md:text-base lg:text-lg leading-relaxed">{faq.ans}</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neutral-600/5 via-neutral-400/5 to-neutral-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      {/* </GridBackground> */}
    </section>
  )
}

export default FAQ
