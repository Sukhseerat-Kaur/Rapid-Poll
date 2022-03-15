import React, { memo } from "react";
import { DeleteIcon } from "../assets/Icons";

interface OptionInputProps {
  value: string;
  id: number;
  index: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  handleDelete: (id: number) => void;
  showDelete: boolean;
}
const OptionInput = ({
  value,
  id,
  index,
  handleChange,
  handleDelete,
  showDelete,
}: OptionInputProps) => {
  console.log(`re-rendered ${index + 1}`);

  return (
    <div className="mt-4 flex justify-around items-center">
      <input
        required
        type="text"
        placeholder={`Option ${index + 1}`}
        value={value}
        onChange={(e) => handleChange(e, index)}
        className=" w-11/12 p-3 text-lg text-gray-700 placeholder-gray-400 rounded-md outline-none shadow-sm border-2 border-red-300 font-medium"
      />
      {showDelete && (
        <DeleteIcon
          className="h-7 w-7 cursor-pointer text-red-500"
          onClick={() => handleDelete(id)}
        />
      )}
    </div>
  );
};

export default React.memo(OptionInput);
