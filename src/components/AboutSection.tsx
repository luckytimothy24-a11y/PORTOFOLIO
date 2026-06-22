"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aboutText, education, interests } from "@/lib/data";
import { HiAcademicCap } from "react-icons/hi";
import SectionWrapper from "./SectionWrapper";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="about">
      <motion.div ref={ref} className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-4"
        >
          About{" "}
          <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-20 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] rounded-full mx-auto mb-12"
        />

        <div className="space-y-4 mb-10">
          {aboutText.map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-gray-400 leading-relaxed text-justify"
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl font-semibold text-center mb-8 text-white flex items-center justify-center gap-2"
        >
          <HiAcademicCap className="text-[#00d4ff]" />
          Pendidikan
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="space-y-4 mb-12"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="relative pl-6 border-l-2 border-[#00d4ff]/30"
            >
              <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-[#00d4ff]" />
              <p className="font-semibold text-white">{edu.school}</p>
              <p className="text-sm text-gray-400">{edu.degree}</p>
              <p className="text-xs text-gray-500">{edu.year}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-xl font-semibold text-center mb-6 text-white"
        >
          Minat & Bidang
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {interests.map((interest, index) => (
            <motion.span
              key={interest}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-gray-300 hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-all duration-300"
            >
              {interest}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
