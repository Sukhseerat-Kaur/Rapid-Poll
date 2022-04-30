import React, { memo } from "react";
import clsx from "clsx";
import { DeleteIcon } from "../assets/Icons";

interface OptionInputProps {
  value: string;
  id: number;
  index: number;
  handleChange: (val: string, index: number) => void;
  handleDelete: (id: number) => void;
  showDelete: boolean;
  error: boolean;
}
const OptionInput = ({
  value,
  id,
  index,
  handleChange,
  handleDelete,
  showDelete,
  error,
}: OptionInputProps) => {
  console.log(`re-rendered ${index + 1}`);

  return (
    <div className="flex flex-col text-gray-500 font-semibold gap-3 text-lg">
      <div>Option {index + 1}</div>
      <div>
        <div
          className={clsx("flex items-center", {
            "justify-between": showDelete,
          })}
        >
          <input
            autoFocus
            required
            type="text"
            placeholder={`Option ${index + 1}`}
            value={value}
            onChange={(e) => handleChange(e.target.value, index)}
            className={clsx(
              "p-3 text-lg text-gray-700 placeholder-gray-300 rounded-md outline-none shadow-sm font-medium focus:scale-105 focus:shadow-md transition duration-300",
              {
                "w-11/12": showDelete,
                "w-full": !showDelete,
                "ring-red-300 ring mb-0": error && !value.trim(),
              }
            )}
          />
          {showDelete && (
            <DeleteIcon
              className="h-7 w-7 cursor-pointer text-red-500"
              onClick={() => handleDelete(id)}
            />
          )}
        </div>
        {error && !value.trim() && (
          <span className="text-red-400 font-medium text-sm">
            Option field cannot be empty
          </span>
        )}
      </div>
    </div>
  );
};

export default React.memo(OptionInput);
