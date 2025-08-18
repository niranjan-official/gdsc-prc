"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import {
  IconCalendarMonth,
  IconHome,
  IconMessage,
  IconSitemap,
  IconUsers,
  IconUsersGroup,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <IconHome className="h-5 w-5 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <IconSitemap className="h-5 w-5 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Events",
    link: "#events",
    icon: (
      <IconCalendarMonth className="h-5 w-5 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Team",
    link: "#team",
    icon: (
      <IconUsersGroup className="h-5 w-5 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "FAQ",
    link: "#faq",
    icon: <IconMessage className="h-5 w-5 text-neutral-500 dark:text-white" />,
  },
];

export const FloatingNav = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() === 0 || null) {
        setVisible(true);
      } else if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-xl dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-5 py-4  items-center justify-center space-x-5",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => {
          let navLink = navItem.link;
          if (pathname.includes("team") || pathname.includes("event/algorand")) {
            navLink = `/${navItem.link}`;
          }
          return (
            <Link
              key={`link=${idx}`}
              href={navLink}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};
