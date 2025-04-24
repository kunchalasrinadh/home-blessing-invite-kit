
import React from "react";

export function HostedBy() {
  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-4xl font-bold mb-10 text-center gold-gradient">
          Hosted By
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="card-elegant animate-fade-in text-center space-y-4">
            <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gold/30">
              <div className="w-full h-full bg-gold/10 flex items-center justify-center">
                {/* Photo placeholder - we'll add the actual photo when provided */}
                <span className="text-gold/50 font-medium">Photo</span>
              </div>
            </div>
            <h3 className="font-dancing text-2xl text-gold">Kunchala Venkateswarlu</h3>
          </div>
          
          <div className="card-elegant animate-fade-in text-center space-y-4" style={{ animationDelay: "0.2s" }}>
            <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gold/30">
              <div className="w-full h-full bg-gold/10 flex items-center justify-center">
                {/* Photo placeholder - we'll add the actual photo when provided */}
                <span className="text-gold/50 font-medium">Photo</span>
              </div>
            </div>
            <h3 className="font-dancing text-2xl text-gold">Kunchala Padmavathi</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
