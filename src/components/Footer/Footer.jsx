import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

const Footer = ({ Links }) => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-32 py-16">
        <div className="about-me">
          <h1 className="about-me font-semibold text-xl text-white">
            About Me
          </h1>
          <p className="text-slate-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus consectetur non officia nisi aut maiores natus adipisci
            neque hic veritatis.
          </p>
        </div>
        <div className="sosmed">
          <h1 className="about-me font-semibold text-xl text-white">
            Follow Me
          </h1>
          <div className="sosmed mt-2 flex flex-col gap-2 items-start">
            {Links.map((link, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center items-center relative group"
                >
                  <Link
                    href={link.url}
                    className="text-white hover:text-sky-500  w-8 h-8 border hover:border-sky-500  rounded-full p-2 text-xl relative flex gap-8 justify-center items-center transition-all ease-in-out duration-300 group"
                  >
                    {link.icon}
                    <span className="absolute w-full h-full left-full text-white  group-hover:text-sky-500 text-sm  flex lg:hidden items-center gap-4 ml-4">
                      {link.name}
                    </span>
                  </Link>
                  <span className="hidden lg:flex bg-transparent origin-left duration-300 ease-in-out scale-0 text-white absolute left-full border min-w-12  justify-center items-center px-6 rounded-sm ml-5 group-hover:scale-100 ">
                    {link.name}
                    <span className="block w-4 h-4 bg-[#030014] border-t border-l -rotate-45 absolute -left-[8.25px]"></span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="contact">
          <h1 className="about-me font-semibold text-xl text-white">
            Contact Me
          </h1>
          <div className="email">
            <Link
              href={"mailto:juliasta702@gmail.com"}
              className="flex items-center text-slate-400 hover:text-sky-500 gap-2 duration-300 transition-all ease-in-out"
            >
              {" "}
              <MdOutlineEmail className="text-xl" /> juliasta702@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-sky-500"></div>
      <div className="copyright flex justify-center">
        <p className="text-slate-300 text-center">
          Copyright © juliasta. All right reserved | created with ❤️ by{" "}
          <Link
            target="_blank"
            href={"https://github.com/JuliAstaa"}
            className="hover:text-sky-500"
          >
            Juliasta
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
