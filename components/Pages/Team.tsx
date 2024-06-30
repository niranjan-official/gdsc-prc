import React from "react";
import { DotBackground } from "../ui/DotBackground";
import TimeLine from "../TimeLine";

const Team = () => {
  return (
    <DotBackground>
      <section id="team" className="w-full h-max py-8 px-4 md:px-16">
        <div className="flex flex-col items-center" >
          <h1 className="text-5xl md:text-6xl text-center font-extrabold">
            Our Team
          </h1>
          <div className="flex flex-col text-gray-300 text-center md:text-lg mt-4 mb-6">
            <p>" Indivitually, we are one drop. Together, we are an ocean " <br className="hidden sm:block" /> -Ryunosuke Satoro</p>
            {/* <span>-Ryunosuke Satoro</span> */}
          </div>
          <TimeLine />
        </div>
      </section>
    </DotBackground>
  );
};

export default Team;
