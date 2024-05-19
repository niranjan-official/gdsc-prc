import React from "react";
import { Background } from "../ui/Background";

const About = () => {
  const fields = [
    {
      title: "App Development",
      class: "bg-gdsc-1/30 text-gdsc-1 hover:bg-gdsc-1/50",
    },
    {
      title: "Web Development",
      class: "bg-gdsc-2/30 text-gdsc-2 hover:bg-gdsc-2/50",
    },
    {
      title: "AI / ML",
      class: "bg-gdsc-3/30 text-gdsc-3 hover:bg-gdsc-3/50",
    },
    {
      title: "UI / UX",
      class: "bg-gdsc-4/30 text-gdsc-4 hover:bg-gdsc-4/50",
    },
  ];

  return (
    <section id="about" className="w-full h-max pt-8">
      <Background type="dot">
        <div className="w-full flex flex-col items-center px-4 md:px-20 py-8">
          <h1 className="text-5xl md:text-6xl text-center font-extrabold">
            WHAT WE DO HERE ?
          </h1>
          <p className="text-center mt-6 text-xl text-neutral-300">
            We at <span className="font-bold text-gdsc-1">GDSC-PRC</span> are a
            passionate group of people who work towards bringing a change in the
            ecosystem of{" "}
            <span className="font-bold text-gdsc-2">development</span> around
            the campus. We want to create a healthy environment for the budding
            developers to exploring{" "}
            <span className="font-bold text-gdsc-3">solutions</span> to real
            life problems and{" "}
            <span className="font-bold text-gdsc-4">promote</span> the developer
            culture.
          </p>
          <h2 className="mt-6 text-4xl font-extralight">We Work On</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 justify-around px-6 mt-8">
            {fields.map((field, key) => (
              <div
                key={key}
                className={`w-full text-lg p-3 text-center font-bold rounded-lg ${field.class} rounded-xl`}
              >
                <h3>{field.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </Background>
    </section>
  );
};

export default About;
