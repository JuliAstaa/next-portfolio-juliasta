"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NavProjects = () => {
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
      className={`max-w-7xl w-full h-16 py-4 fixed top-0 z-[999] ${
        scrolled > 0 ? "navbar-scrolled" : null
      }`}
    >
      <div className="w-full h-full  grid grid-cols-4 px-4 lg:px-8 xl:px-4 place-content-center">
        <div className="logo flex justify-start items-center  lg:col-span-1">
          <motion.h1
            initial={{ x: "-500%" }}
            animate={{ x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="text-white font-semibold text-xl"
          >
            juliasta.
          </motion.h1>
        </div>
        <div className="col-span-2 nav-menu grid place-items-center text-white ">
          <motion.h1
            initial={{ y: "-200%" }}
            animate={{ y: 0 }}
            className="font-semibold text-md text-sky-500"
          >
            PROJECTS
          </motion.h1>
        </div>
        <div className="flex items-center justify-end">
          <Link href={"/"}>
            <motion.button
              initial={{ x: "500%" }}
              animate={{ x: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              aria-label="back"
              className="flex justify-center items-center border rounded-md hover:border-sky-500 px-4 py-1 text-white hover:text-sky-500 transition-all ease-in-out duration-200"
            >
              Back
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavProjects;
