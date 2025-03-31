
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import LocationButton from '@/components/LocationButton';
import AlertButton from '@/components/AlertButton';
import FeatureCard from '@/components/FeatureCard';
import BottomNavbar from '@/components/BottomNavbar';
import DrugTestDevices from '@/components/DrugTestDevices';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Wine, Pill, Check } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const Index = () => {
  const navigate = useNavigate();
  const elementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementsRef.current) {
      const elements = elementsRef.current.querySelectorAll('.animate-on-mount');
      
      elements.forEach((el, index) => {
        (el as HTMLElement).style.animationDelay = `${index * 0.1}s`;
        (el as HTMLElement).classList.add('animate-slide-in');
      });
    }
  }, []);
  
  return (
    <div className="relative min-h-screen pb-16 p-[10px]">
      <div className="p-0 m-0">
        <Navbar />
        
        <h1 className="text-5xl font-bold tracking-tight animate-fade-in m-0">
          DRUGBUSTER
        </h1>
        
        <ScrollArea className="h-[calc(100vh-180px)]">
          <div className="space-y-6 pr-4" ref={elementsRef}>
            <LocationButton 
              text="localisation des amis" 
              className="animate-on-mount"
            />
            
            <AlertButton 
              text="signaler alerte" 
              className="animate-on-mount"
            />
            
            <DrugTestDevices />
            
            <div className="grid grid-cols-2 gap-4">
              <FeatureCard
                icon={<MessageSquare className="h-7 w-7" />}
                title="expériences de la communauté"
                onClick={() => navigate('/community')}
                className="animate-on-mount"
                description="Découvrez les expériences partagées par la communauté. Consultez des témoignages et des conseils pour une consommation plus sûre."
                image="/lovable-uploads/f0d5f2c1-67bc-4b96-aad1-611e5ecc072b.png"
              />
              
              <FeatureCard
                icon={<Wine className="h-7 w-7" />}
                title="lieux sûrs"
                onClick={() => navigate('/safe-places')}
                className="animate-on-mount"
                description="Trouvez des lieux sûrs près de chez vous. Des endroits où vous pouvez vous sentir en sécurité et obtenir de l'aide si nécessaire."
                image="/lovable-uploads/70dd1e7e-4e58-4a68-8f35-27aa5ef38454.png"
              />
              
              <FeatureCard
                icon={<Pill className="h-7 w-7" />}
                title="informations sur les drogues"
                onClick={() => navigate('/drug-info')}
                className="animate-on-mount"
                description="Informations détaillées sur différentes substances, leurs effets, risques et précautions à prendre pour une consommation responsable."
                image="/lovable-uploads/3ba90de8-e952-4cfb-b70c-c1bda2a3b62e.png"
              />
              
              <FeatureCard
                icon={<Check className="h-7 w-7" />}
                title="consignes et procédures"
                onClick={() => navigate('/guidelines')}
                className="animate-on-mount"
                description="Consultez les consignes et procédures à suivre pour réduire les risques. Apprenez les gestes qui sauvent en cas d'urgence."
                image="/lovable-uploads/f91830d6-f8b7-4c39-9b76-44ce8bff0d23.png"
              />
            </div>
          </div>
        </ScrollArea>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default Index;
