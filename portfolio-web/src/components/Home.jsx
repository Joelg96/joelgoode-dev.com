import React from "react";
import linkedin_icon from "../assets/icons/contact-linkedin-icon.svg";
import github_icon from "../assets/icons/footer-github-icon.svg";
import { FaFileDownload } from "react-icons/fa";
import Resume from "../assets/docs/Joel-Goode-Resume.pdf";
import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "animate.css";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#0a192f]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-center text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-amber-300 bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hi, I&apos;m{" "}
            </span>
            <br />
            <span className="relative inline-block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <TypeAnimation
                  sequence={[
                    "Joel",
                    1200,
                    "a Technical Writer",
                    1200,
                    "a Web Developer",
                    1200,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.div>
            </span>
          </h1>
          <div className="text-gray-500 py-4 max-w-md text-center">
            <p>Thank you for visiting my personal portfolio.</p>
            {/* Social icons */}
            <div className="flex flex-col items-center mt-8">
              <ul className="flex space-x-4">
                <li className="bg-[#0a192f] rounded-full p-2 hover:bg-blue-500 transition duration-300">
                  <a
                    href="https://www.linkedin.com/in/joel-goode"
                    className="text-gray-300 flex items-center px-3 py-1 rounded-full"
                  >
                    <img
                      className="w-6 filter invert"
                      src={linkedin_icon}
                      alt="LinkedIn Icon for Joel Goode, the developer."
                      style={{ width: "50px", height: "50px" }}
                    />
                  </a>
                </li>
                <li className="bg-[#0a192f] rounded-full p-2 hover:bg-[#444444] transition duration-300">
                  <a
                    href="https://github.com/Joelg96"
                    className="text-gray-300 flex items-center px-3 py-1 rounded-full"
                  >
                    <img
                      className="w-6 filter invert"
                      src={github_icon}
                      alt="GitHub Icon"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </a>
                </li>
                <li className="bg-[#0a192f] rounded-full p-2 hover:bg-[#444444] transition duration-300">
                  <a
                    href="contact"
                    className="text-white flex items-center px-3 py-1 rounded-full hover:text-red-500"
                  >
                    <HiOutlineMail size={50} />
                  </a>
                </li>
                <li className="rounded-full p-2 transition hover:animate-bounce duration-300">
                  <a
                    href={Resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 flex items-center px-3 py-1 rounded-full"
                  >
                    <FaFileDownload
                      className="text-white"
                      style={{ width: "45px", height: "45px" }}
                      alt="Download Joel Goode's CV."
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex justify-center mt-6">
              <Link
                to="about"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                About Me
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight size={25} className="ml-3" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
