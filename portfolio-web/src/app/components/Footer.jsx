import React from "react";
import { DownloadIcon } from "@heroicons/react/solid";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent">
      <div className="container p-12 flex justify-between items-center">
        <span>
          <a
            href="/path-to-resume.pdf" // Replace with the actual path to your resume
            download
            className="text-blue-500 hover:underline flex items-center"
          >
            <DownloadIcon className="w-4 h-4 mr-1" />
            Download CV
          </a>
        </span>
        <p className="text-slate-500">JOEL GOODE | All rights reserved 2023.</p>
      </div>
    </footer>
  );
};

export default Footer;
