"use client";

import Image from "next/image";
import { useState } from "react";
import { 
  FaLinux, FaPython, FaNetworkWired, FaCloud, FaLock, FaAws, FaDocker, FaGitAlt, FaMicrosoft 
} from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

// ========== ABOUT ==========
const about = {
  title: "About Me",
  description: `I'm a D4 Computer Engineering student at IPB University with a strong interest in 
  cybersecurity, cloud infrastructure, and DevOps engineering. My current focus is on building 
  secure, scalable systems while learning how automation and cloud-native technologies 
  can improve reliability and performance.`,
  info: [
    { fieldName: "Name", fieldValue: "Rajib Zidan" },
    { fieldName: "Phone", fieldValue: "(+62) 896-0318-2662" },
    { fieldName: "Current Education", fieldValue: "D4 Computer Engineering - IPB University" },
    { fieldName: "Specialization", fieldValue: "Cybersecurity, Cloud & DevOps" },
    { fieldName: "Email", fieldValue: "rajibzidan22@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Indonesian" },
  ],
};

// ========== EXPERIENCE ==========
const experience = {
  title: "My Experience",
  description:
    "Hands-on experience through academic, internship, and personal projects — focusing on IT systems, networks, and secure deployment environments.",
  items: [
    {
      company: "Hotel Grand Savero Bogor",
      position: "IT Support Intern",
      Duration: "July 2024 – October 2024",
    },
    {
      company: "PT Megaroyal IT Comindo",
      position: "Junior Network & Systems Engineer Intern",
      Duration: "November 2024 – December 2024",
    },
  ],
};

// ========== EDUCATION ==========
const education = {
  title: "My Education",
  description: "Formal academic background focusing on computer engineering and networking.",
  items: [
    {
      institution: "IPB University",
      degree: "D4 Computer Engineering Technology",
      duration: "2025 – Present",
      logo: "/images/education/ipb.png",
    },
    {
      institution: "Bina Rahayu Vocational High School",
      degree: "Computer Network Engineering",
      duration: "2022 – 2025",
      logo: "/images/education/binarahayu.png",
    },
  ],
};

// ========== CERTIFICATIONS ==========
const certifications = {
  title: "My Certifications",
  description: "Industry-recognized certifications in networking, cloud, and cybersecurity.",
  items: [
    {
      institution: "Amazon Web Services (AWS)",
      degree: "AWS Cloud Architecting",
      duration: "2025",
      logo: "/images/education/aws-new.png",
    },
    {
      institution: "SEAMO SEAMOLEC",
      degree: "Certified Computer Engineering and Networking",
      duration: "2025",
      logo: "/images/education/seamolec.png",
    },
    {
      institution: "Amazon Web Services (AWS)",
      degree: "AWS Cloud Academny Foundations",
      duration: "2025",
      logo: "/images/education/aws-new.png",
    },
    {
      institution: "Cisco Networking Academy (CCNAv7)",
      degree: "Switching, Routing, and Wireless Essentials",
      duration: "2024",
      logo: "/images/education/cisco-new.png",
    },
    {
      institution: "Cisco Networking Academy (CCNAv7)",
      degree: "Introduction to Networks",
      duration: "2023",
      logo: "/images/education/cisco-new.png",
    },
  ],
};

