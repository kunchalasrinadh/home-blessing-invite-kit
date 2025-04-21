
import React from "react";
import { PartyPopper } from "lucide-react";

export function Footer() {
  return (
    <div className="bg-gradient-to-t from-gold/10 via-cream to-white py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <PartyPopper className="text-gold h-8 w-8" />
        </div>
        
        <h3 className="font-dancing text-3xl md:text-4xl mb-4 text-gold-dark animate-fade-in">
          We can&apos;t wait to celebrate with you!
        </h3>
        
        <p className="text-warmGray mb-6 max-w-lg mx-auto">
          Thank you for being a part of this special moment in our lives as we
          bless our new home and create lasting memories.
        </p>
        
        <div className="text-sm text-warmGray/80">
          <p>For any questions, please contact us at</p>
          <p className="font-medium">your-email@example.com</p>
        </div>
      </div>
    </div>
  );
}
