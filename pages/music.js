import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Music() {
  return (
    <div className="min-h-screen bg-background-light text-black">
      <Footer />
      
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-4 sm:pt-8 pb-16 sm:pb-32">
        <div className="max-w-3xl text-left space-y-4 sm:space-y-8">
          {/* Header Section */}
          <div className="space-y-2 sm:space-y-4">
            <h1 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-12">Neurime</h1>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">A Neural Network-Inspired Musical Interface</h2>
            <p className="text-lg sm:text-xl leading-normal text-gray-700 font-semibold">
              An instrument that learns, evolves, and composes with you
            </p>
          </div>

          {/* Vimeo Video */}
          <div className="w-full aspect-video rounded-lg overflow-hidden">
            <iframe 
              title="vimeo-player" 
              src="https://player.vimeo.com/video/50642688?h=45394778e6" 
              className="w-full h-full"
              allowFullScreen
            />
          </div>

          {/* What is Neurime Section */}
          <div className="space-y-2 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-accent">What is Neurime?</h2>
            <p className="text-base sm:text-xl leading-normal text-gray-700">
              Neurime is a large-scale interactive musical instrument inspired by neural networks. Designed in collaboration with Michael Rosen at NYU ITP, it reimagines musical composition as an adaptive system where connections form, evolve, and fade—just like synapses in the brain.
            </p>
          </div>

          {/* How It Works Section */}
          <div className="space-y-2 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-accent">How It Works</h2>
            <div className="space-y-2 sm:space-y-4">
              <div className="flex justify-start mb-4 sm:mb-6">
                <Image
                  src="/images/neurime/neurime.jpg"
                  alt="SymbiosisW Wall Installation"
                  width={800}
                  height={400}
                  className="rounded-lg object-cover w-full"
                  priority
                />
              </div>
            </div>
            <p className="text-base sm:text-xl leading-normal text-gray-700">
              Each "neuron" in Neurime is represented by an individual audio channel that changes in complexity with use. The more frequently a node is activated, the richer its resonance becomes through additive synthesis and modulation.
            </p>
            <p className="text-base sm:text-xl leading-normal text-gray-700">
              <span className="font-semibold">The Neural Connection:</span> When two or more nodes are activated together, a connection is formed. Neurime remembers these interactions, indexing the relationships by strength and distance. Over time, a dynamic web of musical connections emerges, allowing users to compose by touch.
            </p>

            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm mt-4 sm:mt-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-accent">Memory & Evolution:</h3>
   
              <ul className="list-none space-y-2">
                <li className="text-base sm:text-xl leading-normal text-gray-700">
                  <span className="text-accent">•</span> Holding a neuron stores rhythmic patterns dynamically.
                </li>
                <li className="text-base sm:text-xl leading-normal text-gray-700">
                  <span className="text-accent">•</span> Repeating the action recalls the stored pattern and plays it back.
                </li>
                <li className="text-base sm:text-xl leading-normal text-gray-700">
                  <span className="text-accent">•</span> Connections gradually fade, ensuring that compositions continuously evolve.
                </li>
              </ul>
            </div>

            <p className="text-base sm:text-xl leading-normal text-gray-700">
              This real-time learning system allows people interacting with Neurime to create ever-changing soundscapes, forming music collaboratively and intuitively.
            </p>
          </div>

          {/* Why We Built It Section */}
          <div className="space-y-2 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-accent">Why We Built It</h2>
            <div className="flex justify-start mb-4 sm:mb-6">
              <Image
                src="/images/neurime/neurime2.png"
                alt="Neurime 2"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <p className="text-base sm:text-xl leading-normal text-gray-700">
              The goal was to create an audio interface that behaves like a neural network—where connections are formed through touch and sound spreads across the system. By interacting with the wall-based installation, users could compose music organically, shaping the auditory landscape by triggering nodes and establishing temporary sound relationships.
            </p>
          </div>

          {/* Exhibitions Section */}
          <div className="space-y-2 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-accent">Exhibitions & Performances</h2>
            {/* Vimeo Video */}
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/33837689?badge=0&autopause=0&player_id=0&app_id=58479"
                title="Neurime - Neural Interfaces for Musical Expression"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <ul className="list-none space-y-2">
              <li className="text-base sm:text-xl leading-normal text-gray-700">
                <span className="text-accent">•</span> Neurhyme, Cameo Gallery, Brooklyn (2011)
              </li>
              <li className="text-base sm:text-xl leading-normal text-gray-700">
                <span className="text-accent">•</span> New Interfaces for Musical Expression (NIME), Michigan (2012)
              </li>
            </ul>
          </div>

          {/* Future Section */}
          <div className="space-y-2 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-accent">Exploring the Future of Interactive Sound</h2>
            <div className="flex justify-start mb-4 sm:mb-6">
              <Image
                src="/images/neurime/neurime3.jpg"
                alt="Large Scale Wall Installation"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <p className="text-base sm:text-xl leading-normal text-gray-700">
              Neurime was an exploration into how AI-inspired systems can influence musical expression. It remains a fascinating study of adaptive, evolving compositions—where music is not just played, but learns and changes with the performer.
            </p>
          </div>
        </div>
      </div>

      <nav className="p-4 sm:p-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 justify-center">
        <Link href="/" className="text-accent hover:underline">Back to Home</Link>
        <Link href="/projects" className="text-accent hover:underline">Projects</Link>
      </nav>
    </div>
  );
} 