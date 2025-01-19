import Image from "next/image";
import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-8 bg-black border-t border-neutral-500 px-4 sm:px-10 lg:px-16 py-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-col">
          <div className="flex md:flex-row flex-col gap-2 md:items-start items-center">
            <div className="w-14 h-auto md:mt-1">
              <Image
                style={{ width: "100%", height: "auto" }}
                src={"/gdsc-logo.png"}
                width={70}
                height={50}
                alt="logo"
              />
            </div>
            <div className="flex flex-col text-neutral-300 md:text-left text-center">
              <h2 className=" text-xl md:text-2xl font-semibold">
                Google Developer Groups
              </h2>
              <h3 className="text-sm">Providence College of Engineering</h3>
              <span className="text-sm">Angadical South, Ala, Kerala</span>
              <span className="text-sm">689122</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
            <div className="flex gap-4 text-white">
                <a href="https://www.instagram.com/dsc_providence?igsh=MXFhMm0ybGRqYTQ2MA==">
                    <FaInstagram size={20} />
                </a>
                <a href="#">
                    <FaLinkedin size={20} />
                </a>
                <a href="#">
                    <IoMdMailOpen size={20} />
                </a>
            </div>

        </div>
      </div>
      <div className="flex flex-col text-center text-xs text-white">
        <p>© Copyright GDGC-PRC. All Rights Reserved</p>
        <span>❤️ Design by <span className="font-semibold" >GDGC PRC</span> Team</span>
      </div>
    </div>
  );
};

export default Footer;
