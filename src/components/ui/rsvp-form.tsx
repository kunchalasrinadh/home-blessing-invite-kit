
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useToast } from "@/components/ui/use-toast";

export function RsvpForm() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendance, setAttendance] = useState("attending");
  const [guests, setGuests] = useState("1");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "RSVP Received!",
        description: "Thank you for your response.",
      });
      setLoading(false);
      setName("");
      setEmail("");
      setAttendance("attending");
      setGuests("1");
    }, 1000);
  };

  return (
    <div className="bg-cream py-16 px-6 md:px-12">
      <div className="max-w-xl mx-auto">
        <h2 className="font-playfair text-4xl font-bold mb-2 text-center gold-gradient">RSVP</h2>
        <p className="text-center text-warmGray mb-8">Please respond by May 15th, 2025</p>
        
        <div className="card-elegant animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter your full name" 
                required 
                className="border-gold/30 focus:border-gold focus:ring-gold"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email address" 
                required 
                className="border-gold/30 focus:border-gold focus:ring-gold"
              />
            </div>
            
            <div className="space-y-3">
              <Label>Will you attend?</Label>
              <RadioGroup 
                value={attendance} 
                onValueChange={setAttendance} 
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="attending" id="attending" className="text-gold border-gold/30" />
                  <Label htmlFor="attending" className="cursor-pointer">Yes, I will attend</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="not-attending" id="not-attending" className="text-gold border-gold/30" />
                  <Label htmlFor="not-attending" className="cursor-pointer">No, I cannot attend</Label>
                </div>
              </RadioGroup>
            </div>
            
            {attendance === "attending" && (
              <div className="space-y-2">
                <Label htmlFor="guests">Number of Guests</Label>
                <select
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full rounded-md border border-gold/30 py-2 px-3 focus:border-gold focus:ring-gold"
                >
                  <option value="1">1 (just me)</option>
                  <option value="2">2 people</option>
                  <option value="3">3 people</option>
                  <option value="4">4 people</option>
                  <option value="5">5 people</option>
                </select>
              </div>
            )}
            
            <Button 
              type="submit" 
              disabled={loading} 
              className="button-gold w-full"
            >
              {loading ? "Sending..." : "Submit RSVP"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
