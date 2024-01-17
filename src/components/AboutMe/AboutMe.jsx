"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div id="about-me" className="w-full p-4 ">
      <div ref={ref} className="mt-28">
        <motion.h1
          initial={{ opacity: 0, x: "-200%" }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sky-500 font-semibold text-2xl "
        >
          About me
        </motion.h1>
        <div className="w-full  grid-cols-4 mt-8 gap-14">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
            className=" w-full lg:w-auto h-full lg:h-auto lg:relative  lg:float-left mr-8  lg:block  flex justify-center items-center"
          >
            <Image
              priority={75}
              height={500}
              width={500}
              src="/sya.jpg"
              alt="profile"
              className="rounded-full lg:rounded-sm w-32 lg:w-52 h-32 lg:h-52"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="hidden lg:block absolute w-full h-full bg-white left-4 top-4 -z-10 rounded-sm"
            ></motion.div>
          </motion.div>
          <div className="about-me-full col-span-3 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, x: "100%" }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white text-md mb-4 mt-2 lg:mt-0 lg:text-xl"
            >
              Hello, my name is{" "}
              <span className="font-semibold">I Made Juli Astawa</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: "80%" }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-slate-300 text-sm lg:text-base mb-1"
            >
              I am a junior web developer with a struggling background.
              Initially, I had no interest in programming when I entered
              Information Technology school in 2020 amid the COVID-19 pandemic.
              Nonetheless, after being placed in the software engineering
              department, my interest began to grow.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: "60%" }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-slate-300 text-sm lg:text-base mb-1"
            >
              In Grade 1, I gained interest through a project to create a
              website about tourist attractions in Indonesia using HTML and CSS.
              In grade 2 of vocational high school, training at the Politeknik
              Nasional(Polnas) opened new doors, especially in PHP and MySQL
              programming. new doors, especially in PHP and MySQL programming. I
              managed to create a student registration CRUD website, which
              further strengthened my interest in programming. my interest in
              programming.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: "40%" }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-slate-300 text-sm lg:text-base mb-1"
            >
              In Grade 3, the learning focus includes PHP, Java, and C++ in
              preparation for the Skills Competency Test. During UKK, I managed
              to create a calculator using C++, a drugstore application with
              Java, and a hotel booking website using PHP and MySQL.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: "20%" }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-slate-300 text-sm lg:text-base mb-2"
            >
              Despite not being able to continue to higher education due to
              economic factors after graduating from vocational school, my
              passion to become a programmer never died. I continued to learn by
              myself, started to understand basic JavaScript, and in July 2023,
              switched to React.js. Until now, I continue to develop my React.js
              skills and try Next.js. My dream of becoming a programmer is alive
              and well.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
