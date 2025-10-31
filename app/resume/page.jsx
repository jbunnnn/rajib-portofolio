"use client";

import Image from "next/image";
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
      logo: "/images/education/aws.png",
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
      logo: "/images/education/aws.png",
    },
    {
      institution: "Cisco Networking Academy (CCNAv7)",
      degree: "Switching, Routing, and Wireless Essentials",
      duration: "2024",
      logo: "/images/education/cisco.png",
    },
    {
      institution: "Cisco Networking Academy (CCNAv7)",
      degree: "Introduction to Networks",
      duration: "2023",
      logo: "/images/education/cisco.png",
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
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          {/* Sidebar Tabs */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
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
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
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
              <Section title={about.title} desc={about.description}>
                {about.info.map((info, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="font-bold text-accent">{info.fieldName}:</span>
                    <span className="text-white/60">{info.fieldValue}</span>
                  </li>
                ))}
              </Section>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

// 🔹 Section Component
const Section = ({ title, desc, children }) => (
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{desc}</p>
    <ScrollArea className="h-[400px]">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">{children}</ul>
    </ScrollArea>
  </div>
);

// 🔹 CARD COMPONENT (Optimized with Next.js Image)
const Card = ({ duration, title, subtitle, logo }) => (
  <li className="bg-[#232329] min-h-[230px] py-6 px-10 rounded-xl flex flex-col justify-start items-center text-center gap-3 transition-all hover:scale-[1.02] hover:bg-[#2b2b32]">
    {/* Logo with Next.js Image optimization */}
    {logo && (
      <div className="relative flex items-center justify-center w-16 h-16 p-2 mb-2 rounded-lg bg-white/5 backdrop-blur-sm">
        <Image
          src={logo}
          alt={`${subtitle} logo`}
          fill
          className="object-contain filter brightness-95"
          sizes="64px"
        />
      </div>
    )}

    {/* Duration */}
    <span className="text-sm font-medium tracking-wide text-accent">{duration}</span>

    {/* Title */}
    <h3 className="text-lg font-semibold leading-tight min-h-[56px] flex items-center">
      {title}
    </h3>

    {/* Subtitle */}
    <p className="text-sm text-white/60">{subtitle}</p>
  </li>
);

export default Resume;
