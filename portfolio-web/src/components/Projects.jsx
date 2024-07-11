import React from "react";
import TunnelVision from "../assets/img/tunnel-vision-project.png";
import PhoebeWebsite from "../assets/videos/phoebetazer.com.webm";
import HousingProject from "../assets/img/housing-project-data-analysis.png";
import MediaRentalProject from "../assets/img/media-rental-system-project.png";
import JakeoVideo from "../assets/videos/jakeovideo.com.webm";

const Projects = () => {
  return (
    <div name="project" className="w-full md:h-screen text-white bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            Projects
          </p>
          <p className="py-6 text-2xl">
            Check out some of my most recent web development and software
            development projects.
          </p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden">
            <img
              src={TunnelVision}
              alt="Tunnel Vision"
              className="w-full h-full object-cover rounded-md transition-opacity duration-300"
            />
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300">
              <span className="text-lg font-bold text-white tracking-wider">
                OpenVPN project
              </span>
              <p className="text-center">
                Tunnel Vision is an innovative OpenVPN client management
                application. Built with Linux and Python.
              </p>
              <div className="pt-8 text-center">
                <a href="https://github.com/Joelg96/tunnel-vision">
                  <button className="cursor-pointer transition-all bg-gray-700 text-white px-6 py-2 rounded-lg border-blue-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-blue-300 shadow-blue-300 active:shadow-none mr-4">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden">
            <video
              src={PhoebeWebsite}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded-md"
            ></video>
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col absolute inset-0 bg-black bg-opacity-80 transition-opacity duration-300">
              <span className="text-lg font-bold text-white tracking-wider">
                Music Portfolio
              </span>
              <p className="text-center">
                A website built for a client to showcase her work and services
                in the music industry. Built with React and CSS.
              </p>
              <div className="pt-8 text-center">
                <a href="https://www.phoebetazer.com/">
                  <button className="cursor-pointer transition-all bg-gray-700 text-white px-6 py-2 rounded-lg border-green-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none mr-4">
                    Live
                  </button>
                </a>
                <a href="https://github.com/Joelg96/PhoebeTazer">
                  <button className="cursor-pointer transition-all bg-gray-700 text-white px-6 py-2 rounded-lg border-blue-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-blue-300 shadow-blue-300 active:shadow-none">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden">
            <video
              src={JakeoVideo}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded-md"
            ></video>
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col absolute inset-0 bg-black bg-opacity-80 transition-opacity duration-300">
              <span className="text-lg font-bold text-white tracking-wider">
                Videography Portfolio
              </span>
              <p className="text-center">
                The first website I built. A wedding videography portfolio.
                Built with Bootstrap, HTML, CSS, and JavaScript.
              </p>
              <div className="pt-8 text-center">
                <a href="https://www.jakeovideo.com/">
                  <button className="cursor-pointer transition-all bg-gray-700 text-white px-6 py-2 rounded-lg border-green-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none mr-4">
                    Live
                  </button>
                </a>
                <a href="https://github.com/Joelg96/Jakeovideo">
                  <button className="cursor-pointer transition-all bg-gray-700 text-white px-6 py-2 rounded-lg border-blue-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-blue-300 shadow-blue-300 active:shadow-none">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden">
            <img
              src={HousingProject}
              alt="Housing Project data analysis"
              className="w-full h-full object-cover rounded-md transition-opacity duration-300"
            />
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300">
              <span className="text-lg font-bold text-white tracking-wider">
                Python Housing Data Analysis
              </span>
              <p className="text-center">
                This program, built using Python with libraries such as NumPy,
                Pandas, and Matplotlib, facilitates the loading of CSV files for
                detailed statistical analysis and histogram plotting.
              </p>
              <div className="pt-8 text-center">
                <a href="https://github.com/Joelg96/UMGC-CS-PROJECTS/tree/main/SDEV%20300%20Building%20Secure%20Python%20Applications/Assignment%205">
                  <button className="cursor-pointer transition-all bg-gray-700 text-white px-6 py-2 rounded-lg border-blue-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-blue-300 shadow-blue-300 active:shadow-none mr-4">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden">
            <img
              src={MediaRentalProject}
              alt="Java Media Rental System program"
              className="w-full h-full object-cover rounded-md transition-opacity duration-300"
            />
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300">
              <span className="text-lg font-bold text-white tracking-wider">
                Java Media Rental System
              </span>
              <p className="text-center">
                This project aimed to design a media rental system by developing
                four distinct media classes through inheritance, enabling
                identification of rented or available media types.
              </p>
              <div className="pt-8 text-center">
                <a href="https://github.com/Joelg96/UMGC-CS-PROJECTS/tree/main/CMIS%20242%20Intermediate%20Programming/Project%202">
                  <button className="cursor-pointer transition-all bg-gray-700 text-white px-6 py-2 rounded-lg border-blue-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-blue-300 shadow-blue-300 active:shadow-none mr-4">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
