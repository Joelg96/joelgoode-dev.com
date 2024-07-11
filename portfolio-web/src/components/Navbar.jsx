import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navLinkStyles = {
    textDecoration: "none",
    position: "relative",
    padding: "10px",
    transition: "all 0.3s ease",
  };

  const underlineStyles = {
    position: "absolute",
    left: 0,
    bottom: 0,
    height: "0.2em", // Adjust thickness as needed
    width: "100%",
    backgroundColor: "white",
    transform: "scaleX(0)",
    transformOrigin: "bottom left",
    transition: "transform 0.3s ease",
    textUnderlineOffset: "0.2em", // Offset to match the text
  };

  const handleMouseEnter = (e) => {
    const underline = e.currentTarget.querySelector(".underline");
    if (underline) {
      underline.style.transform = "scaleX(1)";
    }
  };

  const handleMouseLeave = (e) => {
    const underline = e.currentTarget.querySelector(".underline");
    if (underline) {
      underline.style.transform = "scaleX(0)";
    }
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white z-10">
      <div>
        <h1 className="font-bold text-2xl font-serif cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            Joel Goode
          </Link>
        </h1>
      </div>
      {/* menu */}
      <ul className="hidden md:flex gap-x-8">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            style={navLinkStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Home
            <div className="underline" style={underlineStyles}></div>
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            style={navLinkStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            About
            <div className="underline" style={underlineStyles}></div>
          </Link>
        </li>
        <li>
          <Link
            to="project"
            smooth={true}
            duration={500}
            style={navLinkStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Projects
            <div className="underline" style={underlineStyles}></div>
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            style={navLinkStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Skills
            <div className="underline" style={underlineStyles}></div>
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            style={navLinkStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Contact
            <div className="underline" style={underlineStyles}></div>
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
