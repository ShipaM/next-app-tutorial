import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ErrorWrapper } from "./error-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Next.js Tutorial-CodeEvolution",
    template: "%s | Next App",
    absolute: "",
  },
  description: "My study next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <header style={{ background: "lightblue", padding: "1rem" }}>
            Header
          </header>
          <ErrorWrapper>
            <main className="flex-1">{children}</main>
          </ErrorWrapper>

          <footer
            style={{ background: "darkblue", padding: "1rem", color: "white" }}
          >
            Footer
          </footer>
        </div>
      </body>
    </html>
  );
}
