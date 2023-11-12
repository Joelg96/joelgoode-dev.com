"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-700">
              Hi, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Joel",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Web Developer",
                1200,
                "a Technical Writer",
                1200,
                "a UX Designer",
                1200,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-700 via-teal-700 to-black">
              Contact me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-700 via-teal-700 to-black mt-3">
              <span className="block bg-[#000000] hover:bg-[#121212] rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full overflow-hidden w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <div className="rounded-full">
              <Image
                src="/img/hero-img.jpg"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
