import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center text-black text-center">
      <nav className="p-8 flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-6xl px-4">
        <Link href="/" className="text-lg text-black hover:underline">Home</Link>
        <Link href="/bio" className="text-lg text-black hover:underline">About me</Link>
        <Link href="/symbiosiso" className="text-lg text-accent hover:underline">Reactive Textiles</Link>
        <Link href="/robotic_fish" className="text-lg text-accent hover:underline">Robotic Fish</Link>
        <Link href="/heatit" className="text-lg text-accent hover:underline">Heatit°C</Link>
        <Link href="/interactive" className="text-lg text-accent hover:underline">Interactive</Link>
        <Link href="/music" className="text-lg text-accent hover:underline">Music</Link>
        <Link href="https://wearnotch.com" className="text-lg text-accent hover:underline">Notch Motion Sensors</Link>
      </nav>
    </div>
  );
} 