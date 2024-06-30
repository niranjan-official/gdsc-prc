import React from "react";
import { DotBackground } from "../ui/DotBackground";
import TimeLine from "../TimeLine";
import FadeUp from "@/Animations/FadeUp";

const Team = () => {
  return (
    <DotBackground>
      <section id="team" className="w-full h-max py-8 px-4 md:px-16">
        <div className="flex flex-col items-center">
          <FadeUp>
            <h1 className="text-5xl md:text-6xl text-center font-extrabold">
              Our Team
            </h1>
          </FadeUp>
          <div className="flex flex-col text-gray-300 text-center md:text-lg mt-4 mb-6">
            <FadeUp>
              <p>
                " Indivitually, we are one drop. Together, we are an ocean "{" "}
                <br className="hidden sm:block" /> -Ryunosuke Satoro
              </p>
            </FadeUp>
          </div>
          <TimeLine />
        </div>
      </section>
    </DotBackground>
  );
};

export default Team;
