import About from "@/components/Pages/About";
import Events from "@/components/Pages/Events";
import Hero from "@/components/Pages/Hero";

export default function Home() {
  return (
    <div className="w-full flex flex-col relative dark:bg-black mx-auto">
      <Hero/>
      <About/>
      <Events/>
    </div>
  );
}
