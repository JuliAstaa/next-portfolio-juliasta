"use client";

import React from "react";
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  <FaHtml5 />,
  <FaCss3Alt />,
  <IoLogoJavascript />,
  <SiTailwindcss />,
  <FaReact />,
  <TbBrandNextjs />,
  <FaHtml5 />,
  <FaCss3Alt />,
  <IoLogoJavascript />,
  <SiTailwindcss />,
  <FaReact />,
  <TbBrandNextjs />,
  <FaHtml5 />,
  <FaCss3Alt />,
  <IoLogoJavascript />,
  <SiTailwindcss />,
  <FaReact />,
  <TbBrandNextjs />,
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      id="skills"
      className="w-full h-full p-4 flex mt-48 flex-col justify-center lg:mt-0"
    >
      <div ref={ref} className="lg:-mt-24">
        <motion.h1
          initial={{ opacity: 0, x: "-200%" }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sky-500 font-semibold text-2xl "
        >
          Skills
        </motion.h1>
        <div className="scrolled-animation relative overflow-hidden">
          <div className="flex gap-2">
            <div className="mt-8 flex gap-2 whitespace-nowrap animate-scroll-left">
              {skills.map((skill, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.5 }}
                    key={index}
                    className="flex justify-center items-center bg-[rgba(255,255,255,0.2)] text-white text-4xl w-fit px-4 py-2"
                  >
                    {skill}
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-8 flex gap-2 whitespace-nowrap animate-scroll-left">
              {skills.map((skill, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.5 }}
                    key={index}
                    className="flex justify-center items-center bg-[rgba(255,255,255,0.2)] text-white text-4xl w-fit px-4 py-2"
                  >
                    {skill}
                  </motion.div>
                );
              })}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-2"
          >
            <div className="mt-8 flex gap-2 whitespace-nowrap animate-scroll-right">
              {skills.map((skill, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.5 }}
                    key={index}
                    className="flex justify-center items-center bg-[rgba(255,255,255,0.2)] text-white text-4xl w-fit px-4 py-2"
                  >
                    {skill}
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-8 flex gap-2 whitespace-nowrap animate-scroll-right">
              {skills.map((skill, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.5 }}
                    key={index}
                    className="flex justify-center items-center bg-[rgba(255,255,255,0.2)] text-white text-4xl w-fit px-4 py-2"
                  >
                    {skill}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          <div className="flex gap-2">
            <div className="mt-8 flex gap-2 whitespace-nowrap animate-scroll-left">
              {skills.map((skill, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.5 }}
                    key={index}
                    className="flex justify-center items-center bg-[rgba(255,255,255,0.2)] text-white text-4xl w-fit px-4 py-2"
                  >
                    {skill}
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-8 flex gap-2 whitespace-nowrap animate-scroll-left">
              {skills.map((skill, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.5 }}
                    key={index}
                    className="flex justify-center items-center bg-[rgba(255,255,255,0.2)] text-white text-4xl w-fit px-4 py-2"
                  >
                    {skill}
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="absolute w-1/2 h-full top-0 left-0 bg-gradient-to-r from-dark-purple to-transparent"></div>
          <div className="absolute w-1/2 h-full top-0 right-0 bg-gradient-to-l from-dark-purple to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
