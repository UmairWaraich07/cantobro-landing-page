"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import playstore from "../public/google-play-store.png";
import apple from "../public/icons8-apple-logo-50.png";
import { motion } from "framer-motion";

type Props = {};

const Join = (props: Props) => {
  return (
    <section
      id="join"
      className="bg-hero-tablet-bg h-fit object-contain w-full py-16 tablet:py-20  laptop:bg-hero-desktop-bg"
    >
      <div
        className="max-w-[1400px] grid content-center justify-center bg-white w-[95%] tablet:w-[90%] m-auto p-4 py-12 tablet:p-8 laptop:p-10  text-center
         tablet:text-left  border-r-[4px] border-r-primary border-b-[4px] border-b-primary rounded-br-lg rounded-bl-lg rounded-tr-lg tablet:border-r-[9px]
        tablet:border-b-[9px]  tablet:rounded-br-2xl tablet:rounded-tr-2xl tablet:rounded-bl-2xl tablet:mt-24 desktop:mt-0 "
      >
        {" "}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-primary uppercase text-2xl font-bold tablet:text-[2.5rem] tablet:w-[80%] laptop:w-[70%] tablet:leading-snug">
            Join the CantoBro Family
          </h2>
          <p className="text-secondary text-sm mt-4 laptop:mt-6 leading-tight tablet:w-[75%] tablet:text-base laptop:text-xl ">
            Get ready to navigate Cantonese like a local! Join CantoBro and
            let&apos;s demystify Cantonese together. One hilarious phrase at a
            time . <br />
            <br />
            CantoBro - Making Cantonese Fun, One Phrase at a Time!
          </p>

          <h4 className="mt-8 uppercase text-dark font-bold tablet:text-2xl laptop:mt-10">
            Download app now
          </h4>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="flex justify-center items-center tablet:justify-start gap-4 tablet:gap-6 mt-4 laptop:mt-4"
          >
            <Link
              href="#"
              className="bg-dark text-white p-1 px-2 tablet:px-4 rounded-md flex items-center gap-1 shadow-sm tablet:gap-4
              transition cta"
            >
              <Image
                src={apple}
                alt="App Store logo"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Join;
