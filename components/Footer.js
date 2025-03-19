import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center text-black text-center">
      <nav className="p-8 flex justify-center gap-x-8 max-w-6xl px-4 overflow-x-auto">
        <Link href="/" className="text-lg text-black hover:underline whitespace-nowrap">Home</Link>
        <Link href="/about" className="text-lg text-black hover:underline whitespace-nowrap">About me</Link>
        <Link href="/symbiosiso" className="text-lg text-accent hover:underline whitespace-nowrap">Reactive Textiles</Link>
        <Link href="/robotic_fish" className="text-lg text-accent hover:underline whitespace-nowrap">Robotic Fish</Link>
        <Link href="/heatit" className="text-lg text-accent hover:underline whitespace-nowrap">Heatit°C</Link>
        <Link href="/interactive" className="text-lg text-accent hover:underline whitespace-nowrap">Interactive</Link>
        <Link href="/music" className="text-lg text-accent hover:underline whitespace-nowrap">Music</Link>
        <Link href="https://wearnotch.com" className="text-lg text-accent hover:underline whitespace-nowrap">Notch Motion Sensors</Link>
        <Link href="https://www.linkedin.com/in/eszterozsvald/" className="text-lg text-accent hover:underline whitespace-nowrap">Contact Me</Link>
      </nav>
    </div>
  );
};

export default Footer; 