import React from "react";
import linkedin_icon from "../assets/icons/contact-linkedin-icon.svg";
import github_icon from "../assets/icons/footer-github-icon.svg";
import { FaFileDownload } from "react-icons/fa";
import Resume from "../assets/docs/Joel-Goode-Resume.pdf";

const Footer = () => {
  return (
    <div id="footer" className="w-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col items-center md:flex-row md:justify-between border-t border-white py-3">
        <p className="text-lg md:text-xl text-center md:text-left">
          &copy; 2024 Joel Goode. All rights reserved.
        </p>
        <ul className="flex justify-center md:justify-end mt-4 md:mt-0">
          {/* Adjusted space between items */}
          <li className="mx-2 md:mx-4">
            <a
              href="https://github.com/Joelg96"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="filter invert"
                src={github_icon}
                alt="GitHub Icon"
                style={{ width: "40px", height: "40px" }}
              />
            </a>
          </li>
          <li className="mx-2 md:mx-4">
            <a
              href="https://www.linkedin.com/in/joel-goode"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="filter invert"
                src={linkedin_icon}
                alt="LinkedIn Icon for Joel Goode, the developer."
                style={{ width: "40px", height: "40px" }}
              />
            </a>
          </li>
          <li className="mx-2 md:mx-4">
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <FaFileDownload
                className="text-white"
                style={{ width: "40px", height: "40px" }}
                alt="Download Joel Goode's CV."
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
