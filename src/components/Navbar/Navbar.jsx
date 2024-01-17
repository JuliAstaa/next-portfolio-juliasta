"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  {
    name: "Home",
    url: "#home",
  },
  {
    name: "About Me",
    url: "#about-me",
  },
  {
    name: "Skills",
    url: "#skills",
  },
  {
    name: "Projects",
    url: "#projects",
  },
  {
    name: "Contact Me",
    url: "mailto:juliasta702@gmail.com",
  },
];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <div
      className={`max-w-7xl w-full h-16 py-4 fixed  z-[999] ${
        scrolled > 0 ? "navbar-scrolled" : null
      }`}
    >
      <div className="w-full h-full  grid grid-cols-4 px-4 lg:px-8 xl:px-4 place-content-center">
        <div className="logo flex justify-start items-center col-span-3 lg:col-span-1">
          <motion.h1
            initial={{ x: "-500%" }}
            animate={{ x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="text-white font-semibold text-xl"
          >
            juliasta.
          </motion.h1>
        </div>
        <div className="hidden col-span-2 nav-menu lg:grid place-items-center text-white ">
          <ul className="text-white flex  gap-4">
            {navLinks.map((link, index) => {
              return (
                <motion.li
                  initial={{ y: "-200%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.25 * index }}
                  key={index}
                  className="flex flex-col justify-center items-center group"
                >
                  <Link
                    href={link.url}
                    className="group-hover:text-sky-500 transition-all ease-in-out duration-200 "
                  >
                    {link.name}
                  </Link>
                  <span className="origin-center transition-all ease-in-out duration-500 block w-full h-[2px] bg-sky-500 scale-0 group-hover:scale-100"></span>
                </motion.li>
              );
            })}
          </ul>
        </div>
        <div className="download-cv hidden lg:flex items-center justify-end">
          <a href={"/Resume.pdf"} download={"/Resume.pdf"}>
            <motion.button
              initial={{ x: "500%" }}
              animate={{ x: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              aria-label="download-cv"
              className="flex justify-center items-center border hover:border-sky-500 px-4 py-1 text-white hover:text-sky-500 transition-all ease-in-out duration-200"
            >
              Download CV
            </motion.button>
          </a>
        </div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className=" lg:hidden flex justify-end items-center relative"
        >
          <button
            onClick={() => setActive(!active)}
            aria-label="hamburger-button"
            className={`w-16 h-11 flex flex-col justify-around items-center  ${
              active ? "hamburger-active" : null
            }`}
          >
            <span className="hamburger-line origin-left translate-x-1.5"></span>
            <span className="hamburger-line origin-left"></span>
            <span className="hamburger-line origin-left translate-x-1.5"></span>
          </button>
          <div
            className={`absolute z-[999]  bg-[#030014] top-full right-0 w-[300px] h-auto border p-8 rounded origin-top-right duration-300 transition-all ease-in-out ${
              active ? "scale-100" : "scale-0"
            }`}
          >
            <ul className="text-white flex flex-col gap-4">
              {navLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="hover:text-sky-500 transition-all ease-in-out duration-200 "
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
              <li className="mt-10">
                <a href={"/Resume.pdf"} download={"/Resume.pdf"}>
                  <button
                    aria-label="Download CV"
                    className="flex lg:hidden justify-center items-center border hover:border-sky-500 px-4 py-1 text-white hover:text-sky-500 transition-all ease-in-out duration-200"
                  >
                    Download CV
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
