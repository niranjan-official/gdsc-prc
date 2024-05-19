import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { DiGithubBadge } from "react-icons/di";
import { PiTreasureChestFill } from "react-icons/pi";
import { SiGooglecloud } from "react-icons/si";
import { FaCss3, FaHtml5, FaTrophy } from "react-icons/fa6";
import { TbUniverse } from "react-icons/tb";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const Events = () => {
  const items = [
    {
      title: "Google Cloud Study Jams",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <Skeleton />,
      icon: <SiGooglecloud className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Version Venture",
      description: "Dive into the transformative power of technology.",
      header: <Skeleton />,
      icon: <DiGithubBadge className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Liquid Layout",
      description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton />,
      icon: <FaCss3 className="h-4 w-4 text-neutral-500" />
    },
    {
      title: "Pieverse",
      description: "Join the quest for understanding and enlightenment.",
      header: <Skeleton />,
      icon: <TbUniverse className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Web Development Workshop",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
      icon: <FaHtml5 className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Project Building - Solution Challenge",
      description: "Experience the thrill of bringing ideas to life.",
      header: <Skeleton />,
      icon: <FaTrophy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Treasure Hunt",
      description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton />,
      icon: <PiTreasureChestFill className="h-4 w-4 text-neutral-500" />,
    },
  ];
  return (
    <section
      id="events"
      className="w-full flex flex-col items-center h-max px-4 py-8 pt-20"
    >
      <h1 className="text-4xl md:text-6xl text-center font-extrabold">
        Our Past Events
      </h1>
      <p className="my-4 text-center text-gray-300 max-w-3xl">
        Discover our latest events, workshops, and hackathons. Join us to learn,
        network, and innovate with fellow developers.
      </p>
      <BentoGrid className="w-fullmx-auto">
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
