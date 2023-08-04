"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/logo.png";
import { FacebookIcon, InstagramIcon, TwitterIcon, YouTubeIcon } from "./icons";

const Footer = () => {
  return (
    <footer className="w-full bg-dark">
      <div className="w-[95%] tablet:w-[90%] max-w-[1400px] m-auto py-12 text-center tablet:text-left">
        <div className="flex flex-col justify-center items-center gap-4 tablet:justify-start tablet:items-start">
          <Image src={logo} alt="Cantobro Logo" className="w-14" priority />
          <p className="text-white text-sm leading-normal tablet:w-[75%] tablet:text-base">
            Ready to kickstart your Cantonese adventure? Say 你好 (nei5 hou2) to
            CantoBro, your fun, friendly guide to learning the Cantonese
            language!
          </p>
        </div>

        <div className="flex items-center justify-center my-10 laptop:my-10 tablet:justify-start ">
          <Link
            href={""}
            className="px-8 border-r-[1px] text-white border-r-white"
          >
            <FacebookIcon />
          </Link>
          <Link
            href={"#"}
            className="px-8 border-r-[1px] text-white border-r-white"
          >
            <InstagramIcon />
          </Link>
          <Link
            href={"#"}
            className="px-8 border-r-[1px] text-white border-r-white"
          >
            <TwitterIcon />
          </Link>
          <Link
            href={"#"}
            className="px-8 border-r-0 text-white border-r-white"
          >
            <YouTubeIcon />
          </Link>
        </div>

        <div className="text-white text-sm pt-4  border-t-[1px] tablet:text-base">
          &copy;Copyright {new Date().getFullYear()}. Ojjomedia. All Right
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
