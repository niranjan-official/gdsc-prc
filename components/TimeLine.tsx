"use client";
import React from "react";
import { TeamList } from "./TeamList";
import Link from "next/link";
import { BiCurrentLocation } from "react-icons/bi";
import { motion } from "framer-motion";
import { TimelineData } from "@/constants";
import { Check, MapPin } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const TimeLine = () => {
    const isMobile = useIsMobile();

    return (
        <div className="w-full mx-auto pl-4 md:px-6">
            <div className="flex flex-col justify-center divide-y divide-slate-200">
                <div className="w-full max-w-3xl mx-auto">
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300/50 before:to-transparent">
                        {TimelineData.map((team, index) => {
                            const isActive = 3;
                            return (
                                <div
                                    key={index}
                                    className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${
                                        index === 3 ? "is-active" : ""
                                    }`}
                                >
                                    <div
                                        className={`flex items-center justify-center w-10 h-10 border rounded-full shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${
                                            isActive === index
                                                ? "border-gdsc-3 bg-gdsc-3/20"
                                                : "border-white/30 bg-black/80"
                                        }`}
                                    >
                                        {isActive === index ? (
                                            <MapPin className="w-5 h-5 text-gdsc-3" />
                                        ) : (
                                            <Check className="w-5 h-5 text-white/70" />
                                        )}
                                    </div>
                                    <motion.div
                                        initial={{
                                            y: 40,
                                            opacity: 0,
                                            scale: 0.9,
                                        }}
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
                                        className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] flex flex-col items-center md:group-odd:before:-left-4 md:group-even:before:-right-4 rounded-xl border py-5 backdrop-blur-sm ${
                                            isActive === index
                                                ? "border-gdsc-3/30 bg-gdsc-3/5"
                                                : "border-white/10 bg-white/5"
                                        }`}
                                    >
                                        <span
                                            className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-${team.color}/10 text-${team.color}`}
                                        >
                                            {team.tenure}
                                        </span>
                                        <div className="w-full flex flex-row items-center justify-center my-3 pr-4">
                                            <TeamList
                                                items={team.members.filter(
                                                    (member, index) =>
                                                        index <
                                                        (isMobile ? 4 : 6)
                                                )}
                                            />
                                        </div>
                                        {team.year === 2020 ? (
                                            <span className="font-semibold mt-1">
                                                FOUNDER: GDSC-PRC
                                            </span>
                                        ) : (
                                            <Link
                                                href={`/team/${team.year}`}
                                                className="p-2 mt-2 border border-white hover:bg-white/10 rounded-xl px-4 w-fit"
                                            >
                                                View Team
                                            </Link>
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
