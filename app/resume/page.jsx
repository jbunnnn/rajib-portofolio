"use client";

import { Description } from '@radix-ui/react-dialog';
import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaJava, FaRProject, FaDatabase } from 'react-icons/fa';

import { SiTailwindcss, SiNextDotJs } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';

const about = {
    title: 'About Me',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Dolorem voluptates ut saepe beatae, modi magnam reiciendis, nisi doloremque 
    corrupti nihil repudiandae! Quod dolor ex a? Nam eveniet nostrum minus asperiores.`,
    info: [
        { fieldName: 'Name', fieldValue: 'Rajib Zidan' },
        { fieldName: 'Phone', fieldValue: '(+62) 896-0318-2662' },
        { fieldName: 'Experience', fieldValue: 'No Experience Yet' },
        { fieldName: 'Skype', fieldValue: 'rajib.22' },
        { fieldName: 'Nationality', fieldValue: 'Indonesian' },
        { fieldName: 'Email', fieldValue: 'rajibzidan22@gmail.com' },
        { fieldName: 'Freelance', fieldValue: 'Available' },
        { fieldName: 'Languages', fieldValue: 'English, Indonesian' }
    ]
};

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    items: [
        { company: 'Hotel Grand Savero Bogor', position: 'IT Support', Duration: 'July 2024 - October 2024' },
        { company: 'PT Megaroyal IT Comindo', position: 'Engineer', Duration: 'November 2024 - December 2024' }
    ]
};

const education = {
    icon: '/assets/resume/badge.svg',
    title: 'My Education',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    items: [
        { institution: 'Bina Rahayu Vocational High School', degree: 'Computer Network Engineering', duration: '2022-2025' },
        { institution: 'IPB University', degree: 'Computer Engineering Technology', duration: '2025-2029' },
        { institution: 'SEAMO SEAMOLEC', degree: 'Certified Computer Engineering and Network', duration: '2025' },
        { institution: 'Amazon Web Services (AWS)', degree: 'Certified AWS Cloud Academy Foundation', duration: '2025' },
        { institution: 'CCNAv7', degree: 'Certified Switching, Routing, and Wireless Essentials', duration: '2024' }
        ,{ institution: 'CCNAv7', degree: 'Certified Introduction to Network', duration: '2023' }
    ]
};

const skills = {
    title: 'My Skills',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    skillList: [
        { icon: <FaHtml5 />, name: 'HTML' },
        { icon: <FaCss3 />, name: 'CSS' },
        { icon: <FaJs />, name: 'JavaScript' },
        { icon: <FaReact />, name: 'React' },
        { icon: <FaPython />, name: 'Python' },
        { icon: <FaJava />, name: 'Java' },
        { icon: <FaRProject />, name: 'R' },
        { icon: <FaDatabase />, name: 'SQL' }
    ]
};

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.Duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    {item.position}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="bg-[#232329] min-h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    {item.degree}
                                                </h3>
                                                <div className="flex items-center gap-3 mt-2">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60 leading-relaxed">{item.institution}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="skills" className="w-full h-full">
                           <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                 {skills.description}
                                </p>
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {skills.skillList.map((skill, index) => {
                                    return (
                                    <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-full h-[150px] bg-[#232329]
                                                rounded-xl flex justify-center items-center group">
                                                    <div className="text-6xl group-hover:text-accent
                                                    transition-all duration-300">
                                                        {skill.icon}
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="capitalize">{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                );
                              })}
                            </ul>
                           </div>
                        </TabsContent>

                        <TabsContent value="about" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {about.info.map((info, index) => (
                                        <li key={index} className="flex gap-2">
                                            <span className="font-bold text-accent">{info.fieldName}:</span>
                                            <span className="text-white/60">{info.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
