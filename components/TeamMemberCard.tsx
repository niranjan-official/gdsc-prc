import Image from "next/image";
import React from "react";

interface TeamMemberCard {
  name: string;
  designation: string;
  image: string;
}

const TeamMemberCard = ({ name, designation, image }: TeamMemberCard) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex flex-col text-center">
      <div className="w-full aspect-square rounded-full bg-gray-500 overflow-hidden p-2">
        <Image
          src={image}
          width={4090}
          height={400}
          style={{ height: "100%", width: "100%" }}
          className="rounded-full"
          alt={name}
        />
      </div>
      <h5 className="mt-4 font-semibold uppercase">{name}</h5>
      <span className="text-neutral-300">{designation}</span>
    </div>
  );
};

export default TeamMemberCard;
