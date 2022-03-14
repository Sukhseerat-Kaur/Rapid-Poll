import React from "react";
import { DeleteIcon } from "../assets/Icons";

const OptionInput = () => {
  return (
    <div className="mt-4 flex justify-around items-center">
      <input
        type="text"
        placeholder="Option 1"
        className=" w-11/12 p-3 text-lg text-gray-700 placeholder-gray-400 rounded-md outline-none shadow-sm border-2 border-red-300 font-medium"
      />
      <DeleteIcon className="h-7 w-7 cursor-pointer text-red-500" />
    </div>
  );
};

export default OptionInput;
