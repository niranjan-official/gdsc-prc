import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { DiGithubBadge } from "react-icons/di";
import { SiGooglecloud, SiWeb3Dotjs } from "react-icons/si";
import { FaCss3, FaEthereum, FaHtml5 } from "react-icons/fa6";
import { TbUniverse } from "react-icons/tb";
import Image from "next/image";
import SlowFade from "@/Animations/SlowFade";
import { PiReadCvLogoFill } from "react-icons/pi";
import { MdQuestionAnswer } from "react-icons/md";
import FadeUp from "@/Animations/FadeUp";
import { Button } from "../ui/Button";
import Link from "next/link";

const SkeletonOne = () => (
    <Link href="/event/algorand">
        <div className="flex flex-1 w-full h-auto min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden border border-neutral-700 relative group cursor-pointer">
            <Image
                src={"/images/posters/algorand/landscape.jpg"}
                width={500}
                height={400}
                style={{ width: "100%", height: "auto" }}
                alt="Algorand"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-white text-sm font-medium bg-black/50 px-3 py-2 rounded-lg backdrop-blur-sm border border-white/20">
                    Click to Register
                </div>
            </div>
        </div>
    </Link>
);

const SkeletonTwo = () => (
    <div className="flex flex-1 w-full h-auto min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden border border-neutral-700">
        <Image
            src={"/images/posters/tech-winter.jpg"}
            width={500}
            height={400}
            style={{ width: "100%", height: "auto" }}
            alt="Tech Winter Break"
            className="object-cover"
        />
    </div>
);

const SkeletonThree = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden border border-neutral-700">
        <Image
            src={"/images/posters/liquidLayout.jpg"}
            width={500}
            height={400}
            style={{ width: "100%", height: "auto" }}
            alt="Liquid Layout"
            className="object-cover"
        />
    </div>
);

const SkeletonFour = () => (
    <div className="flex flex-1 w-full h-auto min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden border border-neutral-700">
        <Image
            src={"/images/posters/arbitrum.jpg"}
            width={500}
            height={400}
            style={{ width: "100%", height: "auto" }}
            alt="Arbitrum"
            className="object-cover"
        />
    </div>
);

const SkeletonFive = () => (
    <div className="flex flex-1 w-full h-auto min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden border border-neutral-700">
        <Image
            src={"/images/posters/buildai.jpg"}
            width={500}
            height={400}
            style={{ width: "100%", height: "auto" }}
            alt="Build With AI"
            className="object-cover"
        />
    </div>
);

const Events = () => {
    const items = [
        {
            title: "Algorand",
            description: "A workshop on how to get started with Algorand.",
            header: <SkeletonOne />,
            icon: <SiWeb3Dotjs className="h-4 w-4 text-green-400" />,
        },
        {
            title: "Tech Winter Break",
            description:
                "A workshop on how to use Google Tech to find solutions.",
            header: <SkeletonTwo />,
            icon: <MdQuestionAnswer className="h-4 w-4 text-yellow-400" />,
        },
        {
            title: "Build With AI",
            description: "A session on introduction to Gen-AI Study Jam.",
            header: <SkeletonFive />,
            icon: <FaHtml5 className="h-4 w-4 text-orange-400" />,
        },
        {
            title: "Arbitrum - Web3 Workshop",
            description: "A workshop on how to get started with Web3.",
            header: <SkeletonFour />,
            icon: <SiWeb3Dotjs className="h-4 w-4 text-green-400" />,
        },
        {
            title: "Resume Revamp",
            description: "A workshop on how to revamp your resume.",
            header: <SkeletonOne />,
            icon: <PiReadCvLogoFill className="h-4 w-4 text-blue-400" />,
        },
    ];

    return (
        <section
            id="events"
            className="min-h-screen flex flex-col items-center bg-zinc-950 justify-center py-16 md:py-24 select-none"
        >
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="text-center mb-8 md:mb-20">
                    <FadeUp>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-3 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                            Our Past Events
                        </h1>
                    </FadeUp>
                    <FadeUp>
                        <p className="md:text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
                            Discover our latest events, workshops, and
                            hackathons. Join us to learn, network, and innovate
                            with fellow developers.
                        </p>
                    </FadeUp>
                </div>

                <FadeUp>
                    <BentoGrid className="w-full mx-auto">
                        {items.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                icon={item.icon}
                                className={
                                    i === 3 || i === 6 ? "md:col-span-2" : ""
                                }
                            />
                        ))}
                    </BentoGrid>
                </FadeUp>
            </div>
        </section>
    );
};

export default Events;
