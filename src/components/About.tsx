
import { Card, CardContent } from "@/components/ui/card";
import { Box, Image, Video } from "lucide-react";

const About = () => {
  const skills = [
    { name: "3D Modeling", icon: Box, description: "Expert in polygonal and NURBS modeling techniques." },
    { name: "Texturing", icon: Image, description: "Creation of detailed textures and materials for realistic rendering." },
    { name: "Animation", icon: Video, description: "Character and environment animation with rigging expertise." },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-6">
              I'm a passionate 3D artist with over 5 years of experience creating stunning visual content for games, films, and marketing. My journey in 3D art began with a fascination for bringing imagination to life through digital mediums.
            </p>
            <p className="text-gray-300 mb-6">
              Having worked with clients ranging from indie game studios to major advertising agencies, I've developed a versatile skill set that allows me to tackle projects of any scale and complexity.
            </p>
            <p className="text-gray-300">
              My approach combines technical precision with creative vision, resulting in artwork that not only looks impressive but also serves its intended purpose effectively.
            </p>
          </div>
          
          <div className="bg-dark-accent rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-6 text-center">My Expertise</h3>
            <div className="grid grid-cols-1 gap-4">
              {skills.map((skill, index) => (
                <Card key={index} className="bg-dark border border-gray-800">
                  <CardContent className="p-6 flex items-start">
                    <div className="bg-highlight/10 p-3 rounded-lg mr-4">
                      <skill.icon className="h-6 w-6 text-highlight" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{skill.name}</h4>
                      <p className="text-gray-400">{skill.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
