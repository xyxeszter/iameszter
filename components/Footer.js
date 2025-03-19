import React from "react";
import Link from "next/link";
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export default function Footer() {
  return (
    <footer className="bg-background-light border-t border-gray-200">
      <nav className={`p-8 flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-6xl mx-auto px-4 ${spaceGrotesk.className}`}>
        <Link href="/" className="text-accent hover:underline whitespace-nowrap">
          Home
        </Link>
        <Link href="/about" className="text-accent hover:underline whitespace-nowrap">
          About me
        </Link>
        <Link href="/symbiosiso" className="text-accent hover:underline whitespace-nowrap">
          Symbiosiso
        </Link>
        <Link href="/robotic_fish" className="text-accent hover:underline whitespace-nowrap">
          Robotic Fish
        </Link>
        <Link href="/heatit" className="text-accent hover:underline whitespace-nowrap">
          Heatit°C
        </Link>
        <Link href="/music" className="text-accent hover:underline whitespace-nowrap">
          Music
        </Link>
        <Link href="/interactive" className="text-accent hover:underline whitespace-nowrap">
          Interactive
        </Link>
        <a
          href="https://wearnotch.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline whitespace-nowrap"
        >
          Notch Motion Sensors
        </a>
        <Link href="/contact" className="text-accent hover:underline whitespace-nowrap">
          Contact
        </Link>
      </nav>
    </footer>
  );
} 