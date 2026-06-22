"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { contactItems, personalData } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="contact">
      <motion.div ref={ref} className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-4"
        >
          Get In{" "}
          <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-20 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] rounded-full mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center text-gray-500 mb-12"
        >
          {personalData.location}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-[#00d4ff]/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#00d4ff]/10 to-[#7c3aed]/10 group-hover:from-[#00d4ff]/20 group-hover:to-[#7c3aed]/20 transition-colors">
                  <Icon
                    className="text-[#00d4ff] group-hover:text-[#7c3aed] transition-colors"
                    size={24}
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors truncate">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
