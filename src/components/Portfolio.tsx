
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image, Layers, Cube, Video } from "lucide-react";

// Temporary portfolio data - would be replaced with real projects
const portfolioData = [
  {
    id: 1,
    title: "Futuristic City Scene",
    category: "environments",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
    description: "A detailed cityscape showcasing advanced architecture and lighting techniques."
  },
  {
    id: 2,
    title: "Sci-Fi Character Design",
    category: "characters",
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
    description: "Character concept with detailed texturing and rigging for animation."
  },
  {
    id: 3,
    title: "Product Visualization",
    category: "products",
    imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
    description: "Photorealistic product rendering for marketing materials."
  },
  {
    id: 4,
    title: "Abstract Art Piece",
    category: "abstract",
    imageSrc: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop",
    description: "Experimental piece exploring form and texture in 3D space."
  },
  {
    id: 5,
    title: "Interactive Game Environment",
    category: "environments",
    imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop",
    description: "Game-ready environment with optimized assets and lighting."
  },
  {
    id: 6,
    title: "Animated Short Film Scene",
    category: "animation",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
    description: "Key frame from animated short showcasing storytelling and mood."
  },
];

// Categories with their corresponding icons
const categories = [
  { value: "all", label: "All Work", icon: Layers },
  { value: "environments", label: "Environments", icon: Image },
  { value: "characters", label: "Characters", icon: Cube },
  { value: "products", label: "Products", icon: Cube },
  { value: "animation", label: "Animation", icon: Video },
  { value: "abstract", label: "Abstract", icon: Cube },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all" 
    ? portfolioData 
    : portfolioData.filter(project => project.category === activeTab);

  return (
    <section id="portfolio" className="py-20 bg-dark-accent">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest 3D projects across various categories, from character design to environments and animation.
          </p>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-dark grid grid-cols-3 md:grid-cols-6">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.value} 
                  value={category.value}
                  className="data-[state=active]:bg-highlight data-[state=active]:text-white px-4"
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  <span className="hidden md:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden bg-dark border-0 group hover:shadow-highlight/20 hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={project.imageSrc} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-highlight/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-dark px-4 py-2 rounded-md text-white font-medium">View Project</button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                    <p className="text-gray-400 text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
