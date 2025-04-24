
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
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-4xl font-bold mb-10 text-center gold-gradient">
          Event Details
        </h2>
        
        <div className="card-elegant mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
            <MapPin className="text-gold h-6 w-6 flex-shrink-0" />
            <div>
              <h4 className="font-playfair font-medium text-lg mb-1">Venue Location</h4>
              <p className="text-warmGray">{address}</p>
            </div>
          </div>
          
          <div className="divider">
            <span className="divider-icon">
              <Calendar className="w-5 h-5" />
            </span>
          </div>

          <div>
            <h4 className="font-playfair font-medium text-lg mb-6 text-center">Schedule of Events</h4>
            
            <div className="space-y-8">
              {events.map((event, index) => (
                <div 
                  key={index} 
                  className="timeline-item animate-fade-in" 
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
    </div>
  );
}
