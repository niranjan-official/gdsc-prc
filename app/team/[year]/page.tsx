import TeamMemberCard from "@/components/TeamMemberCard";
import { Teams } from "@/constants";
import { TeamMember } from "@/types";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: { year: string } }) => {
  const year = parseInt(params.year);
  const teamData: TeamMember[] = Teams[year];

  if (!teamData) {
    return notFound();
  }
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-black px-10 md:px-16 lg:px-24 pt-32 pb-10">
      <h3 className="text-4xl sm:text-6xl font-extrabold z-20">Team Members</h3>
      <span className="text-4xl font-extralight mt-2 z-20">
        {year} - {year + 1}
      </span>
      <div className="w-full flex justify-center flex-wrap gap-12 max-sm:gap-8 mt-8 z-20 px-3">
        {teamData.map((member) => (
          <TeamMemberCard
            key={member.id}
            name={member.name}
            designation={member.designation}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
