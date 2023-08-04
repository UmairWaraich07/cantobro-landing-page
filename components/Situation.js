"use client";
import Image from "next/image";
import React from "react";
import img1 from "../public/situation1-img.png";
import img2 from "../public/situation2-img.png";
import { motion } from "framer-motion";

const Situation = () => {
  return (
    <section
      id="situations"
      className="w-full max-w-[1400px] m-auto py-12 laptop:py-16 flex flex-col justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-[90%] laptop:w-[80%] desktop:w-[70%]  m-auto text-center"
      >
        <h2 className="uppercase text-dark font-bold text-2xl tablet:text-[2.5rem] tablet:leading-snug">
          Cantonese for Any Situation
        </h2>
        <p className="text-secondary leading-relaxed mt-4 mb-6 tablet:mt-4 tablet:mb-8 tablet:text-lg laptop:text-xl">
          Lost in the bustling markets of Hong Kong or ordering your first real
          dim sum? With our handy situation-based categories, you&apos;ll always
          have the right words at your fingertips. Be it dining, shopping, or
          asking for directions, we&apos;ve got you covered.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0, transition: { duration: 0.5 } }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full relative flex justify-center items-center mt-8"
      >
        <Image
          src={img1}
          alt="Iphone displaying solution using cantobro"
          className="object-cover h-[200px] w-[200px] tablet:w-[250px] laptop:w-[300px] laptop:h-[250px] desktop:w-[350px] desktop:h-[300px] -z-10 translate-x-16 translate-y-8
          tablet:translate-x-24 laptop:translate-x-28 desktop:translate-x-32"
          priority
        />
        <Image
          src={img2}
          alt="Iphone analyzing your situation using cantobro"
          className="object-contain h-[220px] w-[250px] tablet:w-[300px] tablet:h-[270px] laptop:w-[350px] laptop:h-[320px] desktop:w-[400px] desktop:h-[350px]
          -translate-x-10 tablet:-translate-x-16"
          priority
        />
      </motion.div>
    </section>
  );
};

export default Situation;
