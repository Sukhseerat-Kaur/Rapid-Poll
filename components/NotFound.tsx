import * as React from "react";
import Error from "../assets/Error";
import Header from "./Header";

const NotFound = ({ message }: { message: string }) => (
  <div className="bg-gray-100 min-h-screen max-h-max flex flex-col">
    <Header />
    <div className="flex-1 bg-gray-100 flex flex-col gap-6 items-center justify-center p-4">
      <Error className="w-full max-w-sm" />
      <span className="text-lg font-medium text-gray-600">{message}</span>
    </div>
  </div>
);

export default NotFound;
