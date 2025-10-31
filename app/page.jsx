import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// component
import Social from "@/components/ui/Social";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="order-2 text-center xl:text-left xl:order-none">
            <span className="text-xl">Cybersecurity & Cloud Enthusiast</span>
            <h1 className="mb-6 h1">
              Hello I'm <br /> <span className="text-accent">Rajib Zidan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I’m currently pursuing a <span className="text-accent">D4 degree in Computer Engineering</span> at IPB University.  
              Passionate about <span className="text-accent">Cybersecurity, Cloud Infrastructure,</span> and 
              <span className="text-accent"> DevOps automation</span>, I focus on learning how to build
              secure, scalable, and reliable systems.  
              My goal is to craft technology that bridges <span className="text-accent">performance, scalability,</span> and 
              <span className="text-accent"> security</span> — empowering organizations through resilient digital solutions.
            </p>

            {/* btn and socials */}
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 uppercase border border-white"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
