
import React, { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function HostedBy() {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-8">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gold/30 -translate-y-1/2"></div>
          <div className="relative flex justify-center">
            <div className="bg-white px-5 py-1">
              <h2 className="font-dancing text-4xl md:text-5xl text-gold-dark text-center animate-fade-in">
                Hosted By
              </h2>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="card-elegant animate-fade-in text-center space-y-6">
            <div 
              className="relative group"
              onClick={() => handleImageClick(0)}
            >
              <div className={`w-56 h-56 mx-auto overflow-hidden rounded-full border-4 border-gold/30 shadow-xl transition-transform duration-500 hover:scale-105 ${activeIndex === 0 ? 'ring-2 ring-gold scale-105' : ''}`}>
                <img
                  src="/images/3b72f811-9cb4-4ff4-b34a-8374173e750f.png"
                  alt="Kunchala Venkateswarlu"
                  className="w-full h-full object-cover object-top transform transition-all duration-500"
                />
              </div>
              <div className={`absolute inset-0 rounded-full bg-gradient-to-t from-gold/20 to-transparent transition-opacity duration-300 ${isMobile && activeIndex === 0 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
            </div>
            <div className="space-y-2">
              <h3 className="font-dancing text-3xl text-gold">Kunchala Venkateswarlu</h3>
            </div>
          </div>
          
          <div className="card-elegant animate-fade-in text-center space-y-6" style={{ animationDelay: "0.2s" }}>
            <div 
              className="relative group"
              onClick={() => handleImageClick(1)}
            >
              <div className={`w-56 h-56 mx-auto overflow-hidden rounded-full border-4 border-gold/30 shadow-xl transition-transform duration-500 hover:scale-105 ${activeIndex === 1 ? 'ring-2 ring-gold scale-105' : ''}`}>
                <img
                  src="/images/294e957e-f32e-46f9-aaed-2dee8eb25d85.png"
                  alt="Kunchala Padmavathi"
                  className="w-full h-full object-cover object-top transform transition-all duration-500"
                />
              </div>
              <div className={`absolute inset-0 rounded-full bg-gradient-to-t from-gold/20 to-transparent transition-opacity duration-300 ${isMobile && activeIndex === 1 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
            </div>
            <div className="space-y-2">
              <h3 className="font-dancing text-3xl text-gold">Kunchala Padmavathi</h3>
            </div>
          </div>
        </div>

        {/* Decorative Mandala Divider */}
        <div className="flex justify-center mt-12">
          <svg width="200" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10H200" stroke="#D4AF37" strokeWidth="2"/>
            <circle cx="100" cy="10" r="6" stroke="#D4AF37" strokeWidth="2" fill="white" />
            <circle cx="100" cy="10" r="2" fill="#D4AF37"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
