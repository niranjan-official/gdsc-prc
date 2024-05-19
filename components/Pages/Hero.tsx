import { Button } from "@/components/ui/Button";
import { GridBackground } from "@/components/ui/GridBackground";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { FaPaperPlane } from "react-icons/fa6";

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col items-center sm:pt-20 select-none">
      <GridBackground shadow>
        <FloatingNav />
        <div className="flex flex-col items-center">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            GDSC PRC
          </h1>
          <h2 className="md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 via-neutral-200 to-neutral-500">
            Google Developer Student Clubs
          </h2>
          <h2 className="max-sm:text-xs bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 via-neutral-200 to-neutral-500">
            Providence College of Engineering
          </h2>
          <Button
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 "
          >
            <span>Join Us</span>
            <FaPaperPlane size={15} className="text-neutral-300" />
          </Button>
        </div>
        <div className="flex flex-col absolute bottom-14 sm:bottom-4 px-6 py-3 text-center text-neutral-200">
            <TextGenerateEffect words={"Empowering developers to build for Everyone"} />
        </div>
      </GridBackground>
    </section>
  );
}
