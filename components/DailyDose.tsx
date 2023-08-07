"use client";
import Image from "next/image";
import React from "react";
import phone from "../public/daily-dose.png";
import { motion } from "framer-motion";

type Props = {};
const DailyDose = (props: Props) => {
  return (
    <section
      id="dailydose"
      className="bg-hero-tablet-bg w-full py-12
     laptop:py-16 laptop:bg-hero-desktop-bg "
    >
      <div className="max-w-[1400px] w-[95%] tablet:w-[90%] m-auto flex flex-col items-center  justify-center tablet:justify-around gap-8 tablet:flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className=" tablet:w-[50%] bg-white p-6 tablet:p-6 laptop:p-12 text-center tablet:text-left m-auto border-r-[4px] border-r-primary
          border-b-[4px] border-b-primary rounded-br-lg rounded-bl-lg rounded-tr-lg tablet:border-r-[9px]  tablet:border-b-[9px]  tablet:rounded-br-2xl
         tablet:rounded-tr-2xl tablet:rounded-bl-2xl "
        >
          <h2 className=" uppercase text-primary font-bold  text-2xl tablet:text-4xl laptop:text-[2.5rem] laptop:leading-snug">
            Daily dose of cantonese
          </h2>
          <p className="text-secondary mt-4 text-base leading-relaxed">
            Our Phrase of the Day feature is your daily Cantonese vitamin! We
            serve up fresh, authentic sentences, with a dash of humor and a side
            of cultural notes. You&apos;ll be cracking jokes in Cantonese faster
            than you can say 肚餓 (tou5 go1 - I&apos;m hungry)!
          </p>
        </motion.div>

        <Image
          src={phone}
          alt="Image of Iphone displaying daily phrase of Cantonese."
          className="object-contain w-[250px] tablet:w-[250px] laptop:w-[300px] desktop:w-[320px] "
          priority
        />
      </div>
    </section>
  );
};

export default DailyDose;
