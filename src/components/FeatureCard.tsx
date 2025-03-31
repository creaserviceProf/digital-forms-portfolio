
import React from 'react';
import { cn } from '@/lib/utils';
import { ScrollArea } from "@/components/ui/scroll-area";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
  className?: string;
  description?: string;
  image?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  onClick, 
  className,
  description,
  image
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-start gap-3 p-4 min-h-32 bg-white/5 rounded-xl transition-all duration-300",
        "hover:bg-opacity-80 active:scale-[0.98] card-glow animate-fade-in text-center overflow-hidden",
        className
      )}
    >
      <div className="text-purple-light icon-shadow">
        {icon}
      </div>
      <span className="text-center text-sm font-medium">{title}</span>
      
      {(description || image) && (
        <ScrollArea className="w-full max-h-40 mt-2">
          {image && (
            <div className="mb-2 w-full">
              <img src={image} alt={title} className="w-full h-auto rounded-md" />
            </div>
          )}
          {description && (
            <p className="text-xs text-left text-gray-300">{description}</p>
          )}
        </ScrollArea>
      )}
    </button>
  );
};

export default FeatureCard;
