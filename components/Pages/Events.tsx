import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { DiGithubBadge } from "react-icons/di";
import { SiGooglecloud } from "react-icons/si";
import { FaCss3, FaHtml5 } from "react-icons/fa6";
import { TbUniverse } from "react-icons/tb";
import Image from "next/image";
import FadeUp from "@/Animations/FadeUp";

const SkeletonOne = () => (
  <div className="flex flex-1 w-full h-auto min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
    <Image
      src={"/images/posters/googleCloud.jpg"}
      width={500}
      height={400}
      style={{ width: "100%", height: "auto" }}
      alt="1"
    />
  </div>
);
const SkeletonTwo = () => (
  <div className="flex flex-1 w-full h-auto min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
    <Image
      src={"/images/posters/versionVenture.jpg"}
      width={500}
      height={400}
      style={{ width: "100%", height: "auto" }}
      alt="1"
    />
  </div>
);
const SkeletonThree = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
    <Image
      src={"/images/posters/liquidLayout.jpg"}
      width={500}
      height={400}
      style={{ width: "100%", height: "auto" }}
      alt="1"
    />{" "}
  </div>
);
const SkeletonFour = () => (
  <div className="flex flex-1 w-full h-auto min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
    <Image
      src={"/images/posters/pieverse.jpg"}
      width={500}
      height={400}
      style={{ width: "100%", height: "auto" }}
      alt="1"
    />
  </div>
);
const SkeletonFive = () => (
  <div className="flex flex-1 w-full h-auto min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
    <Image
      src={"/images/posters/webDev.jpg"}
      width={500}
      height={400}
      style={{ width: "100%", height: "auto" }}
      alt="1"
    />
  </div>
);

const Events = () => {
  const items = [
    {
      title: "Google Cloud Study Jams",
      description: "Exploring the potential of Google Cloud Platform.",
      header: <SkeletonOne />,
      icon: <SiGooglecloud className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Version Venture",
      description: "A session on version control and Github basics.",
      header: <SkeletonTwo />,
      icon: <DiGithubBadge className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Liquid Layout",
      description: "Discover the beauty of responsiveness in web design.",
      header: <SkeletonThree />,
      icon: <FaCss3 className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Pieverse",
      description: "Join the quest for understanding and enlightenment.",
      header: <SkeletonFour />,
      icon: <TbUniverse className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Web Development Workshop",
      description: "3-Day online workshop on basic Web development.",
      header: <SkeletonFive />,
      icon: <FaHtml5 className="h-4 w-4 text-neutral-500" />,
    },
  ];
  return (
    <section
      id="events"
      className="w-full flex flex-col items-center h-max px-4 py-20"
    >
      <FadeUp>
        <h1 className="text-4xl md:text-6xl text-center font-extrabold">
          Our Past Events
        </h1>
      </FadeUp>
      <FadeUp>
        <p className="mt-4 my-8 text-center text-gray-300 max-w-3xl md:px-12 lg:px-20">
          Discover our latest events, workshops, and hackathons. Join us to
          learn, network, and innovate with fellow developers.
        </p>
      </FadeUp>
      <BentoGrid className="w-full mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Events;
