"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Currently a <span className="font-medium"> software engineering student </span>  at <span className="font-medium">the National School of Computer Sciences </span>(ENSI) in Tunisia,
      actively searching for a 4-to-6-month <span className="font-medium"> end-of-study internship </span>opportunity starting in <span className="font-medium">February 2024</span>. <br/>
      <span className="italic"> I'm passionate </span>about <span className="font-medium"> cutting-edge</span>, <span className="font-medium"> pixel-perfect</span>, <span className="font-medium"> beautiful</span> interfaces and <span className="font-medium"> intuitively implemented</span> UX. 
         My main focus is {" "}
        <span className="font-medium">
          React, Next.js, Node.js, and Nest.js
        </span>
        . I am also familiar with <span className="font-medium"> MongoDB </span> and <span className="font-medium"> Prisma </span>. I am always looking to
        learn new technologies. 
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy Camping, Nature, and playing video games. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">DevOps and Data engineering</span>.
      </p>
    </motion.section>
  );
}
