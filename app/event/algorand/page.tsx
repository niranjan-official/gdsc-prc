"use client"

import React, { useEffect, useState } from 'react'
import RegistrationForm from '@/components/RegistrationForm'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { DotBackground } from '@/components/ui/DotBackground'
import { Spotlight } from '@/components/ui/spotlight-new'
import { Calendar, Clock, MapPin } from 'lucide-react'

const AlgorandEventPage = () => {
  const [showRegistration, setShowRegistration] = useState(false)
  const [registrationClosed, setRegistrationClosed] = useState(true)

  // useEffect(() => {
  //   const fetchStatus = async () => {
  //     try {
  //       const res = await fetch('/api/registration-status', { cache: 'no-store' })
  //       const data = await res.json()
  //       console.log(data);
        
  //       setRegistrationClosed(!!data.closed)
  //     } catch (e) {
  //       // fail open in UI; server still enforces cap
  //     }
  //   }
  //   fetchStatus()
  // }, [])

  const eventDetails = [
    "Learn about Algorand's innovative blockchain technology",
    "Hands-on workshop with real-world applications",
    "Limited seats available - Register early!"
  ]

  if (showRegistration) {
    if (registrationClosed) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-5 overflow-hidden">
          <div className="w-full max-w-4xl">
            <div className="text-center mb-8">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setShowRegistration(false)}
                className="text-neutral-400 hover:text-white transition-colors mb-4 flex items-center gap-2 mx-auto"
              >
                ← Back to Event Details
              </motion.button>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent pb-1 md:pb-3 bg-gradient-to-b from-neutral-200 to-neutral-500 mb-4">
                Registration Closed
              </h1>
              <p className="text-lg text-neutral-300">
                We have reached the maximum of 100 registrations.
              </p>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-5 overflow-hidden">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-8">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setShowRegistration(false)}
              className="text-neutral-400 hover:text-white transition-colors mb-4 flex items-center gap-2 mx-auto"
            >
              ← Back to Event Details
            </motion.button>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent pb-1 md:pb-3 bg-gradient-to-b from-neutral-200 to-neutral-500 mb-4">
              Event Registration
            </h1>
            <p className="text-lg text-neutral-300">
              Complete your registration for the Algorand event
            </p>
          </div>
          <RegistrationForm />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <DotBackground shadow>
        <Spotlight className='max-sm:hidden' />
        <div className="relative z-10 min-h-screen flex items-center w-full justify-center p-5">
          <div className="w-full max-w-7xl">
            {/* Mobile Layout - Top to Bottom */}
            <div className="block lg:hidden">
              <div className="mb-4 mt-24">
                <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-4">
                  ALGORAND BUILDERS
                </h1>
                <p className="md:text-lg text-neutral-300 max-sm:pr-4">
                  Join us for an exciting Algorand workshop and networking event
                </p>
              </div>

              {/* Landscape Poster for Mobile */}
              <div className="relative w-full max-w-2xl mx-auto mb-6">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl">
                  <Image
                    src="/images/posters/algorand/landscape.jpg"
                    alt="Algorand Event Poster"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Event Info (Mobile) */}
              <div className="max-w-2xl mx-auto mb-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm shadow-xl">
                  <div className="flex flex-col gap-4 text-neutral-300">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-white/10 border border-white/10 backdrop-blur-sm">
                        <Calendar className="w-4 h-4 text-white/90" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-neutral-400">Date</p>
                        <p className="text-sm">21 August 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-white/10 border border-white/10 backdrop-blur-sm">
                        <Clock className="w-4 h-4 text-white/90" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-neutral-400">Time</p>
                        <p className="text-sm">01:30 PM, Thursday</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-white/10 border border-white/10 backdrop-blur-sm">
                        <MapPin className="w-4 h-4 text-white/90" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-neutral-400">Location</p>
                        <p className="text-sm">Providence College of Engineering</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="max-w-2xl mx-auto mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 ml-2">
                  What You'll Learn
                </h2>
                <div className="space-y-3">
                  {eventDetails.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-3 bg-neutral-800/30 rounded-lg border border-neutral-700/50"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-neutral-300 text-sm md:text-base">{detail}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Register Button */}
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  {registrationClosed ? (
                    <div className="px-8 py-4 rounded-xl border border-neutral-700 text-neutral-400">
                      Registration Closed
                    </div>
                  ) : (
                    <Button
                      containerClassName="rounded-xl"
                      as="button"
                      className="dark:bg-black bg-white w-full text-black dark:text-white text-lg px-8 py-4"
                      onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setShowRegistration(true); }}
                    >
                      Register Now
                    </Button>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Desktop Layout - Left to Right */}
            <div className="hidden lg:flex items-center gap-12 w-full">
              {/* Left Side - Portrait Poster */}
              <div className="flex-1 max-w-md">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl">
                  <Image
                    src="/images/posters/algorand/portrait.jpg"
                    alt="Algorand Event Poster"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="flex-1 max-w-2xl mt-20">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-3">
                    ALGORAND BUILDERS
                  </h1>
                  <p className="text-xl text-neutral-300 mb-4">
                    Join us for an exciting Algorand workshop. 
                    Discover the future of blockchain technology and connect with like-minded developers.
                  </p>

                  {/* Event Info (Desktop) */}
                  <div className="mb-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md shadow-xl">
                      <div className="flex flex-col md:flex-row md:justify-between gap-4 text-neutral-300">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-white/10 border border-white/10 backdrop-blur-sm">
                            <Calendar className="w-4 h-4 text-white/90" />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-wider text-neutral-400">Date</p>
                            <p className="text-sm">21 August</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-white/10 border border-white/10 backdrop-blur-sm">
                            <Clock className="w-4 h-4 text-white/90" />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-wider text-neutral-400">Time</p>
                            <p className="text-sm">01:30 PM, Thursday</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-white/10 border border-white/10 backdrop-blur-sm">
                            <MapPin className="w-4 h-4 text-white/90" />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-wider text-neutral-400">Location</p>
                            <p className="text-sm">Providence College of Engineering</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      What You'll Learn
                    </h2>
                    <div className="space-y-3">
                      {eventDetails.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          className="flex items-start gap-3 p-3 bg-neutral-800/30 rounded-lg border border-neutral-700/50"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-neutral-300">{detail}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Register Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    {registrationClosed ? (
                      <div className="px-8 py-4 rounded-xl border border-neutral-700 text-neutral-400 inline-block">
                        Registration Closed
                      </div>
                    ) : (
                      <Button
                        containerClassName="rounded-xl"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white text-lg px-8 py-4"
                        onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setShowRegistration(true); }}
                      >
                        Register Now
                      </Button>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </DotBackground>
    </div>
  )
}

export default AlgorandEventPage
