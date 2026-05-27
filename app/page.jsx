"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

// component
import Social from "@/components/ui/Social";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto px-4">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          
          {/* text section */}
          <div className="order-2 text-center xl:text-left xl:order-none max-w-2xl">
            
            <motion.span 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-lg xl:text-xl font-semibold text-accent mb-2"
            >
              Cybersecurity & Cloud Enthusiast
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 h1"
            >
              Hello I'm <br /> 
              <span className="text-accent">Rajib Zidan</span>
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-[540px] mb-8 text-white/80 text-base xl:text-lg leading-relaxed"
              >
                Computer Engineering student at <span className="text-accent font-semibold">IPB University</span>. 
                Focused on mastering <span className="text-accent font-semibold">Offensive Security</span> through penetration testing 
                and strengthening <span className="text-accent font-semibold">SOC Operations</span> to build 
                <span className="italic text-white"> resilient digital ecosystems</span>. 
                Passionate about architecting secure Cloud Infrastructure and automating 
                the future of <span className="text-accent font-semibold">DevOps</span>.
              </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8 p-4 xl:p-5 bg-accent/5 border-l-4 border-accent rounded-r-lg"
            >
              <p className="text-sm xl:text-base text-white/70 italic">
                "Empowering organizations through resilient digital solutions that bridge performance, scalability, and security."
              </p>
            </motion.div>

            {/* btn and socials */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center gap-6 xl:flex-row"
            >
              <Button
                variant="outline"
                size="lg"
                className="group relative flex items-center gap-2 uppercase border-2 border-accent text-accent hover:text-primary overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 hover:scale-105"
              >
                <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="relative z-10 font-semibold">Download CV</span>
                <FiDownload className="relative z-10 text-xl group-hover:animate-bounce" />
              </Button>

              <div className="flex items-center gap-4">
                <span className="hidden xl:block text-white/50 text-sm">Follow me:</span>
                <Social
                  containerStyles="flex gap-4"
                  iconStyles="w-10 h-10 border-2 border-accent/50 rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:border-accent hover:scale-110 hover:rotate-6 transition-all duration-300"
                />
              </div>
            </motion.div>
          </div>

          {/* photo section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 mb-8 xl:order-none xl:mb-0"
          >
            <Photo />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Stats />
      </motion.div>
    </section>
  );
};

export default Home;