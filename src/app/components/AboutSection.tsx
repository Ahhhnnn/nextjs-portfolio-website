"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab: string) => {
    startTransition(() => {
      setTab(tab);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="about-inage"
          width={500}
          height={500}
        ></Image>
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React,Redux,Node.js,Express, PostgreSQL,
            Sequelize, HTML, CSS, and Glt. I am a quick Learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton selectTab={() => handleTabChange("Skills")} active={tab==='Skills'} content="Skills"></TabButton>
            <TabButton selectTab={() => handleTabChange("Education")} active={tab==='Education'} content="Education"></TabButton>
            <TabButton selectTab={() => handleTabChange("Exprience")} active={tab==='Exprience'} content="Exprience"></TabButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
