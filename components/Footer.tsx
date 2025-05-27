import Image from "next/image"
import { FaInstagram, FaLinkedin } from "react-icons/fa6"
import { IoMdMailOpen } from "react-icons/io"

const Footer = () => {
  return (
    <footer className="w-full relative">
        <div className="w-full flex flex-col gap-6 md:gap-8 border-t border-neutral-700 bg-neutral-950 px-6 sm:px-10 lg:px-16 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex flex-col">
              <div className="flex md:flex-row flex-col gap-4 md:items-start items-center">
                <div className="w-16 h-auto md:mt-1 flex-shrink-0">
                  <Image
                    style={{ width: "100%", height: "auto" }}
                    src={"/gdsc-logo.png"}
                    width={70}
                    height={50}
                    alt="GDGC Logo"
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col text-neutral-300 md:text-left text-center">
                  <h2 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-400">
                    Google Developer Groups
                  </h2>
                  <h3 className="text-base md:text-lg font-semibold text-neutral-400 mt-1">
                    Providence College of Engineering
                  </h3>
                  <div className="mt-2 space-y-1">
                    <span className="text-sm text-neutral-500 block">Angadical South, Ala, Kerala</span>
                    <span className="text-sm text-neutral-500 block">689122</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <h3 className="text-lg font-semibold text-neutral-300">Connect With Us</h3>
              <div className="flex gap-6">
                <a
                  href="https://www.instagram.com/dsc_providence?igsh=MXFhMm0ybGRqYTQ2MA=="
                  className="p-3 rounded-full bg-neutral-800/50 border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-700/50 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} className="text-neutral-300 hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-neutral-800/50 border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-700/50 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} className="text-neutral-300 hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-neutral-800/50 border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-700/50 transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <IoMdMailOpen size={20} className="text-neutral-300 hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-6">
            <div className="flex flex-col text-center text-sm text-neutral-400 space-y-2">
              <p>© Copyright GDGC-PRC. All Rights Reserved</p>
              <span>
                ❤️ Design by{" "}
                <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 to-neutral-500">
                  GDGC PRC
                </span>{" "}
                Team
              </span>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer
