"use client";

import React from "react";
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = ({ Links }) => {
  return (
    <div
      id="home"
      className="p-4 xl:p-4 lg:p-8 grid grid-cols-2 w-full min-h-dvh"
    >
      <div className="grid ">
        <div className="hello mt-16  flex flex-col justify-center  w-full h-3/4 items-start col-span-2 lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: "-200%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="hi">
              <h1 className="text-white text-3xl font-semibold">
                Hello there👋
              </h1>
            </div>
            <div className="name text-xl">
              <p className="text-slate-300">My name is Juli Asta</p>
            </div>
            <div className="name text-xl">
              <p className="text-slate-300">
                I am a junior{" "}
                <span className="font-semibold text-sky-500">
                  {" "}
                  web developer
                </span>
              </p>
            </div>
          </motion.div>

          <div className="sosmed mt-2 flex gap-2">
            {Links.map((link, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: "200%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  key={index}
                  className="flex flex-col justify-center items-center relative  group"
                >
                  <Link
                    target="_blank"
                    aria-label={link.name}
                    href={link.url}
                    className="text-white hover:text-sky-500  w-8 h-8 border hover:border-sky-500  rounded-full p-2 text-xl relative flex justify-center items-center"
                  >
                    {link.icon}
                  </Link>
                  <span className="hidden lg:flex bg-[#030014] origin-top duration-300 ease-in-out scale-0 text-white absolute top-full border min-w-12  justify-center items-center px-2 rounded-sm mt-3 group-hover:scale-100">
                    {link.name}
                    <span className="block w-4 h-4 bg-[#030014] border-t border-l rotate-45 absolute -top-[8.25px]"></span>
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-3/4 grid place-content-center col-span-2 -mt-16 lg:col-span-1 lg:mt-16">
        <div className="logo-logo grid place-content-center grid-cols-10">
          <div></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-700 text-4xl lg:text-6xl col-span-8  "
          >
            <FaReact className="hover:text-slate-50 transition-all ease-in-out duration-300" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-slate-700 text-4xl lg:text-6xl"
          >
            <TbBrandNextjs className="hover:text-slate-50 transition-all ease-in-out duration-300" />
          </motion.div>
          <div className="text-slate-700 text-4xl lg:text-6xl col-span-3"></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-slate-700 text-4xl lg:text-5xl col-span-7"
          >
            <IoLogoJavascript className="hover:text-slate-50 transition-all ease-in-out duration-300" />
          </motion.div>
          <div className="text-slate-700 text-4xl lg:text-5xl col-span-4"></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-slate-700 text-4xl lg:text-5xl"
          >
            <FaCss3Alt className="hover:text-slate-50 transition-all ease-in-out duration-300" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-slate-700 text-4xl lg:text-5xl col-span-5"
          >
            <FaHtml5 className="hover:text-slate-50 transition-all ease-in-out duration-300" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="text-slate-700 text-4xl lg:text-6xl"
          >
            <SiTailwindcss className="hover:text-slate-50 transition-all ease-in-out duration-300" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
