"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const sliders = [
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

const Project = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="w-full h-full p-4 mt-16 text-white overflow-x-hidden">
      <div className="w-full flex justify-between items-center ">
        <motion.h1
          initial={{ opacity: 0, x: "-200%" }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sky-500 font-semibold text-2xl "
        >
          Projects
        </motion.h1>
        <Link href={"/projects"} className="">
          <motion.button
            initial={{ opacity: 0, x: "200%" }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            aria-label="Explore More Projects"
            className="border hover:border-sky-500 text-white hover:text-sky-500 flex justify-center items-center  py-1 px-4 rounded-sm"
          >
            Explore More Projects
          </motion.button>
        </Link>
      </div>
      <div
        ref={ref}
        className="w-full h-full flex justify-center items-center bg-dark-purple mt-8"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="w-[90%] h-[90%] relative"
        >
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            autoplay={{ delay: 10000 }}
            spaceBetween={10}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
              clickable: true,
            }}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            className="mySwiper2"
          >
            {sliders.map((slider, index) => {
              return (
                <SwiperSlide key={slider.id}>
                  <div className="group">
                    <Image
                      priority={75}
                      src={slider.image}
                      width={1280}
                      height={720}
                      alt={slider.name}
                      className="w-full h-42 lg:h-[720px] object-cover relative group"
                    />
                    <div className="lg:flex hidden  absolute w-full h-full left-0 top-0 bg-[rgba(3,0,20,0.5)] p-4 ">
                      <div className="w-1/3 rounded-md bg-[rgba(0,0,0,.8)] ml-8 p-4 flex gap-6 flex-col justify-center">
                        <div>
                          <motion.h1
                            initial={{ opacity: 0, x: "-100%" }}
                            animate={
                              inView ? { opacity: 1, x: 0 } : { opacity: 0 }
                            }
                            transition={{ duration: 0.5 }}
                            className="text-white font-bold text-xl"
                          >
                            {slider.name}
                          </motion.h1>
                          <motion.p
                            initial={{ opacity: 0, x: "-200%" }}
                            animate={
                              inView ? { opacity: 1, x: 0 } : { opacity: 0 }
                            }
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="text-slate-100"
                          >
                            {slider.desc}
                          </motion.p>
                        </div>
                        <div className="tech">
                          <motion.h1
                            initial={{ opacity: 0, x: "-200%" }}
                            animate={
                              inView ? { opacity: 1, x: 0 } : { opacity: 0 }
                            }
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="text-white font-semibold"
                          >
                            Tech:{" "}
                          </motion.h1>
                          <div className="flex gap-2 items-center">
                            {slider.tech.image.map((img, index) => {
                              return (
                                <Image
                                  priority={75}
                                  alt={img}
                                  key={index}
                                  src={img}
                                  width={100}
                                  height={100}
                                  className="object-contain w-8 h-8"
                                />
                              );
                            })}
                          </div>
                        </div>
                        <div>
                          <table>
                            <tbody>
                              <motion.tr
                                initial={{ opacity: 0, x: "-200%" }}
                                animate={
                                  inView ? { opacity: 1, x: 0 } : { opacity: 0 }
                                }
                                transition={{ delay: 0.9, duration: 0.5 }}
                              >
                                <td>Live demo 🌐</td>
                                <td> : </td>
                                <td>
                                  {" "}
                                  <Link
                                    target="_blank"
                                    href={slider.url}
                                    className="flex items-center gap-2 hover:text-sky-500"
                                  >
                                    {slider.name} <FaArrowUpRightFromSquare />
                                  </Link>
                                </td>
                              </motion.tr>
                              <motion.tr
                                initial={{ opacity: 0, x: "-200%" }}
                                animate={
                                  inView ? { opacity: 1, x: 0 } : { opacity: 0 }
                                }
                                transition={{ delay: 1.2, duration: 0.5 }}
                              >
                                <td>Repository 📁</td>
                                <td> : </td>
                                <td>
                                  {" "}
                                  <Link
                                    target="_blank"
                                    href={slider.repoUrl}
                                    className="flex items-center gap-2 hover:text-sky-500"
                                  >
                                    {slider.name} <FaArrowUpRightFromSquare />
                                  </Link>
                                </td>
                              </motion.tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="hidden w-full h-full lg:h-fit justify-between lg:justify-center  gap-8 absolute bottom-0 group-hover:flex">
                      <button
                        aria-label="prev"
                        className="swiper-prev text-4xl bg-[rgba(0,0,0,.5)] lg:bg-transparent"
                      >
                        <RiArrowLeftDoubleFill />
                      </button>
                      <button
                        aria-label="next"
                        className="swiper-next text-4xl rotate-180 h-full bg-[rgba(0,0,0,.5)] lg:bg-transparent"
                      >
                        <RiArrowLeftDoubleFill />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="absolute lg:right-0 top-3/4 lg:top-1/4 w-full lg:w-1/2 h-full">
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              autoplay={{ delay: 10000 }}
              spaceBetween={10}
              slidesPerView={3}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs, Autoplay]}
              className="mySwiper flex justify-center items-center rounded-md "
            >
              {sliders.map((slider, index) => {
                return (
                  <SwiperSlide key={slider.id}>
                    <Image
                      src={slider.image}
                      width={1280}
                      height={720}
                      alt={slider.name}
                      className="h-16 lg:h-72 object-cover rounded-md"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
