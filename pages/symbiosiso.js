import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

export default function SymbiosisO() {
  return (
    <div className="min-h-screen bg-background-light text-black">
      <Footer />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-4 sm:pt-8 pb-16 sm:pb-32">
        <div className="max-w-3xl text-left space-y-4 sm:space-y-8">
          {/* Header Section */}
          <div className="space-y-2 sm:space-y-4">
            <h1 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-12">SymbiosisO</h1>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Interactive Design at the Intersection of Smart Textiles and Soft Electronics</h3>
          </div>

          {/* Image Example */}
          <div className="space-y-2 sm:space-y-4">
            <div className="flex justify-start mb-4 sm:mb-6">
              <Image
                src="/images/symbiosiso/symbiosiso.jpg"
                alt="Project Image"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
                priority
              />
            </div>
            <p className="text-sm sm:text-base leading-normal text-gray-700">
              SymbiosisW
            </p>
          </div>

          {/* Why We Created It Section */}
          <div className="space-y-2 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-accent">Why We Created It</h2>
            <p className="text-base sm:text-xl leading-normal text-gray-700">
              SymbiosisO is a collection of biologically inspired interactive design objects that merge smart textiles with soft electronics. These artifacts explore the symbiosis between cyber-organisms and humans, reintroducing natural rhythms into our everyday environments.
            </p>
            <p className="text-base sm:text-xl leading-normal text-gray-700">
              Our goal was to develop programmable textile interfaces capable of visualizing information and expressing emotions—an active, responsive secondary skin. SymbiosisO functions as both an ambient display and a dynamic material that reacts to human and environmental stimuli through animated color changes.
            </p>
            <p className="text-base sm:text-xl leading-normal text-gray-700">
              The project began in 2009 as a collaboration between Estonian textile designer Kärt Ojavee and myself. While working on my thesis at the Tallinn Center of Biorobotics, I became involved in prototyping and researching smart textiles alongside Kärt. After my graduation, we decided to continue working together, evolving SymbiosisO into one of our major research projects.
            </p>
            <p className="text-base sm:text-xl leading-normal text-gray-700">
              Inspired by nature's ability to adapt and evolve, we sought to create objects that integrate seamlessly into urban life, offering a soft, organic approach to human-computer interaction.
            </p>
          </div>

          {/* Objects in the Collection Section */}
          <div className="space-y-2 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-accent">Objects in the SymbiosisO Collection</h2>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">SymbiosisW</h3>
                {/* SymbiosisW Section */}
                <div className="space-y-2 sm:space-y-4">
                  <div className="flex justify-start mb-4 sm:mb-6">
                    <Image
                      src="/images/symbiosiso/symbiosisw.jpg"
                      alt="Project Image"
                      width={800}
                      height={400}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                  <p className="text-sm sm:text-base leading-normal text-gray-700">
                    SymbiosisW - Reactive Wall
                  </p>
                </div>
                <p className="text-base sm:text-xl leading-normal text-gray-700">
                  A three-dimensional textile surface made of hexagonal cells that respond to human touch. As a person interacts with the fabric, patterns grow and spread beneath their hand, creating an evolving organic display. SymbiosisW explores the emotional and sensory qualities of tactile interaction, reinforcing the intimacy of touch.
                </p>
              </div>

              <div className="space-y-2 sm:space-y-4">
                <div className="flex justify-start mb-4 sm:mb-6">
                  <Image
                    src="/images/symbiosiso/symbiosisw2.jpg"
                    alt="Project Image"
                    width={800}
                    height={400}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>

              <div className="w-full aspect-video rounded-lg overflow-hidden">
                <iframe 
                  title="vimeo-player" 
                  src="https://player.vimeo.com/video/32722816?h=3f79a20b57" 
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">SymbiosisO: Voxel</h3>
                <div className="space-y-2 sm:space-y-4">
                  <div className="flex justify-start mb-4 sm:mb-6">
                    <Image
                      src="/images/symbiosiso/symbiosisvoxel.jpg"
                      alt="Symbiosis Voxel Display"
                      width={800}
                      height={400}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                  <p className="text-sm sm:text-base leading-normal text-gray-700">
                    Symbiosis Voxel - Interactive Display
                  </p>
                </div>

                <p className="text-base sm:text-xl leading-normal text-gray-700 mb-4 sm:mb-6">
                  A collaboration with Alex Dodge, showcased at Tribeca ISSEY MIYAKE (2012) and featured in Surface Magazine, CoolHunting, and Designboom.
                </p>

                <p className="text-base sm:text-xl leading-normal text-gray-700 mb-6 sm:mb-8">
                  SymbiosisO: Voxel was an interactive textile installation, exhibited at New York's Tribeca Issey Miyake showroom and gallery space. The installation was composed of interlocking honeycomb-shaped 'voxels', each dyed with heat-activated thermochromic ink and connected to a custom electronics system.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 sm:mb-8">
                  <div className="aspect-square">
                    <Image
                      src="/images/symbiosiso/voxel1.avif"
                      alt="Voxel Detail 1"
                      width={400}
                      height={400}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-square">
                    <Image
                      src="/images/symbiosiso/voxel2.avif"
                      alt="Voxel Detail 2"
                      width={400}
                      height={400}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-square">
                    <Image
                      src="/images/symbiosiso/voxel3.avif"
                      alt="Voxel Detail 3"
                      width={400}
                      height={400}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-square">
                    <Image
                      src="/images/symbiosiso/voxel4.avif"
                      alt="Voxel Detail 4"
                      width={400}
                      height={400}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-4">
                  <ul className="list-none space-y-2 sm:space-y-4">
                    <li className="text-base sm:text-xl leading-normal text-gray-700">
                      Users could touch the fabric, leaving a highlighted imprint as the thermochromic ink reacted to body heat.
                    </li>
                    <li className="text-base sm:text-xl leading-normal text-gray-700">
                      Visitors could also use their iPhones and iPads to access a web-based interface, allowing them to design multi-frame animations by tapping individual voxels on their screens. Once submitted, the animation played back directly on the textile installation.
                    </li>
                  </ul>
                </div>

                <p className="text-base sm:text-xl leading-normal text-gray-700 mt-4 sm:mt-6">
                  Unlike other SymbiosisO designs, Voxel reimagined the textile surface as a programmable, evolving display, blending touch, digital interaction, and responsive materiality into a unified sensory experience.
                </p>

                <p className="text-base sm:text-xl leading-normal text-gray-700 mt-4 sm:mt-6">
                  This project was my final thesis at NYU ITP.
                </p>

                {/* Video Section */}
                <div className="space-y-4 sm:space-y-8 mt-6 sm:mt-8">
                  <div className="w-full aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://player.vimeo.com/video/40135084?badge=0&autopause=0&player_id=0&app_id=58479"
                      title="SymbiosisO:Voxel"
                      allow="autoplay; fullscreen; picture-in-picture"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-sm sm:text-base leading-normal text-gray-700">
                    SymbiosisO: Voxel - Interactive Textile Display
                  </p>

                  <div className="w-full aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://player.vimeo.com/video/40097959?badge=0&autopause=0&player_id=0&app_id=58479"
                      title="Cool Hunting Rough Cut: SymbiosisO: Voxel"
                      allow="autoplay; fullscreen; picture-in-picture"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-sm sm:text-base leading-normal text-gray-700">
                    Cool Hunting Rough Cut: SymbiosisO: Voxel
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">SymbiosisO: Membrains</h3>
                <p className="text-base sm:text-xl leading-normal text-gray-700">
                  An immersive exhibition piece narrating the daily morphing of an interior environment in response to user activity throughout the day. The installation unfolds over a 20-30 minute cycle, allowing visitors to experience how dynamic materials reshape a living space based on time and interaction.
                </p>

                <ul className="list-none space-y-2 sm:space-y-4 mt-4 sm:mt-6">
                  <li className="text-base sm:text-xl leading-normal text-gray-700">
                    <span className="text-accent">•</span> <span className="font-semibold">Morning:</span> A window shader mimics the soft glow of morning light and a gentle breeze.
                  </li>
                  <li className="text-base sm:text-xl leading-normal text-gray-700">
                    <span className="text-accent">•</span> <span className="font-semibold">Awakening:</span> A shape-changing resting area ("Nest") subtly awakens the inhabitant.
                  </li>
                  <li className="text-base sm:text-xl leading-normal text-gray-700">
                    <span className="text-accent">•</span> <span className="font-semibold">Flow of Time:</span> The wall cover visualizes time through evolving patterns.
                  </li>
                  <li className="text-base sm:text-xl leading-normal text-gray-700">
                    <span className="text-accent">•</span> <span className="font-semibold">Tracking Movement:</span> The carpet senses footsteps, responding with changes in temperature and graphics.
                  </li>
                  <li className="text-base sm:text-xl leading-normal text-gray-700">
                    <span className="text-accent">•</span> <span className="font-semibold">Evening:</span> Lighting gradually shifts to create an intimate, localized atmosphere.
                  </li>
                </ul>

                <p className="text-base sm:text-xl leading-normal text-gray-700 mt-4 sm:mt-6">
                  The interior is complemented by interactive accessories and responsive interfaces, allowing visitors to explore individual objects beyond the full cycle.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">SymbiosisS</h3>
                {/* Image Example */}
                <div className="space-y-2 sm:space-y-4">
                  <div className="flex justify-start mb-4 sm:mb-6">
                    <Image
                      src="/images/symbiosiso/symbiosiss.jpg"
                      alt="Project Image"
                      width={800}
                      height={400}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
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