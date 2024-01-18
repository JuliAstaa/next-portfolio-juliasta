"use client";

import React from "react";
import Background from "@/components/Background/Background";
import MoreProjects from "@/components/Projects/MoreProjects";
import NavProjects from "@/components/Navbar/NavProjects";
import Footer from "@/components/Footer/Footer";
import {
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaXTwitter,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa6";

const Links = [
  {
    name: "Istagram",
    url: "https://www.instagram.com/juliasta._",
    icon: <FaInstagram />,
  },
  {
    name: "Facebook",
    url: "https://web.facebook.com/i.astawa.3705/",
    icon: <FaFacebook />,
  },
  {
    name: "Github",
    url: "https://github.com/JuliAstaa",
    icon: <FaGithub />,
  },
  {
    name: "X",
    url: "https://x.com/astajuliii",
    icon: <FaXTwitter />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/juliastaa/",
    icon: <FaLinkedin />,
  },
  {
    name: "Discord",
    url: "https://discord.com/invite/BMSnxQg8",
    icon: <FaDiscord />,
  },
];

const page = () => {
  return (
    <main className="bg-dark-purple bg-cover w-full min-h-dvh h-fit flex justify-center relative">
      <div className="abolute w-full bg-dark-purple z-20">
        <div className="background absolute z-10">
          <Background />
        </div>
        <div className="w-full  relative z-20 top-0">
          <div className="max-w-7xl mx-auto w-full h-full ">
            <NavProjects />

            <div className="mt-16 h-full w-full">
              <MoreProjects />
            </div>
          </div>
          <div className="w-full mt-32 bg-slate-950">
            <div className="max-w-7xl mx-auto w-full p-4">
              <Footer Links={Links} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
