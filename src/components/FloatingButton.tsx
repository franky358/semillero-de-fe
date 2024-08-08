import React from "react";
import { FaPlus } from "react-icons/fa6";

const FloatingButton: React.FC = () => {
  return (
    <div className="w-16 h-16 flex justify-center items-center rounded-full bg-[#BAE8E8] text-black fixed bottom-10 right-10">
      <FaPlus />
    </div>
  );
};

export default FloatingButton;
