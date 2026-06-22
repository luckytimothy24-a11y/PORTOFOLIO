"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/lib/data";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 flex flex-col items-center gap-4 transition-colors hover:bg-white/[0.06] hover:border-white/[0.15] cursor-default"
    >
      <div
        className="text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
        style={{ color: skill.color }}
      >
        <Icon />
      </div>
      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
}
