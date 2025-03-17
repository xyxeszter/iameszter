import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

export default function RoboticFish() {
  return (
    <div className="min-h-screen bg-background-light text-black">
      <Footer />

      <div className="flex flex-col items-center justify-center text-center px-8 pt-8 pb-32">
        <div className="max-w-3xl text-left space-y-8">
          {/* Header Section */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold mb-12">Robotic Fish</h1>
            <h2 className="text-2xl font-semibold mb-4">A Biologically Inspired Underwater Robot</h2>
          </div>

          {/* YouTube Video */}
          <div className="w-full aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/Khys8NRYrBk"
              title="Robotic Fish Project"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Why I Built It Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8 text-accent">Why I Built It</h2>
            <p className="text-xl leading-normal text-gray-700">
              During the final year of my undergraduate studies at Tallinn University of Technology, I joined the Center for Biorobotics, an institute dedicated to research at the intersection of biology and engineering. My fascination with animal social dynamics—particularly how fish follow a leader in group behavior—led me to explore an engineering perspective:
            </p>
            <p className="text-xl leading-normal text-gray-700 font-semibold pl-4 border-l-4 border-accent my-8">
            🐟 What makes a fish a leader? What physical and behavioral characteristics influence which individuals get followed?
            </p>
            <p className="text-xl leading-normal text-gray-700">
              To investigate these questions, I set out to design and build a robotic fish—a mechanical "carrier" fish capable of leading real fish by mimicking the qualities of an effective leader. This project became my undergraduate Mechatronics BSc thesis at Budapest University of Technology.
            </p>
          </div>

          {/* Challenges & Innovation Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8 text-accent">Challenges & Innovation</h2>
            <div className="flex justify-start mb-6">
              <Image
                src="/images/robotic_fish/ariel11-insidetiny.jpg"
                alt="Robotic Fish Design Process"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <p className="text-xl leading-normal text-gray-700">
              Creating a life-like robotic fish required a departure from traditional rigid-body robotics. Instead of using fixed joints and motors, I developed a flexible-body design, incorporating a novel silicon-polymer material to create a compliant, undulating tail.
            </p>
            <p className="text-xl leading-normal text-gray-700">
              However, modeling the fluid dynamics of a soft-bodied robot proved exceptionally complex. Fish-body interactions with water are highly nonlinear, making it difficult to simulate and predict movement mathematically. Instead, I followed an iterative design approach, refining each prototype based on real-world testing.
            </p>
            

            <div className="flex justify-start mb-6">
              <Image
                src="/images/robotic_fish/experimentariel2tiny.jpg"
                alt="Final Robotic Fish Prototype"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>


            <div className="bg-white rounded-lg p-6 shadow-sm mt-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">🚀 Interesting Facts:</h3>
              <ul className="list-none space-y-2">
                <li className="text-xl leading-normal text-gray-700">
                  <span className="text-accent">✔️</span> This was built before 3D printing was widely available—I manually handcrafted and molded all the components.
                </li>
                <li className="text-xl leading-normal text-gray-700">
                  <span className="text-accent">✔️</span> The robotic fish was powered by an Arduino platform for control and actuation.
                </li>
                <li className="text-xl leading-normal text-gray-700">
                  <span className="text-accent">✔️</span> It achieved 2-3 body lengths per second, making it one of the fastest biologically inspired robotic fish at the time.
                </li>
                <li className="text-xl leading-normal text-gray-700">
                  <span className="text-accent">✔️</span> The robot's movement left behind the same vortex patterns as real fish, confirming its natural swimming motion.
                </li>
              </ul>
            </div>
          </div>

          {/* Final Prototype & Results Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8 text-accent">Final Prototype & Results</h2>
            <div className="flex justify-start mb-6">
              <Image
                src="/images/robotic_fish/ariel2.jpg"
                alt="Final Robotic Fish Prototype"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <p className="text-xl leading-normal text-gray-700">
              The end product was a fully functional robotic fish that successfully demonstrated biologically inspired swimming. By using force sensors, I measured the propulsion efficiency, comparing its performance to other robotic fish designs from that era.
            </p>
            
            <p className="text-xl leading-normal text-gray-700">
              Although the mechanisms of leadership in fish schools remain a complex, multi-layered topic, this project pushed the boundaries of soft robotics in underwater environments and opened up new possibilities for bioinspired marine robotics.
            </p>
          </div>


          <div className="flex justify-start mb-6">
              <Image
                src="/images/robotic_fish/fishheadersmall.jpg"
                alt="Final Robotic Fish Prototype"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>


            
          {/* Future & Collaboration Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8 text-accent">Future & Collaboration</h2>
            <p className="text-xl leading-normal text-gray-700">
              Even today, I remain fascinated by underwater robotics and marine exploration. If you're working on a related project and looking for a collaborator—feel free to reach out!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 