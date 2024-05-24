import React, { ReactNode } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

interface FAQ {
  question: ReactNode;
  answer: ReactNode;
  setIsActive: any;
  index: number;
  activeElement: number;
}

const FaqBox = ({
  question,
  answer,
  setIsActive,
  index,
  activeElement,
}: FAQ) => {
  const handleClick = () => {
    if (activeElement === 10 || activeElement !== index) {
      setIsActive(index);
    } else {
      setIsActive(10);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col py-4 md:py-6 relative">
        <p
          onClick={handleClick}
          className="text-lg cursor-pointer hover:underline underline-offset-4 select-none pr-12"
        >
          {question}
        </p>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeElement === index ? "max-h-screen" : "max-h-0"
          }`}
        >
          <p className="w-full md:w-3/4 text-sm mt-4">{answer}</p>
        </div>
        <span onClick={handleClick} className="absolute top-7 right-5 cursor-pointer">
          {activeElement === index ? (
            <RiArrowUpSLine size={20} />
          ) : (
            <RiArrowDownSLine size={20} />
          )}
        </span>
      </div>
      <hr className="border-[0.2px] border-black dark:border-neutral-500 w-full" />
    </div>
  );
};

export default FaqBox;