// ========== SKILLS ==========
const skills = {
  title: "My Skills",
  description:
    "Technologies and tools I use to design, secure, and deploy reliable cloud-based infrastructures.",
  skillList: [
    { icon: <FaLinux />, name: "Linux System" },
    { icon: <FaNetworkWired />, name: "Networking" },
    { icon: <FaLock />, name: "Cybersecurity" },
    { icon: <FaCloud />, name: "Cloud Infrastructure" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaMicrosoft />, name: "Azure" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <SiTerraform />, name: "Terraform" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaGitAlt />, name: "Git / CI-CD" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  ],
};

// ========== COMPONENT ==========
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.6, ease: "easeInOut" } }}
      className="min-h-[80vh] flex items-center justify-center py-8 xl:py-12"
    >
      <div className="container mx-auto px-4">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-8 xl:gap-[60px]">
          {/* Sidebar Tabs */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-3 xl:gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Main Content */}
          <div className="min-h-[70vh] w-full">
            {/* EXPERIENCE */}
            <TabsContent value="experience" className="w-full">
              <Section title={experience.title} desc={experience.description}>
                {experience.items.map((item, index) => (
                  <Card
                    key={index}
                    duration={item.Duration}
                    title={item.position}
                    subtitle={item.company}
                  />
                ))}
              </Section>
            </TabsContent>

            {/* EDUCATION */}
            <TabsContent value="education" className="w-full">
              <Section title={education.title} desc={education.description}>
                {education.items.map((item, index) => (
                  <Card
                    key={index}
                    duration={item.duration}
                    title={item.degree}
                    subtitle={item.institution}
                    logo={item.logo}
                  />
                ))}
              </Section>
            </TabsContent>

            {/* CERTIFICATIONS */}
            <TabsContent value="certifications" className="w-full">
              <Section title={certifications.title} desc={certifications.description}>
                {certifications.items.map((item, index) => (
                  <Card
                    key={index}
                    duration={item.duration}
                    title={item.degree}
                    subtitle={item.institution}
                    logo={item.logo}
                  />
                ))}
              </Section>
            </TabsContent>

            {/* SKILLS */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div>
                  <h3 className="text-3xl xl:text-4xl font-bold mb-4">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0 text-base">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-6">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[140px] xl:h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group hover:bg-[#2b2b32] transition-all duration-300 border border-transparent hover:border-accent/20">
                            <div className="text-5xl xl:text-6xl transition-all duration-300 group-hover:text-accent group-hover:scale-110">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-[#1c1c22] border border-accent/20 px-4 py-2 rounded-lg shadow-xl z-50">
                            <p className="capitalize text-sm font-medium text-white">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* ABOUT */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-6 xl:gap-[30px] text-center xl:text-left">
                <div>
                  <h3 className="text-3xl xl:text-4xl font-bold mb-4">{about.title}</h3>
                  <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0 text-base leading-relaxed">{about.description}</p>
                </div>
                
                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-6 max-w-4xl mx-auto xl:mx-0">
                  {about.info.map((info, index) => (
                    <div 
                      key={index} 
                      className="bg-[#232329] p-5 xl:p-6 rounded-xl hover:bg-[#2b2b32] transition-all duration-300 border border-transparent hover:border-accent/10 hover:shadow-lg hover:shadow-accent/5 group"
                    >
                      <div className="flex flex-col gap-2">
                        <span className="text-xs xl:text-sm font-semibold text-accent/80 uppercase tracking-wider group-hover:text-accent transition-colors duration-300">
                          {info.fieldName}
                        </span>
                        <span className="text-base xl:text-lg font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                          {info.fieldValue}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

// 🔹 Section Component
const Section = ({ title, desc, children }) => (
  <div className="flex flex-col gap-6 xl:gap-[30px] text-center xl:text-left">
    <div>
      <h3 className="text-3xl xl:text-4xl font-bold mb-4">{title}</h3>
      <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0 text-base leading-relaxed">{desc}</p>
    </div>
    <ScrollArea className="h-[450px] xl:h-[500px] pr-4">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-6">{children}</ul>
    </ScrollArea>
  </div>
);

// 🔹 CARD COMPONENT with Loading State
const Card = ({ duration, title, subtitle, logo }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <li className="bg-[#232329] min-h-[230px] py-6 px-6 xl:px-10 rounded-xl flex flex-col justify-start items-center text-center gap-3 transition-all hover:scale-[1.02] hover:bg-[#2b2b32] hover:shadow-lg hover:shadow-accent/10 group border border-transparent hover:border-accent/10">
      {/* Logo with Loading State */}
      {logo && (
        <div className="relative flex items-center justify-center w-20 h-20 mb-2 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 overflow-hidden group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
          {/* Loading Skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-pulse" />
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10 transition-all duration-300" />
          
          {/* Image */}
          <div className="relative w-full h-full p-3">
            <Image
              src={logo}
              alt={`${subtitle} logo`}
              fill
              className={`object-contain filter brightness-100 group-hover:brightness-110 group-hover:scale-110 transition-all duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              sizes="80px"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
      )}

      {/* Duration Badge */}
      <span className="text-xs xl:text-sm font-semibold tracking-wide text-accent bg-accent/10 px-3 py-1 rounded-full group-hover:bg-accent/20 transition-all duration-300">
        {duration}
      </span>

      {/* Title */}
      <h3 className="text-base xl:text-lg font-bold leading-tight min-h-[56px] flex items-center group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>

      {/* Subtitle */}
      <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 font-medium">
        {subtitle}
      </p>
    </li>
  );
};

export default Resume;
