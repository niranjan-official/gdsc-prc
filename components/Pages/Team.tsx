import React from "react";
import { TeamList } from "../TeamList";
import { DotBackground } from "../ui/DotBackground";
import { TeamMemberMiniList } from "@/constants";
import Link from "next/link";

const Team = () => {
  return (
    <DotBackground>
      <section className="w-full h-max py-8 px-4 md:px-16">
        <h1 className="text-5xl md:text-6xl text-center font-extrabold">
          Our Team
        </h1>
        <div className="w-full flex flex-col items-center mt-4">
          <div className="flex flex-col text-gray-300 text-center text-lg px-4">
            <p>" Indivitually, we are one drop. Together, we are an ocean "</p>
            <span>-Ryunosuke Satoro</span>
          </div>
          <div className="flex flex-row items-center justify-center my-6 w-full">
            <TeamList items={TeamMemberMiniList} />
          </div>
          <div className="flex gap-4 sm:gap-8 ">
            <Link href={'/team/2022'} className="py-2 px-4 sm:px-6 rounded-3xl border-2 bg-white text-black text-lg font-bold hover:bg-black hover:text-white hover:border-2 border-white">
              2022-2023
            </Link>
            <Link href={'/team/2023'} className="py-2 px-4 sm:px-6 rounded-3xl border-2 border-white text-lg font-semibold hover:bg-white hover:text-black">
              2023-2024
            </Link>
          </div>
        </div>
      </section>
    </DotBackground>
  );
};

export default Team;
