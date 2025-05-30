"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Meteors, Icon } from "./ui/meteors";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";

interface TeamMemberCard {
  name: string;
  designation: string;
  image: string;
  year: number;
}

const TeamMemberCard = ({ name, designation, image, year }: TeamMemberCard) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, scale: [1, 1.05, 1] }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      viewport={{ once: true }}
      className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col bg-black border border-black/[0.2] dark:border-white/[0.2] p-3 relative"
    >
      <motion.div
        className="w-full aspect-square relative preserve-3d"
        onTap={() => setIsHovered(!isHovered)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 backface-hidden">
          <div className="w-full h-full bg-neutral-300 shadow-md rounded-2xl overflow-hidden">
            <Image
              src={image ? image : "/images/team/skeleton.jpg"}
              width={400}
              height={400}
              style={{ height: "100%", width: "100%" }}
              alt={name}
            />
          </div>
        </div>
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="w-full h-full bg-zinc-800 rounded-3xl shadow-md overflow-hidden flex items-center justify-center">
            <div className="flex items-center gap-3 text-white">
              <a href="#">
                <FaInstagram size={25} />
              </a>
              <a href="#">
                <FaLinkedin size={25} />
              </a>
              <a href="#">
                <IoMdMailOpen size={25} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="w-full pl-1 pt-3 bg-black relative overflow-hidden">
        <p className="text-neutral-300 text-sm">{designation}</p>
        <h5 className="text-lg uppercase font-semibold">{name}</h5>
        <div className="w-full flex justify-between">
          <span>&lt;/&gt;</span>
          <span className="text-neutral-300">{year}</span>
        </div>
        <Meteors number={20} />
      </div>
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
    </motion.div>
  );
};

export default TeamMemberCard;
