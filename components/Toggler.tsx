import React, { Dispatch, SetStateAction } from "react";

interface TogglerProps {
  label: string;
  setShowDateTimeInput: Dispatch<SetStateAction<boolean>>;
}
const Toggler = ({ label, setShowDateTimeInput }: TogglerProps) => {
  return (
    <div className="form-check form-switch">
      <div className="flex items-center justify-center w-full">
        <label htmlFor="toggleB" className="flex items-center cursor-pointer">
          <div className="mr-3 text-gray-600 font-medium">{label}</div>
          <div className="relative">
            <input
              type="checkbox"
              id="toggleB"
              className="sr-only"
              onChange={(e) => setShowDateTimeInput(e.target.checked)}
            />

            <div className="block bg-gray-200 w-14 h-8 rounded-full transition duration-300"></div>

            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition duration-300"></div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Toggler;
