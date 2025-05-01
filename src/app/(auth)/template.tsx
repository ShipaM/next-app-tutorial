"use client";
import { useState } from "react";

const AuthTemplate = ({ children }: { children: React.ReactNode }) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <div>
        <div className="p-8 bg-amber-100">{children}</div>

        <input
          placeholder="Template Input..."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AuthTemplate;
