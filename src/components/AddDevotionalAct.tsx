import React, { useState } from "react";
import Select, { MultiValue } from "react-select";
import { IoMdClose } from "react-icons/io";
import { devotionalOptions } from "../data/options";
import { OptionSelectType } from "../types";

interface AddDevotionalActProps {
  onOpen: (isOpen: boolean) => void;
}

const AddDevotionalAct: React.FC<AddDevotionalActProps> = ({ onOpen }) => {
  const [devotionalActs, setDevotionalActs] = useState<string[]>([]);
  const [otherDevotionalAct, setOtherDevotionalAct] = useState<string>("");
  const [isReadyToSubmit, setIsReadyToSubmit] = useState<boolean>(false);

  const handleChange = (selectedOptions: MultiValue<OptionSelectType>) => {
    if (selectedOptions) {
      const selectedLabels = selectedOptions.map((option) => option.label);
      setDevotionalActs(selectedLabels);

      const isOtherOptionSelected = selectedOptions.some(
        (option) => option.value === "other"
      );

      const hasSelectedLabels = selectedLabels.length > 0;
      const isOtherFieldFilled = otherDevotionalAct !== "";

      setIsReadyToSubmit(
        isOtherOptionSelected ? isOtherFieldFilled : hasSelectedLabels
      );
    }
  };

  return (
    <div className="flex fixed inset-0 w-full h-full mx-auto my-auto justify-center  rounded-lg items-center bg-[#272343]  antialiased z-50">
      <div className="flex flex-col rounded-lg  h-80 border-gray-300 shadow-2xl">
        <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
          <p className="font-semibold text-gray-800">
            ¿Cómo alimentaste tu fe hoy?
          </p>
          <IoMdClose size={20} onClick={() => onOpen(false)} />
        </div>
        <div className="flex flex-col px-6 py-8 bg-gray-50">
          <p className="mb-2 font-semibold text-gray-700">
            Selecciona una o varias opciones
          </p>
          <Select
            options={devotionalOptions}
            isMulti
            placeholder=""
            onChange={handleChange}
          />
          {devotionalActs.includes("Otro") && (
            <>
              <p className="mb-2 font-semibold text-gray-700 mt-4">Otro</p>
              <input
                type="text"
                value={otherDevotionalAct}
                onChange={(e) => {
                  setOtherDevotionalAct(e.target.value);
                  e.target.value !== ""
                    ? setIsReadyToSubmit(true)
                    : setIsReadyToSubmit(false);
                }}
                placeholder="Escribe aquí  🙏"
                className="h-10 rounded-md p-2 border-gray-200 border"
              />
            </>
          )}
        </div>
        <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
          <button
            className="font-semibold text-gray-600 text-sm"
            onClick={() => onOpen(false)}
          >
            Cancelar
          </button>
          <button
            className={`px-4 py-2 text-sm rounded ${
              isReadyToSubmit
                ? "bg-blue-500 font-semibold  text-white"
                : "bg-gray-200 text-black"
            }`}
            disabled={!isReadyToSubmit}
            onClick={() => alert("Go!")}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDevotionalAct;
