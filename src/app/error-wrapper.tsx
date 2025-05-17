"use client";

import { useState } from "react";

interface ErrorWrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({
  message = "An error occurred",
}: {
  message?: string;
}) => {
  const [error, setError] = useState(false);

  if (error) throw new Error(message);

  return (
    <div>
      <button
        title="Simulate Error"
        className="bg-red-950 text-red-500 rounded p-1 leading-none font-semibold text-shadow-amber-100"
        onClick={() => setError(true)}
      >
        Simulate Error
      </button>
    </div>
  );
};

export const ErrorWrapper = ({ children }: ErrorWrapperProps) => {
  return (
    <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300 ">
      <div className="absolute top-0 left-4 -translate-y-1/2">
        <ErrorSimulator message="Simulated error in root layout" />
      </div>
      {children}
    </div>
  );
};
