
import React from "react";

export function Gallery() {
  return (
    <div className="py-12 px-6 md:py-16 md:px-12 bg-gradient-to-b from-gold/10 via-cream/40 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative mb-8">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gold/30 -translate-y-1/2"></div>
          <div className="relative flex justify-center">
            <div className="bg-cream px-5 py-1">
              <h2 className="font-dancing text-3xl md:text-4xl text-gold-dark text-center animate-fade-in">
                Our New Home
              </h2>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-lg border-2 border-gold/30 animate-fade-in transform transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img
              src="/images/3e733e9d-7b16-4bd6-bca5-9cc50843fe03.png"
              alt="House Front"
              className="w-full h-72 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <p className="text-white font-medium text-shadow">Front View</p>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-lg border-2 border-gold/30 animate-fade-in transition-all duration-500 hover:scale-105" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img
              src="/images/bdd48dfd-0955-4dc2-88f7-0af419c6273c.png"
              alt="Community Night"
              className="w-full h-72 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <p className="text-white font-medium text-shadow">Welcome Area</p>
            </div>
          </div>
        </div>
        
        {/* Traditional decorative element */}
        <div className="flex justify-center mt-10">
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
