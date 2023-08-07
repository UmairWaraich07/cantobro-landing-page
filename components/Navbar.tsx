"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../public/logo.png";
import Link from "next/link";
import { motion } from "framer-motion";

interface CustomLinkProps {
  href: string;
  title: string;
  className: string;
  active: string | undefined;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  title,
  className,
  active,
}) => {
  return (
    <Link href={`${href}`} className={`${className} relative group uppercase`}>
      {title}
      <span
        className={`h-[0.0635rem] w-0 group-hover:w-full transition-[width] ease duration-300  bg-primary inline-block absolute left-0 bottom-0
        ${active === href.slice(1) ? "w-full" : "w-0"} `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

interface CustomMobileLinkProps {
  href: string;
  title: string;
  className: string;
  toggle: () => void;
  active?: string;
}

const CustomMobileLink: React.FC<CustomMobileLinkProps> = ({
  href,
  title,
  className,
  toggle,
  active = "home",
}) => {
  const handleClick = () => {
    toggle();
  };
  return (
    <Link
      href={href}
      className={`${className} relative group uppercase`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[0.0625rem] w-0 group-hover:w-full transition-[width] ease duration-300  bg-primary inline-block absolute left-0 bottom-0
        ${active == href.slice(1) ? "w-full" : "w-0"} `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

type Props = {};

const Navbar = (props: Props) => {
  const FramerImage = motion(Image);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setIsActive] = useState("home");

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <header className="relative bg-white flex justify-between h-12 rounded-sm  px-2 text-dark">
      {/* Navbar menu for mobiles */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col items-center justify-between z-30 py-32 shadow-3xl bg-white/75 text-dark backdrop-blur-md rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <nav className="flex flex-col items-center justify-center gap-4">
            <CustomMobileLink
              className=""
              href="#home"
              title="Home"
              toggle={handleClick}
            />
            <CustomMobileLink
              className=""
              href="#about"
              title="About"
              toggle={handleClick}
              active={active}
            />
            <CustomMobileLink
              className=""
              href="#dailydose"
              title="Daily Dose"
              toggle={handleClick}
              active={active}
            />
            <CustomMobileLink
              className=""
              href="#situations"
              title="Situations"
              toggle={handleClick}
              active={active}
            />
            <CustomMobileLink
              className=""
              href="#join"
              title="Join"
              toggle={handleClick}
              active={active}
            />
          </nav>
        </motion.div>
      ) : null}

      {/* Hamburger Icon */}
      <div
        className="flex flex-col justify-center items-center cursor-pointer laptop:hidden"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light h-0.5 w-6 block transition-all duration-300 ease-out rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light h-0.5 w-6 block transition-all duration-300 ease-out rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light h-0.5 w-6 block transition-all duration-300 ease-out rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </div>

      {/* Navbar menu for desktop */}
      <nav className="hidden w-[40%] laptop:flex items-center justify-evenly">
        <CustomLink
          className=""
          href={"#home"}
          title={"home"}
          active={active}
        />
        <CustomLink
          className=""
          href={"#about"}
          title={"about"}
          active={active}
        />
        <CustomLink
          className=""
          href={"#dailydose"}
          title={"daily dose"}
          active={active}
        />
      </nav>

      {/* Header logo */}
      <Link
        href={"/"}
        className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] h-18 bg-white px-4 py-1 laptop:px-8 laptop:py-2 rounded-md shadow-md"
      >
        <Image src={logo} alt="CANTOBRO" className="w-14" priority />
      </Link>

      {/* Navbar menu for desktop right side */}
      <nav className="w-[40%] flex items-center laptop:justify-evenly justify-end">
        <CustomLink
          className="hidden laptop:block"
          href={"#situations"}
          title={"situations"}
          active={active}
        />
        <CustomLink
          className="hidden laptop:block"
          href={"#join"}
          title={"join"}
          active={active}
        />
        {/* Download button */}
        <button className="shadow-sm">
          <Link
            className="bg-primary text-white p-2 rounded-md border-2 border-transparent hover:text-primary hover:border-primary hover:bg-white
          transition  "
            href="#"
          >
            Download
          </Link>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
