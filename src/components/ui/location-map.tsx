
import React from "react";
import { MapPin } from "lucide-react";

interface LocationMapProps {
  address: string;
  googleMapUrl: string;
}

export function LocationMap({ address, googleMapUrl }: LocationMapProps) {
  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-4xl font-bold mb-10 text-center gold-gradient">
          Location
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="card-elegant animate-fade-in">
            <div className="flex items-start gap-4">
              <MapPin className="text-gold h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-playfair font-medium text-lg mb-3">Event Address</h4>
                <p className="text-warmGray mb-5">{address}</p>
                <a 
                  href={googleMapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="button-gold inline-flex items-center"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-animated animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white p-1">
              <div className="aspect-video relative overflow-hidden rounded-lg shadow-md">
                <iframe 
                  src={googleMapUrl.replace("maps?q=", "embed/v1/place?key=YOUR_API_KEY&q=")}
                  title="Google Map" 
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
