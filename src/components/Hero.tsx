
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import ThreeDModel from "./ThreeDModel";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-20 flex flex-col justify-center">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="z-10 space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Bringing <span className="text-gradient">imagination</span> to life with 3D artistry
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            Hi, I'm [Your Name] — a passionate 3D artist creating immersive worlds, characters, and experiences that push the boundaries of digital art.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-highlight hover:bg-highlight-alt text-white px-8 py-6">
              View My Work
            </Button>
            <Button variant="outline" className="border-highlight text-white hover:bg-highlight/10 px-8 py-6">
              About Me
            </Button>
          </div>
        </div>
        <div className="h-[400px] lg:h-[500px] relative">
          <ThreeDModel />
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#portfolio" aria-label="Scroll down">
          <ChevronDown className="h-8 w-8 text-highlight" />
        </a>
      </div>
      
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-dark to-transparent opacity-90 -z-10"></div>
    </section>
  );
};

export default Hero;
