import React from "react";
import { FaPlus } from "react-icons/fa6";

interface FloatingAddButtonProps {
  onOpen: (isOpen: boolean) => void;
}

const FloatingButton: React.FC<FloatingAddButtonProps> = ({ onOpen }) => {
  return (
    <button
      aria-label="Abrir formulario de acto devocional"
      className="w-16 h-16 flex justify-center items-center rounded-full bg-[#BAE8E8] text-black fixed bottom-10 right-10 z-40"
      onClick={() => onOpen(true)}
    >
      <FaPlus />
    </button>
  );
};

export default FloatingButton;
