"use client";
import React from "react";
import { TeamList } from "./TeamList";
import { MembersMiniList2023, Team_2020, Team_2022 } from "@/constants";
import Link from "next/link";
import { BiCurrentLocation } from "react-icons/bi";
import { motion } from "framer-motion";

const TimeLine = () => {
  const timelineData = [
    {
      tenure: "2020-2021",
      year: "2020",
      membersMiniList: Team_2020,
      color: "gdsc-1",
      team: false,
    },
    {
      tenure: "2022-2023",
      year: "2022",
      membersMiniList: Team_2022,
      color: "gdsc-2",
      team: true,
    },
    {
      tenure: "2023-2024",
      year: "2023",
      membersMiniList: MembersMiniList2023,
      color: "gdsc-3",
      team: true,
    },
  ];

  return (
    <div className="w-full mx-auto pl-4 md:px-6">
      <div className="flex flex-col justify-center divide-y divide-slate-200">
        <div className="w-full max-w-3xl mx-auto">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {timelineData.map((item, index) => {
              const isActive = 2;
              return (
                <div
                  key={index}
                  className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${
                    index === 2 ? "is-active" : ""
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}
                  >
                    {isActive === index ? (
                      <BiCurrentLocation size={25} />
                    ) : (
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                      >
                        <path
                          fillRule="nonzero"
                          d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                        />
                      </svg>
                    )}
                  </div>
                  <motion.div
                    initial={{ y: 40, opacity: 0, scale: 0.9 }}
                    whileInView={{
                      y: [40, -10, 0],
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                      duration: 1.2,
                      delayChildren: 0.3,
                      staggerChildren: 0.2,
                    }}
                    viewport={{ once: true }}
                    className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] flex flex-col items-center border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] p-4 rounded relative before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:content-[''] before:border-8 before:border-transparent before:border-r-white md:group-odd:before:-left-4 md:group-even:before:-right-4"
                  >
                    <time
                      className={` font-semibold text-${item.color}
                      `}
                    >
                      {item.tenure}
                    </time>
                    <div className="w-full flex flex-row items-center justify-center my-3 pr-4">
                      <TeamList items={item.membersMiniList} />
                    </div>
                    {item.team ? (
                      <Link
                        href={`/team/${item.year}`}
                        className="p-2 mt-2 border border-white hover:bg-white/10 rounded-3xl px-4 w-fit"
                      >
                        View Team
                      </Link>
                    ):(
                      <span className="font-semibold mt-1">FOUNDER: GDSC-PRC</span>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
