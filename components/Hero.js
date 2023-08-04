"use client";
import React from "react";
import Navbar from "./Navbar";
import playstore from "../public/google-play-store.png";
import apple from "../public/icons8-apple-logo-50.png";
import heroImg from "../public/hero-image.png";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./AnimatedText";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-hero-tablet-bg h-fit object-contain w-full pb-10 tablet:pb-20 laptop:bg-hero-desktop-bg"
    >
      <div className="max-w-[1400px] w-[95%] tablet:w-[90%] m-auto">
        <div className="pt-6">
          <Navbar />
        </div>

        <div className=" w-full flex flex-col laptop:flex-row items-center justify-center laptop:gap-20">
          {/* Hero section content */}
          <div
            className="mt-12 grid content-center justify-center bg-white w-full p-4 py-12 tablet:p-8 laptop:p-10  text-center tablet:text-left 
             border-r-[4px] border-r-primary border-b-[4px] border-b-primary rounded-br-lg rounded-bl-lg rounded-tr-lg tablet:border-r-[9px] 
              tablet:border-b-[9px]  tablet:rounded-br-2xl tablet:rounded-tr-2xl tablet:rounded-bl-2xl tablet:mt-24 desktop:mt-0 "
          >
            <AnimatedText text={"welcome to cantobro!"} />
            <p className="text-secondary text-sm mt-4 laptop:mt-6 leading-tight tablet:w-[75%] tablet:text-base laptop:text-xl laptop:w-full">
              Ready to kickstart your Cantonese adventure? Say 你好 (nei5 hou2)
              to CantoBro, your fun, friendly guide to learning the Cantonese
              language!
            </p>

            <h4 className="mt-8 uppercase text-dark font-bold tablet:text-2xl laptop:mt-10">
              Download app now
            </h4>

            <div className="flex justify-center items-center tablet:justify-start gap-4 tablet:gap-6 mt-4 laptop:mt-4">
              <Link
                href="#"
                className="transition cta bg-dark text-white p-1 px-2 tablet:px-4 rounded-md flex items-center gap-1 shadow-sm tablet:gap-4 border-2 border-transparent"
              >
                <Image
                  src={apple}
                  alt="playstore logo"
                  className="w-6"
                  priority
                />
                <div className="flex flex-col items-start">
                  <p className="text-xs cursor-pointer ">Downlaod on the</p>
                  <h4 className="text-base font-medium -mt-[6px] tablet:text-lg cursor-pointer">
                    App Store
                  </h4>
                </div>
              </Link>
              <Link
                href="#"
                className="bg-transparent text-dark p-1 px-2 tablet:px-4 rounded-md flex items-center gap-1 shadow-sm tablet:gap-4
                transition border-2 border-dark cta"
              >
                <Image
                  src={playstore}
                  alt="playstore logo"
                  className="w-6"
                  priority
                />
                <div className="flex flex-col items-start">
                  <p className="text-[10px] uppercase cursor-pointer">
                    Get it on
                  </p>
                  <h4 className="text-base font-medium tablet:text-lg -mt-[6px] cursor-pointer">
                    Google Play
                  </h4>
                </div>
              </Link>
            </div>
          </div>

          {/* Hero section Image */}
          <Image
            src={heroImg}
            alt="Cantobro"
            className="mt-12  h-full object-contain w-[300px]  flex justify-center items-center sm:hidden 
          laptop:block  laptop:w-[450px] laptop:justify-end"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
