"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";
const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      <p>{error.message}</p>
      <button className="border border-amber-950 p-4" onClick={reload}>
        Try again
      </button>
    </div>
  );
};

export default ErrorBoundary;
