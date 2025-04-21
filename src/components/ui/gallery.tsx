
import React from "react";

export function Gallery() {
  return (
    <div className="py-8 px-6 md:py-12 md:px-12 bg-gradient-to-b from-cream/40 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-dancing text-2xl md:text-3xl text-gold-dark mb-6 text-center animate-fade-in">
          Our New Home
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden shadow-md border border-gold/30 animate-fade-in">
            <img
              src="/lovable-uploads/3e733e9d-7b16-4bd6-bca5-9cc50843fe03.png"
              alt="House Front"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md border border-gold/30 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <img
              src="/lovable-uploads/bdd48dfd-0955-4dc2-88f7-0af419c6273c.png"
              alt="Community Night"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
