"use client"
import { Button } from "@/components/ui/Button";
import { GridBackground } from "@/components/ui/GridBackground";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { FaPaperPlane } from "react-icons/fa6";
import SlowFade from "@/Animations/SlowFade";
import { useState } from "react";
import LoadingScreen from "../ui/LoadingScreen";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section
      id="hero"
      className="h-screen flex flex-col items-center sm:pt-20 select-none"
    >
      <LoadingScreen onLoadingComplete={() => setIsLoaded(true)} />
      {isLoaded && (
        <GridBackground shadow>
          <div className="flex flex-col items-center">
            <SlowFade delay={1}>
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                GDGC PRC
              </h1>
            </SlowFade>
            <SlowFade delay={1}>
              <h2 className="md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 via-neutral-200 to-neutral-500">
                Google Developer Groups On Campus
              </h2>
            </SlowFade>
            <SlowFade delay={1}>
              <h2 className="max-sm:text-xs bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 via-neutral-200 to-neutral-500">
                Providence College of Engineering
              </h2>
            </SlowFade>
            <SlowFade delay={1.5}>
              <Button
                containerClassName="rounded-xl"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 "
              >
                <span>Join Us</span>
                <FaPaperPlane size={15} className="text-neutral-300" />
              </Button>
            </SlowFade>
          </div>
          <div className="flex flex-col absolute bottom-14 sm:bottom-4 px-6 py-3 text-center text-neutral-200">
            <TextGenerateEffect
              words={"Empowering developers to build for Everyone"}
            />
          </div>
        </GridBackground>
      )}
    </section>
  );
}
