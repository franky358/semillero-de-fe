import React, { useState } from "react";
import Lottie from "lottie-react";
import seedData from "../on-animation.json";

const SeedAnimation: React.FC = () => {
  const [status, setStatus] = useState("on");

  return (
    <>
      <div
        className={`h-60 mt-16 relative ${
          status === "off" && "h-36 border-2"
        } `}
      >
        <Lottie
          animationData={seedData}
          loop={true}
          className={`h-full absolute -top-16 left-1/2  transform -translate-x-1/2 ${
            status === "off" ? "-top-12 md:-top-20" : "mt-8 lg:mt-12"
          }`}
        />
      </div>
      <div>
        <h1 className="text-center text-2xl text-[#BAE8E8] font-Roboto">
          Please, alimentame!
        </h1>
      </div>
    </>
  );
};

export default SeedAnimation;
