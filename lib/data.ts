import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pharmachain from "@/public/pharmachain.png";
import Agristats from "@/public/agristats.png";
import portfolio from "@/public/portfolio.png";
import Findtheway from "@/public/findtheway.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Preparatory Engineering Institute",
    location: "Sfax, tunisia",
    description:
      "PREPARATORY CYCLE (MP) Grade 221 out of 1700 admitted candidates.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "National School of Computer Science",
    location: "Mnouba, Tunisia",
    description:
      "I am currently pursuing a Computer Science Engineering degree with a specialization in Software Engineering, and I'm expected to graduate in 2024.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Present",
  },
  {
    title: "Full-Stack Developer internship",
    location: "CODECOOPERATION GMBH, Tunisia",
    description:
      "I was part of a team that developed a web application for cyber maturity assessment tool, we used Next.js, Nest.js and mySQL. We followed the Scrum methodology for project development and utilized Jira for effective project management.",
    icon: React.createElement(CgWorkAlt),
    date: "july - Sept 2023",
  },
] as const;

export const projectsData = [
  {
    title: "PharmaChain",
    description:
      "I worked on this academic project for 6 months. I utilized blockchain technology to facilitate user management and tracking of the drug supply chain.",
    tags: ["React", "Block Chain", "Truffle","Solidity", "Bootstrap"],
    imageUrl: pharmachain,
  },
  {
    title: "Personal Profile",
    description:
      "I created a portfolio website to display my work and professional experience.",
    tags: ["React", "Next.js", "Typescript", "Tailwind CSS","Framer Motion","React Email & Resend","Vercel hosting"],
    imageUrl: portfolio,
  },
  {
    title: "AgriStats",
    description:
      "Design and develop a dashboard that provide statistics and insights on barrages as part of academic project for the duration of 3 months.",
    tags: ["React", "Javascript", "Node.js", "Express.js","MongoDB"],
    imageUrl: Agristats,
  },
  {
    title: "Find The Way",
    description:
      "I collaborated on the development of this educational game within an academic project team, designed to familiarize beginners with algorithms and coding basics.",
    tags: ["C#", "Unity"],
    imageUrl: Findtheway,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Nest.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "MySQL",
  "Java",
  "C",
  "C++",
  "C#",
  "Python",
] as const;
