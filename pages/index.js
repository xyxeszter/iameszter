import React from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light text-black text-center">
      <Footer />

      <div className="flex flex-col items-center justify-center py-32">
        <div className="w-full max-w-[600px] px-4 mb-8">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full  pointer-events-none"
          >
            <source src="/videos/eszter_with_birds.mov" type="video/quicktime" />
            <source src="/videos/eszter_with_birds.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h1 className="text-5xl font-bold mb">
          <span className={`text-black ${spaceGrotesk.className}`}>Eszter Ozsvald</span>
        </h1>
        <p className={`text-xl text-black mb-12 ${spaceGrotesk.className}`}>
        Tech, motion, and nutrition. From the unexpected future ∞
        </p>
      </div>
    </div>
  );
}
