
import { useEffect, useRef } from "react";
import { Box } from "lucide-react";

const ThreeDModel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // This is a placeholder for a real 3D model
  // In a production app, you would use react-three-fiber or similar libraries
  return (
    <div 
      ref={containerRef} 
      className="w-full h-full flex items-center justify-center bg-dark-accent rounded-xl overflow-hidden animate-float"
    >
      <div className="text-center p-6">
        <Box className="h-24 w-24 text-highlight mx-auto mb-4" />
        <p className="text-gray-400">
          3D Model Showcase
          <br />
          <span className="text-sm">(In a real implementation, this would be a 3D model using Three.js)</span>
        </p>
      </div>
    </div>
  );
};

export default ThreeDModel;
