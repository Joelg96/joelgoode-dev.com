"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-disc pl-2 col-span-1">
          <li>Adobe XD</li>
          <li>Bootstrap</li>
          <li>CSS</li>
          <li>Figma</li>
          <li>Git</li>
          <li>GitHub</li>
        </ul>
        <ul className="list-disc pl-2 col-span-1">
          <li>HTML</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>JIRA</li>
          <li>Markdown</li>
          <li>Python</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.S. Computer Science - University of Maryland</li>
        <li>GPA: 3.6</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google UX Design (in-progress)</li>
        <li>Tacoma Community College - IT Help Desk</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTableChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="md:relative w-full h-full">
          <Image
            src="/img/about-img.jpg"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            sapien faucibus et molestie ac feugiat sed lectus vestibulum. Massa
            tincidunt nunc pulvinar sapien et ligula ullamcorper.
          </p>
          <div className="flex flext-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTableChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTableChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTableChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
