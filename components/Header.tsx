import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 px-12">
      <div className="text-5xl font-semibold font-Fasthand text-red-500">
        Rapid Poll
      </div>
      <div className="bg-red-500 text-white font-semibold py-2 px-3 rounded cursor-pointer">
        Sign in
      </div>
    </div>
  );
};

export default Header;
