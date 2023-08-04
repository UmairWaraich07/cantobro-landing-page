"use client";
import Image from "next/image";
import React from "react";
import checkbox from "../public/checkbox-circle-fill.png";
import aboutImg from "../public/about-img.png";
import { motion } from "framer-motion";

const Features = ({ img, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="w-full p-4 shadow-3xl rounded-md flex items-start justify-start gap-4
    tablet:p-2 tablet:gap-2 laptop:p-6 laptop:gap-6"
    >
      <Image src={img} alt="checkbox-circle" />
      <div className=" flex flex-col gap-1">
        <h4 className="uppercase text-lg text-dark font-semibold"> {title} </h4>
        <p className="text-secondary text-sm leading-normal">{description}</p>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="w-full max-w-[1400px] m-auto py-12 laptop:py-16"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-[90%] laptop:w-[80%] desktop:w-[70%]  m-auto text-center"
      >
        <h2 className="uppercase text-dark font-bold text-2xl tablet:text-[2.5rem]">
          about our app
        </h2>
        <p className="text-secondary leading-relaxed mt-4 mb-6 tablet:mt-4 tablet:mb-8 tablet:text-lg laptop:text-xl">
          Forget boring lessons and monotonous drills! With our hilarious daily
          phrases, cultural insights, and context-rich sentences, you&apos;ll be
          giggling your way to fluency.
        </p>
      </motion.div>

      <div
        className="tablet:w-[90%] tablet:m-auto flex flex-col items-center justify-center tablet:justify-around gap-6 tablet:mt-20 tablet:flex-row laptop:gap-10
         "
      >
        <Image
          src={aboutImg}
          alt="Image of Iphone with Cantobro features"
          className="object-contain w-[250px] tablet:w-[250px] laptop:w-[300px] desktop:w-[320px]"
          priority
        />
        <div className="w-full flex flex-col gap-6 mx-2 items-center justify-center tablet:w-[50%] laptop:gap-8">
          <Features
            img={checkbox}
            title={"Creative design"}
            description={
              "Cantobro is a combination of we described illustrations and good architecture."
            }
          />
          <Features
            img={checkbox}
            title={"easy to use"}
            description={
              "Cantobro have a great user interface that is not only easy to use but also responsive."
            }
          />
          <Features
            img={checkbox}
            title={"Best user experince"}
            description={
              "Cantobro app is well designed and it provides the best user experience."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default About;
