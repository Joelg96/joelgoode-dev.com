"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Videography portfolio website",
    description:
      "JakeoVideo.com, is a wedding videography portfolio created for a friend. I primarily used a combination of Bootstrap, HTML, CSS, and JavaScript. This allowed me to create a responsive and visually striking website, while keeping it simple per owner request.",
    image: "/img/projects/jakeovideo-website.png",
    tag: ["All", "Web/Design"],
    gitUrl: "https://github.com/Joelg96/Jakeovideo",
    previewUrl: "https://www.jakeovideo.com",
  },
  {
    id: 2,
    title: "Java Media Rental System",
    description:
      "This project aimed to design a media rental system by developing four distinct media classes through inheritance, enabling identification of rented or available media types. I also created a fifth class that managed a collection of media objects, featuring capabilities to load media from the file explorer and add new items to the collection. Additionally, it could search for media by title. The final component was a GUI, complete with a menu for loading, searching, renting media, and exiting the application.",
    image: "/img/projects/media-rental-system-project.png",
    tag: ["All", "Programming"],
    gitUrl:
      "https://github.com/Joelg96/UMGC-CS-PROJECTS/tree/main/CMIS%20242%20Intermediate%20Programming/Project%202",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Python Housing Data Analysis",
    description:
      "This program, built using Python with libraries such as NumPy, Pandas, and Matplotlib, facilitates the loading of CSV files for detailed statistical analysis and histogram plotting. It focuses on two datasets: U.S. population changes on specific dates and extensive housing data, including home age, bedrooms, and other variables. Users can interactively choose data categories, and the program computes statistics like count, mean, standard deviation, minimum, and maximum values, alongside generating histograms for a comprehensive visual representation.",
    image: "/img/projects/housing-project-data-analysis.png",
    tag: ["All", "Programming"],
    gitUrl:
      "https://github.com/Joelg96/UMGC-CS-PROJECTS/tree/main/SDEV%20300%20Building%20Secure%20Python%20Applications/Assignment%205",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Python OpenVPN program",
    description:
      "Tunnel Vision is an innovative OpenVPN client management application designed during my capstone course at UMGC. The goal of Tunnel Vision is to make VPN tunnel creation and management accessible to users of all technical backgrounds. This project was developed using Python, OpenVPN, and Digital Ocean.",
    image: "/img/projects/tunnel-vision-project.png",
    tag: ["All", "Programming"],
    gitUrl: "https://github.com/Joelg96/tunnel-vision",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold mt-4 mb-4">My Projects</h2>
      <div className="flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web/Design"
          isSelected={tag === "Web/Design"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Programming"
          isSelected={tag === "Programming"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
