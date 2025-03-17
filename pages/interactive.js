import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Interactive() {
  return (
    <div className="min-h-screen bg-background-light text-black">
      <Footer />

      <div className="flex flex-col items-center justify-center text-center px-8 pt-8 pb-32">
        <div className="max-w-3xl text-left space-y-8">
          {/* Header Section */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold mb-12">Interactive Projects & Performances</h1>
            <p className="text-xl leading-normal text-gray-700">
              A collection of experimental projects exploring interaction, technology, and artistic expression. Some are interactive, others are performative explorations of human behavior, perception, and storytelling.
            </p>
          </div>

          {/* H.A.I.rstyling Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8 text-accent">H.A.I.rstyling (2011)</h2>
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/23375234?badge=0&autopause=0&player_id=0&app_id=58479"
                title="h.A.I.rstyling"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">💇‍♂️ Free AI-Powered Haircuts in Washington Square Park</h3>
              <p className="text-lg text-gray-600 mb-2">NYU ITP – Final project for Learning Bit by Bit</p>
              <p className="text-lg text-gray-600 mb-4">Created with Cyrus von Hochstetter</p>
              <p className="text-xl leading-normal text-gray-700">
                We assembled a database of great haircuts from the Internet and used it to create automated recommendations based on:
              </p>
              <ul className="list-none space-y-2 mt-4 mb-6">
                <li className="text-xl leading-normal text-gray-700">
                  <span className="text-accent">•</span> Face shape
                </li>
                <li className="text-xl leading-normal text-gray-700">
                  <span className="text-accent">•</span> Hair type & length
                </li>
                <li className="text-xl leading-normal text-gray-700">
                  <span className="text-accent">•</span> Age & style preferences
                </li>
              </ul>
              <p className="text-xl leading-normal text-gray-700">
                Through our app, users could select a hairstyle tailored to their facial geometry and personal taste.
              </p>
              <p className="text-xl leading-normal text-gray-700 mt-4">
                The project was more of a public performance than a traditional app launch—we set up in Washington Square Park, New York, offering free AI-powered haircuts. I am not a professional hairdresser, so it was a bold experiment, but to my surprise, people were actually happy with the results!
              </p>
            </div>
          </div>

          {/* Project Divider */}
          <div className="border-t-2 border-gray-200 my-16"></div>

          {/* Smoquito Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8 text-accent">Smoquito (2009)</h2>
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/5407782?badge=0&autopause=0&player_id=0&app_id=58479"
                title="Smoquito"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">🔥 Smoke-it 'n kill-the-mosquito!</h3>
              <p className="text-lg text-gray-600 mb-2">Augmented Reality Installation</p>
              <p className="text-lg text-gray-600 mb-4">Created with András Szalai, Krisztián Gergely, and Zoltán Csík-Kovács at KIBU</p>
              <p className="text-xl leading-normal text-gray-700">
                A playful, interactive installation where smokers could use their lit cigarette as a weapon against mosquitoes on a digital screen.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-sm mt-8">
                <h4 className="text-xl font-bold mb-4">How it worked:</h4>
                <ul className="list-none space-y-2">
                  <li className="text-xl leading-normal text-gray-700">
                    <span className="text-accent">•</span> A virtual swarm of mosquitoes flies across the screen.
                  </li>
                  <li className="text-xl leading-normal text-gray-700">
                    <span className="text-accent">•</span> An IR camera detects the glowing tip of a burning cigarette.
                  </li>
                  <li className="text-xl leading-normal text-gray-700">
                    <span className="text-accent">•</span> The cigarette acts as a pointer, allowing users to burn mosquitoes upon contact.
                  </li>
                  <li className="text-xl leading-normal text-gray-700">
                    <span className="text-accent">•</span> Burned mosquitoes fall to the ground, and new ones spawn continuously.
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4">Exhibitions & Festivals</h4>
                <ul className="list-none space-y-2">
                  <li className="text-xl leading-normal text-gray-700">
                    <span className="text-accent">•</span> Szörp 2009 (Szentendre, Hungary)
                  </li>
                  <li className="text-xl leading-normal text-gray-700">
                    <span className="text-accent">•</span> Alternative Party 2009 (Helsinki, Finland)
                  </li>
                  <li className="text-xl leading-normal text-gray-700">
                    <span className="text-accent">•</span> Animated Dreams Film Festival 2009 (Tallinn, Estonia)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project Divider */}
          <div className="border-t-2 border-gray-200 my-16"></div>

          {/* Cube for Expression Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8 text-accent">Cube for Expression (2010)</h2>
            <h3 className="text-2xl font-semibold mb-4">🎭 Multimedia Performance</h3>
            
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/17480618?badge=0&autopause=0&player_id=0&app_id=58479"
                title="Cube for Expression"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
 
            <div className="mt-8">
              <p className="text-xl leading-normal text-gray-700">
              A live art performance exploring identity, perception, and the interplay of artistic disciplines—painting, digital projection, live coding, and spoken word. The Concept: A 6ft x 6ft x 6ft illuminated cube sits center stage. Over time, different artists use different mediums to depict the same subject: a nude body.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-bold mb-4">Performance Structure:</h4>
                  <ul className="list-none space-y-4">
                    <li className="text-xl leading-normal text-gray-700">
                      <span className="font-semibold">Act 1 - Min Jung Kim: Traditional Korean Ink Painting</span> – Min paints the front side of the cube with a nude figure, bringing raw artistic expression to the space.
                    </li>
                    <li className="text-xl leading-normal text-gray-700">
                      <span className="font-semibold">Act 2 - Valentina Camancho: Digital Montage</span> – Valentine projects a Photoshop-based collage of the nude figure onto the next side of the cube.
                    </li>
                    <li className="text-xl leading-normal text-gray-700">
                      <span className="font-semibold">Act 3 - Eszter Ozsvald: Live Coding Visualization</span> – I generate real-time digital visuals of the nude figure using Fluxus.
                    </li>
                    <li className="text-xl leading-normal text-gray-700">
                      <span className="font-semibold">Act 4 - Yonatan Ben-Simhon: Spoken Word Performance</span> – The subject of the piece, Yoni, steps out from the cube, almost naked, reading a monologue about self-acceptance and navigating the unknown.
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
            <div className="flex justify-start mb-6">
              <Image
                src="/images/interactive/eszter_coding.png"
                alt="fluxus code"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
              </div>
              <p className="text-xl leading-normal text-gray-700 mt-6">
                The Outcome: As the cube rotates, each artistic layer adds a new dimension to the same body, culminating in a deeply introspective moment of vulnerability and identity exploration.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 