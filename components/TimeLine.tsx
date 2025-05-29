"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TeamList } from "./TeamList";
import Link from "next/link";
import { Check, MapPin } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";import  { GlowingEffect } from "./ui/glowing-effect";

interface TeamTimelineProps {
    timelineData: {
        id: number;
        year: number;
        tenure: string;
        color: string;
        members: {
            id: number;
            name: string;
            designation: string;
            image: string;
        }[];
    }[];
}

export default function TeamTimeline({ timelineData }: TeamTimelineProps) {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const isMobile = useIsMobile();

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const adjustedHeight = isMobile ? rect.height : rect.height; 
            setHeight(adjustedHeight);
        }
    }, [ref, isMobile]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 50%", "end 70%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full flex justify-center max-w-3xl md:px-10"
            ref={containerRef}
        >
            <div ref={ref} className="relative w-full pb-20">
                {timelineData.map((team, index) => {
                    const isActive = index === 3; // Keeping the active state from original code

                    return (
                        <div
                            key={index}
                            className="flex justify-start md:pt-14 pb-12"
                        >
                            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                                <div
                                    className={`h-10 absolute left-1 md:left-3 w-10 rounded-full bg-black flex items-center justify-center border border-white/30`}
                                >
                                    {isActive ? (
                                        <div className="w-full h-full flex justify-center items-center  rounded-full">
                                            <MapPin className="w-5 h-5 text-gdsc-3" />
                                        </div>
                                    ) : (
                                        <Check className="w-5 h-5 text-white/70" />
                                    )}
                                </div>
                                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-white">
                                    {team.year}
                                </h3>
                            </div>

                            <div className="relative pl-16 md:pl-4 w-full">
                                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white">
                                    {team.year}
                                </h3>

                                <div className="relative rounded-2xl border p-2 md:rounded-3xl md:p-3">
                                    <GlowingEffect
                                        spread={40}
                                        glow={true}
                                        disabled={false}
                                        proximity={64}
                                        inactiveZone={0.01}
                                    />
                                    <div className="border-0.75 relative flex bg-black/60 flex-col justify-between gap-6 overflow-hidden rounded-xl dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
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
                                            className={`relative w-full flex flex-col p-4 items-center backdrop-blur-sm ${
                                                isActive
                                                    ? "border-gdsc-3/30 bg-gdsc-3/5"
                                                    : "border-white/10 bg-white/5"
                                            }`}
                                        >
                                            <div className="relative flex flex-1 flex-col justify-between">
                                                <span
                                                    className={`inline-block px-3 py-1 text-center rounded-lg text-sm font-medium bg-neutral-500/10 text-${team.color}`}
                                                >
                                                    {team.tenure}
                                                </span>

                                                <div className="w-full flex flex-row items-center justify-center my-6 px-4">
                                                    <TeamList
                                                        items={team.members.filter(
                                                            (member, index) =>
                                                                index <
                                                                (isMobile
                                                                    ? 5
                                                                    : 6)
                                                        )}
                                                    />
                                                </div>

                                                {team.year === 2020 ? (
                                                    <span className="font-semibold text-white/90 bg-white/5 px-4 md:px-6 py-2 rounded-xl border border-white/10">
                                                        FOUNDER: GDSC-PRC
                                                    </span>
                                                ) : (
                                                    <Link
                                                        href={`/team/${team.year}`}
                                                        className="group relative w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-center text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                                                    >
                                                        <span className="relative z-10 flex items-center justify-center gap-2 font-medium">
                                                            <svg
                                                                className="h-4 w-4"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                                />
                                                            </svg>
                                                            View Team
                                                            <svg
                                                                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M9 5l7 7-7 7"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                                    </Link>
                                                )}
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-6 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-violet-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}
