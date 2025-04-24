
import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

interface Event {
  time: string;
  activity: string;
}

interface EventDetailsProps {
  address: string;
  events: Event[];
}

export function EventDetails({ address, events }: EventDetailsProps) {
  return (
    <div className="bg-white/90 py-16 px-6 md:px-12 relative z-10">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-playfair text-4xl font-bold mb-10 gold-gradient text-center md:text-left">
            Event Details
          </h2>
          
          <div className="card-elegant mb-12 animate-fade-in bg-white/95" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
              <MapPin className="text-gold h-6 w-6 flex-shrink-0" />
              <div>
                <h4 className="font-playfair font-medium text-lg mb-1">Venue Location</h4>
                <p className="text-warmGray">{address}</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {events.map((event, index) => (
              <div 
                key={index} 
                className="timeline-item animate-fade-in bg-white/95 rounded-lg p-4" 
                style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
              >
                <div className="timeline-dot"></div>
                <div className="flex items-center mb-2">
                  <Clock className="w-4 h-4 text-gold mr-2" />
                  <span className="font-medium">{event.time}</span>
                </div>
                <p className="font-playfair text-lg">{event.activity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
