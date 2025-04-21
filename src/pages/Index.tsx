
import React from "react";
import { InvitationHeader } from "@/components/ui/invitation-header";
import { EventDetails } from "@/components/ui/event-details";
import { RsvpForm } from "@/components/ui/rsvp-form";
import { LocationMap } from "@/components/ui/location-map";
import { Countdown } from "@/components/ui/countdown";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  // Placeholder data - you can replace with your actual event details
  const eventDate = "Saturday, June 14, 2025 • 4:00 PM";
  const fullAddress = "123 Blessing Avenue, Serenity Hills, CA 90210";
  const googleMapUrl = "https://www.google.com/maps?q=123+Blessing+Avenue,+Serenity+Hills,+CA+90210";
  const targetDate = "2025-06-14T16:00:00";
  
  const eventSchedule = [
    { time: "4:00 PM", activity: "Arrival & Welcome Drinks" },
    { time: "4:30 PM", activity: "House Blessing Ceremony" },
    { time: "5:30 PM", activity: "Home Tour" },
    { time: "6:00 PM", activity: "Dinner & Celebration" },
    { time: "9:00 PM", activity: "Event Concludes" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="invite-container my-8 md:my-16">
        <InvitationHeader 
          title="Home Blessing Ceremony"
          subtitle="Join us as we celebrate and bless our new beginning in our new home"
          date={eventDate}
        />
        
        <Countdown targetDate={targetDate} />
        
        <EventDetails 
          address={fullAddress}
          events={eventSchedule}
        />
        
        <LocationMap 
          address={fullAddress} 
          googleMapUrl={googleMapUrl}
        />
        
        <RsvpForm />
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
