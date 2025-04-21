
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
    <div className="min-h-screen bg-background">
      <div className="invite-container my-8 md:my-16">
        {/* Home front image as header background, gallery after header */}
        <div className="relative">
          <img
            src="/lovable-uploads/3e733e9d-7b16-4bd6-bca5-9cc50843fe03.png"
            alt="Home Front"
            className="w-full h-64 md:h-80 object-cover rounded-t-xl shadow-lg border-b-4 border-gold"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-cream/30 to-transparent rounded-t-xl" />
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
      </div>
    </div>
  );
};

export default Index;
