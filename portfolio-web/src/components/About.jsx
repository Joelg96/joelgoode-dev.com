import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-white"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p> I'm Joel! I am based in Greenville, SC.</p>
            </div>
            <div>
              <p>
                {" "}
                I work as an Information Engineer at{" "}
                <a
                  href="https://www.starburst.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{
                    textDecoration: "underline",
                    textDecorationThickness: "0.2em",
                    textUnderlineOffset: "0.2em",
                  }}
                >
                  Starburst Data
                  <FaArrowUpRightFromSquare className="inline ml-1 text-amber-500" />
                </a>{" "}
                and contribute to documentation for the{" "}
                <a
                  href="https://trino.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{
                    textDecoration: "underline",
                    textDecorationThickness: "0.2em",
                    textUnderlineOffset: "0.2em",
                  }}
                >
                  Trino
                  <FaArrowUpRightFromSquare className="inline ml-1 text-amber-500" />
                </a>{" "}
                OSS project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
