"use client";

import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import Image from "next/image";
import { personalData } from "@/lib/data";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#00d4ff]/5 via-transparent to-[#7c3aed]/5 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#00d4ff]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7c3aed]/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-[#00d4ff] via-[#7c3aed] to-[#00d4ff] p-[3px]">
            <div className="w-full h-full rounded-full bg-[#0a0a0a] overflow-hidden">
              <Image
                src={personalData.avatarUrl}
                alt={personalData.name}
                width={144}
                height={144}
                className="w-full h-full object-cover"
                preload
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent"
        >
          {personalData.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-400 mb-4"
        >
          {personalData.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-sm sm:text-base text-gray-500 mb-10 max-w-2xl mx-auto"
        >
          {personalData.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={personalData.cvUrl}
            download
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-medium text-sm hover:shadow-lg hover:shadow-[#00d4ff]/25 transition-all duration-300 hover:scale-105"
          >
            <HiDownload size={18} />
            Download CV
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 text-gray-300 font-medium text-sm hover:bg-white/5 hover:border-white/30 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center"
          >
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
