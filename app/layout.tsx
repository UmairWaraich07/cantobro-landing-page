import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import React, { ReactNode } from "react";

const josefin = Josefin_Sans({ subsets: ["latin"], variable: "--font-jose" });

export const metadata = {
  title: "Cantobro landing page",
  description:
    "Cantobro is a mobile application for learning cantonesse language.",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className={josefin.variable}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
