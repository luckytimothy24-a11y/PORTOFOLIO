import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPhp,
  SiPython,
  SiMysql,
  SiLinux,
  SiGit,
  SiRabbitmq,
  SiNodedotjs,
  SiReact,
  SiGithub,
  SiWhatsapp,
} from "react-icons/si";
import { DiAws } from "react-icons/di";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import type { IconType } from "react-icons";

export const personalData = {
  name: "Lucky Timoty Nugroho",
  role: "Mahasiswa Informatika",
  subtitle: "Mahasiswa Informatika | Web Developer | Cloud Enthusiast",
  location: "Yogyakarta, Indonesia",
  email: "luckythimotngroho@gmail.com",
  github: "https://github.com/luckytimoty",
  linkedin: "https://linkedin.com/in/luckytimoty",
  whatsapp: "https://wa.me/6282140434148",
  cvUrl: "/CV_Lucky_Timoty_Nugroho.pdf",
  avatarUrl: "/images/1000148130.png",
};

export const aboutText = [
  "Saya adalah mahasiswa Informatika yang memiliki ketertarikan besar di bidang teknologi, khususnya pada pengembangan web dan cloud computing. Saat ini saya aktif mempelajari berbagai teknologi modern untuk membangun solusi yang scalable dan efisien.",
  "Dengan fondasi yang kuat dalam ilmu komputer, saya terus mengembangkan keterampilan di berbagai bidang seperti pengembangan web full-stack, administrasi sistem Linux, dan arsitektur cloud menggunakan AWS.",
];

export const education = [
  {
    school: "Universitas Teknologi Digital Indonesia",
    degree: "S1 Informatika",
    year: "2024 - Sekarang",
  },
  {
    school: "SMA Negeri 1 Jatisrono",
    degree: "IPS",
    year: "2021 - 2024",
  },
];

export const interests = [
  "Web Development",
  "Cloud Computing",
  "AWS",
  "Linux",
  "Database",
  "Distributed Systems",
];

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export const skills: Skill[] = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "AWS", icon: DiAws, color: "#FF9900" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export interface ContactItem {
  label: string;
  value: string;
  icon: IconType;
  href: string;
}

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: personalData.email,
    icon: HiOutlineMail,
    href: `mailto:${personalData.email}`,
  },
  {
    label: "GitHub",
    value: "github.com/luckytimoty",
    icon: SiGithub,
    href: personalData.github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/luckytimoty",
    icon: FaLinkedinIn,
    href: personalData.linkedin,
  },
  {
    label: "WhatsApp",
    value: "+62 821-4043-4148",
    icon: SiWhatsapp,
    href: personalData.whatsapp,
  },
];
