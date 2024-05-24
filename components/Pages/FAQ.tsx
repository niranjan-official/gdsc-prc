"use client";
import React, { useState } from "react";
import FaqBox from "../FaqBox";

const faqs = [
  {
    que: "What is Google Developer Student Clubs (GDSC)?",
    ans: "GDSC are university-based community groups for students interested in Google developer technologies, providing a platform to grow and build solutions together.",
  },
  {
    que: "Who can join GDSC?",
    ans: "GDSC is open to all university students, regardless of major or technical skill level. Beginners and experienced developers are welcome.",
  },
  {
    que: "How can I join a GDSC chapter?",
    ans: "Join by finding your university's chapter through social media, the official website, or by attending events. Contact the leadership team for more info.",
  },
  {
    que: "What kind of events does GDSC organize?",
    ans: "GDSC organizes workshops, hackathons, speaker sessions, and study jams covering various tech topics, featuring industry professionals.",
  },
  {
    que: "What are the benefits of joining GDSC?",
    ans: "Gain technical skills, network with peers, work on impactful projects, enhance your resume, and gain leadership experience.",
  },
];

const FAQ = () => {
  const [isActive, setIsActive] = useState(10);
  return (
    <section
      id="faq"
      className="w-full flex flex-col h-max px-4 md:px-24 py-8 pt-20"
    >
      <h3 className="text-4xl font-extrabold max-sm:text-center">FAQs</h3>
      <div className="w-full flex flex-col mt-4">
        <p className="text-gray-300 max-sm:text-center">
          Find answers to common questions about our digital marketing, web
          development and graphic design services.
        </p>
        <hr className="bordedr-[0.2px] border-neutral-500 mt-8" />
        {faqs.map((faq, index) => (
          <FaqBox
            question={faq.que}
            answer={faq.ans}
            setIsActive={setIsActive}
            index={index}
            activeElement={isActive}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
