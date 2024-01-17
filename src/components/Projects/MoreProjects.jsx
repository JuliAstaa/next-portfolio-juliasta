"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: 1,
    name: "To-Do List",
    desc: "A simple to-do list website using react.js, tailwindCSS, and redux",
    image: "/to-do-list.png",
    tech: {
      image: ["/react.png", "/reduxjs.png", "/tailwind.png"],
    },
    url: "https://to-do-list-juliasta.vercel.app/",
    repoUrl: "https://github.com/JuliAstaa/to-do-list",
  },
  {
    id: 2,
    name: "APOD",
    desc: "APOD (Astronomy Pictures Of the Day) website using NASA's API",
    image: "/APOD.png",
    tech: {
      image: ["/react.png", "/reduxjs.png", "/tailwind.png"],
    },
    url: "https://apod-juliasta.vercel.app/",
    repoUrl: "https://github.com/JuliAstaa/APOD",
  },
  {
    id: 3,
    name: "Astacumalaka's Waroeng",
    desc: "A simple e-commerce website, I made this website while learning redux",
    image: "/react-redux.png",
    tech: {
      image: ["/react.png", "/reduxjs.png", "/tailwind.png"],
    },
    url: "https://react-redux-juliasta.vercel.app/",
    repoUrl: "https://github.com/JuliAstaa/react-redux",
  },
  {
    id: 4,
    name: "Wibunime",
    desc: "My first nextjs project",
    image: "/wibunime.png",
    tech: {
      image: ["/next.png", "/tailwind.png"],
    },
    url: "https://wibunime.vercel.app/",
    repoUrl: "https://github.com/JuliAstaa/wibunime",
  },
];

const MoreProjects = () => {
  const [active, setActive] = useState(false);
  const [projectId, setProjectId] = useState();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const selectedProject = projects.find((project) => project.id === projectId);

  const handleClick = (id) => {
    setActive(!active);
    setProjectId(id);
  };

  return (
    <div
      ref={ref}
      className="w-full min-h-full h-full grid md:grid-cols-2 lg:grid-cols-4 place-content-center gap-4 p-4 "
    >
      {projects.map((project, index) => {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 * index, duration: 0.5 * index }}
            onClick={() => handleClick(project.id)}
            key={index}
            className="group hover:scale-95 border-2 overflow-hidden transition-all ease-in-out duration-300 rounded-md relative cursor-pointer"
          >
            <Image
              priority={75}
              src={project.image}
              alt={project.name}
              width={500}
              height={500}
              className="object-cover w-full h-48 group-hover:scale-125 transition-all ease-in-out duration-300"
            />
            <div className="absolute -bottom-full transition-all ease-in-out duration-500 left-0 w-full h-full bg-[rgba(0,0,0,.7)] grid place-content-center group-hover:bottom-0">
              <h1 className="text-white text-xl font-semibold">
                {project.name}
              </h1>
            </div>
          </motion.div>
        );
      })}
      {selectedProject ? (
        <div
          className={`fixed z-[999] w-full h-full bg-[rgba(0,0,0,0.8)] top-0 left-0 justify-center items-center ${
            active ? "flex" : "hidden"
          }`}
        >
          <div className="w-auto h-auto bg-slate-950 p-4 rounded-lg border">
            <div className="header w-full flex justify-end">
              <button
                onClick={() => setActive(!active)}
                aria-label="close-modal"
                className="hover:border-sky-500 border-2 rounded-md py-1 w-24 flex justify-center items-center text-white hover:text-sky-500 transition-all ease-in-out duration-300"
              >
                Close
              </button>
            </div>
            <div className="max-w-5xl h-full grid-cols-2 grid mt-6 gap-4 lg:gap-0">
              <div className="border-r border-sky-500 pr-4 col-span-2 lg:col-span-1">
                <Image
                  priority={75}
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  width={500}
                  height={500}
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-4 justify-center pl-4 col-span-2 lg:col-span-1">
                <div className="title">
                  <h1 className="text-white text-xl font-bold ">
                    {selectedProject.name}
                  </h1>
                  <p className="text-slate-200 text-xs lg:text-sm">
                    {selectedProject.desc}
                  </p>
                </div>
                <div className="tech">
                  <h1 className="text-white font-semibold">Tech: </h1>
                  <div className="flex gap-2 items-center">
                    {selectedProject.tech.image.map((img, index) => {
                      return (
                        <Image
                          key={index}
                          src={img}
                          width={100}
                          height={100}
                          className="object-contain w-4 lg:w-8  h-4 lg:h-8"
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="text-white">
                  <table>
                    <tbody>
                      <tr>
                        <td>Live demo 🌐</td>
                        <td> : </td>
                        <td>
                          {" "}
                          <Link
                            target="_blank"
                            href={selectedProject.url}
                            className="flex items-center gap-2 hover:text-sky-500"
                          >
                            {selectedProject.name} <FaArrowUpRightFromSquare />
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Repository 📁</td>
                        <td> : </td>
                        <td>
                          {" "}
                          <Link
                            target="_blank"
                            href={selectedProject.repoUrl}
                            className="flex items-center gap-2 hover:text-sky-500"
                          >
                            {selectedProject.name} <FaArrowUpRightFromSquare />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MoreProjects;
