
import React from "react";
import { InvitationHeader } from "@/components/ui/invitation-header";
import { EventDetails } from "@/components/ui/event-details";
import { LocationMap } from "@/components/ui/location-map";
import { Countdown } from "@/components/ui/countdown";
import { Footer } from "@/components/ui/footer";
import { Gallery } from "@/components/ui/gallery";

const Index = () => {
  // Event schedule details
  const eventDate = "Thursday, May 9, 2024 • Gruha Pravesam at 10:23 PM";
  const fullAddress = "D No 494-B1-A, Near Gangamma Thalli Temple, Narasaraopet, Palnadu, AP";
  const googleMapUrl = "https://www.google.com/maps/dir/?api=1&destination=722R%2BQRF%2C+Guntur%2C+Andhra+Pradesh+522601";
  // Countdown target: 2024-05-09 22:23:00 local time
  const targetDate = new Date("2024-05-09T22:23:00+05:30").toISOString();

  const eventSchedule = [
    {
      time: "May 9, 10:23 PM",
      activity: "Gruha Pravesam (House Warming Ceremony)",
    },
    {
      time: "May 10, 6:00 AM",
      activity: "Suprabhatham, Abhishekam & Pooja",
    },
    {
      time: "May 10, 8:00 AM",
      activity: "Sathya Narayana Vratham",
    },
    {
      time: "May 10, 12:00 PM",
      activity: "Lunch Prasadam",
    },
  ];

  return (
    <div className="min-h-screen bg-background" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Cpath d='M42 35v10h-5v-10h5zm-5 15h5v10h-5V50zm15-15v10h-5v-10h5zm-5 15h5v10h-5V50zm28-15v10h-5v-10h5zm-5 15h5v10h-5V50zm-10-15v10h-5v-10h5zm-5 15h5v10h-5V50zM32 5v10h-5V5h5zm-5 15h5v10h-5V20zm15-15v10h-5V5h5zm-5 15h5v10h-5V20zm28-15v10h-5V5h5zm-5 15h5v10h-5V20zm-10-15v10h-5V5h5zm-5 15h5v10h-5V20zm35 50v10h-5V70h5zm-5 15h5v10h-5V85zm-10-15v10h-5V70h5zm-5 15h5v10h-5V85zM12 5v10H7V5h5zM7 20h5v10H7V20zm15-15v10h-5V5h5zm-5 15h5v10h-5V20zm0 30h35v10H17V50zm0-15h35v10H17V35zm0-15h35v10H17V20zm0-15h35v10H17V5zM7 30h5v10H7V30zm5 20H2v10h10V50zM2 65h10v10H2V65zm5 20h5v10H7V85z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      backgroundAttachment: 'fixed'
    }}>
      <div className="invite-container my-8 md:my-16" style={{
        boxShadow: '0 10px 30px rgba(212, 175, 55, 0.2)',
        border: '1px solid rgba(212, 175, 55, 0.3)',
      }}>
        {/* Decorative traditional elements at top */}
        <div className="relative flex justify-center overflow-hidden h-16 bg-gradient-to-r from-gold/20 via-cream to-gold/20">
          <div className="absolute top-0 left-0 w-full h-4 bg-gold/10"></div>
          <div className="absolute -top-8 transform rotate-180" style={{ opacity: 0.3 }}>
            <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 0C60 20 0 40 0 40C0 40 60 60 100 80C140 60 200 40 200 40C200 40 140 20 100 0Z" fill="#D4AF37"/>
            </svg>
          </div>
        </div>
        
        {/* Home front image as header background */}
        <div className="relative">
          <img
            src="/lovable-uploads/3e733e9d-7b16-4bd6-bca5-9cc50843fe03.png"
            alt="Home Front"
            className="w-full h-64 md:h-80 object-cover shadow-lg border-b-4 border-gold"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-cream/30 to-transparent" />
        </div>
        
        <InvitationHeader
          title="House Ceremony Invitation"
          subtitle="With great joy and divine blessings, we invite you to grace the auspicious occasion of our housewarming ceremony."
          date={eventDate}
        />
        
        <Countdown targetDate={targetDate} />

        <Gallery />

        <EventDetails address={fullAddress} events={eventSchedule} />

        <LocationMap address={fullAddress} googleMapUrl={googleMapUrl} />

        {/* Footer will include WhatsApp and contact */}
        <Footer />
        
        {/* Decorative traditional elements at bottom */}
        <div className="relative flex justify-center overflow-hidden h-16 bg-gradient-to-r from-gold/20 via-cream to-gold/20">
          <div className="absolute bottom-0 left-0 w-full h-4 bg-gold/10"></div>
          <div className="absolute -bottom-8" style={{ opacity: 0.3 }}>
            <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 0C60 20 0 40 0 40C0 40 60 60 100 80C140 60 200 40 200 40C200 40 140 20 100 0Z" fill="#D4AF37"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
