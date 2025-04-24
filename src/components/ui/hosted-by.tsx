
import React from "react";

export function HostedBy() {
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
            <div className="relative group">
              <div className="w-56 h-56 mx-auto overflow-hidden rounded-full border-4 border-gold/30 shadow-xl transition-transform duration-500 hover:scale-105">
                <img
                  src="/images/3b72f811-9cb4-4ff4-b34a-8374173e750f.png"
                  alt="Kunchala Venkateswarlu"
                  className="w-full h-full object-cover object-top transform transition-all duration-500"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="space-y-2">
              <h3 className="font-dancing text-3xl text-gold">Kunchala Venkateswarlu</h3>
            </div>
          </div>
          
          <div className="card-elegant animate-fade-in text-center space-y-6" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              <div className="w-56 h-56 mx-auto overflow-hidden rounded-full border-4 border-gold/30 shadow-xl transition-transform duration-500 hover:scale-105">
                <img
                  src="/images/294e957e-f32e-46f9-aaed-2dee8eb25d85.png"
                  alt="Kunchala Padmavathi"
                  className="w-full h-full object-cover object-top transform transition-all duration-500"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="space-y-2">
              <h3 className="font-dancing text-3xl text-gold">Kunchala Padmavathi</h3>
            </div>
          </div>
        </div>

        {/* Traditional decorative element */}
        <div className="flex justify-center mt-12">
          <div className="relative w-24 h-8">
            <div className="absolute left-0 w-8 h-8 rounded-full border-2 border-gold/40"></div>
            <div className="absolute left-8 w-8 h-8 rounded-full border-2 border-gold/40"></div>
            <div className="absolute left-16 w-8 h-8 rounded-full border-2 border-gold/40"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

