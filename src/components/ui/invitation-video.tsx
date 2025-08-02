import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause } from 'lucide-react';

export function InvitationVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        if (entry.isIntersecting && videoRef.current) {
          // Start playing when video comes into view
          videoRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {
            // Autoplay failed, user interaction required
            setIsPlaying(false);
          });
        } else if (!entry.isIntersecting && videoRef.current) {
          // Pause when video goes out of view
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
        rootMargin: '0px'
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          console.log('Play failed');
        });
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-cream to-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-4xl font-bold mb-10 text-center gold-gradient">
          Invitation Video
        </h2>
        
        <div className="relative w-full max-w-[90%] mx-auto">
          <div className="relative group">
            <video
              ref={videoRef}
              className="w-full h-auto rounded-lg shadow-lg border-4 border-gold/30 transition-all duration-500 hover:shadow-xl"
              style={{
                aspectRatio: '16/9',
                objectFit: 'cover',
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
              }}
              muted={!isIntersecting} // Unmute when in view
              loop
              playsInline
              preload="metadata"
              poster="/images/3e733e9d-7b16-4bd6-bca5-9cc50843fe03.png"
            >
              <source src="/images/Invitation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Custom play/pause button overlay */}
            <div 
              className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer rounded-lg"
              onClick={togglePlayPause}
            >
              <div className="bg-white/90 rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-200">
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-gold" />
                ) : (
                  <Play className="w-8 h-8 text-gold ml-1" />
                )}
              </div>
            </div>
            
            {/* Glowing border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/40 via-gold/20 to-gold/40 -z-10 blur-sm rounded-lg" />
          </div>
          
          <p className="text-center text-warmGray mt-4 font-playfair italic">
            Join us in celebrating this auspicious occasion
          </p>
        </div>
      </div>
    </div>
  );
}