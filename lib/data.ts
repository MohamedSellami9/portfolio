import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pharmachain from "@/public/pharmachain.png";
import Agristats from "@/public/rmtdev.png";
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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "PharmaChain",
    description:
      "I worked on this academic project for 6 months. I utilized blockchain technology to facilitate user management and tracking of the drug supply chain.",
    tags: ["React", "Block Chain", "Truffle", "Bootstrap"],
    imageUrl: pharmachain,
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
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
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
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
] as const;
