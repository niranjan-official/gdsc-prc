import { BentoGrid, BentoGridItem } from "../ui/bento-grid"
import { DiGithubBadge } from "react-icons/di"
import { SiGooglecloud } from "react-icons/si"
import { FaCss3, FaHtml5 } from "react-icons/fa6"
import { TbUniverse } from "react-icons/tb"
import Image from "next/image"
import { GridBackground } from "../ui/GridBackground"
import SlowFade from "@/Animations/SlowFade"

const SkeletonOne = () => (
  <div className="flex flex-1 w-full h-auto min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden border border-neutral-700">
    <Image
      src={"/images/posters/googleCloud.jpg"}
      width={500}
      height={400}
      style={{ width: "100%", height: "auto" }}
      alt="Google Cloud Study Jams"
      className="object-cover"
    />
  </div>
)

const SkeletonTwo = () => (
  <div className="flex flex-1 w-full h-auto min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden border border-neutral-700">
    <Image
      src={"/images/posters/versionVenture.jpg"}
      width={500}
      height={400}
      style={{ width: "100%", height: "auto" }}
      alt="Version Venture"
      className="object-cover"
    />
  </div>
)

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
)

const SkeletonFour = () => (
  <div className="flex flex-1 w-full h-auto min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden border border-neutral-700">
    <Image
      src={"/images/posters/pieverse.jpg"}
      width={500}
      height={400}
      style={{ width: "100%", height: "auto" }}
      alt="Pieverse"
      className="object-cover"
    />
  </div>
)

const SkeletonFive = () => (
  <div className="flex flex-1 w-full h-auto min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden border border-neutral-700">
    <Image
      src={"/images/posters/webDev.jpg"}
      width={500}
      height={400}
      style={{ width: "100%", height: "auto" }}
      alt="Web Development Workshop"
      className="object-cover"
    />
  </div>
)

const Events = () => {
  const items = [
    {
      title: "Google Cloud Study Jams",
      description: "Exploring the potential of Google Cloud Platform.",
      header: <SkeletonOne />,
      icon: <SiGooglecloud className="h-4 w-4 text-blue-400" />,
    },
    {
      title: "Version Venture",
      description: "A session on version control and Github basics.",
      header: <SkeletonTwo />,
      icon: <DiGithubBadge className="h-4 w-4 text-green-400" />,
    },
    {
      title: "Liquid Layout",
      description: "Discover the beauty of responsiveness in web design.",
      header: <SkeletonThree />,
      icon: <FaCss3 className="h-4 w-4 text-yellow-400" />,
    },
    {
      title: "Pieverse",
      description: "Join the quest for understanding and enlightenment.",
      header: <SkeletonFour />,
      icon: <TbUniverse className="h-4 w-4 text-orange-400" />,
    },
    {
      title: "Web Development Workshop",
      description: "3-Day online workshop on basic Web development.",
      header: <SkeletonFive />,
      icon: <FaHtml5 className="h-4 w-4 text-red-400" />,
    },
  ]

  return (
    <section id="events" className="min-h-screen flex flex-col items-center justify-center py-24 select-none">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-20">
            <SlowFade>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-3 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                Our Past Events
              </h1>
            </SlowFade>
            <SlowFade delay={0.3}>
              <p className="md:text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
                Discover our latest events, workshops, and hackathons. Join us to learn, network, and innovate with
                fellow developers.
              </p>
            </SlowFade>
          </div>

          <SlowFade delay={0.6}>
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
          </SlowFade>
        </div>
    </section>
  )
}

export default Events
