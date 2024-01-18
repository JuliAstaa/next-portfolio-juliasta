import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/AboutMe/AboutMe";
import Skills from "@/components/Skills/Skills";
import Background from "@/components/Background/Background";
import Project from "@/components/Projects/Projects";
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

export default function Home() {
  return (
    <main className="w-full bg-dark-purple min-h-dvh h-full flex flex-col justify-center relative  bottom-0">
      <div className="abolute w-full bg-dark-purple z-20">
        <div className="background absolute z-10">
          <Background />
        </div>
        <div className="w-full relative z-50">
          <div className="max-w-7xl mx-auto w-full h-fit ">
            {/* header */}
            <div className="header">
              <Navbar />
            </div>
            {/* hero */}
            <div className="w-full h-full">
              <Hero Links={Links} />
            </div>
            {/* about me */}
            <div id="about-me" className="w-full h-screen">
              <AboutMe />
            </div>
            <div id="skills" className="skills w-full h-screen">
              <Skills />
            </div>
            <div id="projects" className="w-full mt-60 lg:mt-0">
              <Project />
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
}
