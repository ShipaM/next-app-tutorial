"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  {
    href: "/login",
    name: "Login",
  },
  {
    href: "/register",
    name: "Register",
  },
  {
    href: "/forgot-password",
    name: "Forgot Password",
  },
];
const Authlayout = ({ children }: { children: React.ReactNode }) => {
  const [input, setInput] = useState("");

  const pathname = usePathname();

  return (
    <div>
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/");
        return (
          <Link
            className={isActive ? "font-bold text-blue-700" : "text-gray-500"}
            href={link.href}
            key={link.href}
          >
            {link.name}
          </Link>
        );
      })}
      <div className="p-8 bg-amber-600">
        <input
          placeholder="Layout Input..."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="p-8 bg-amber-100">{children}</div>
    </div>
  );
};

export default Authlayout;
