import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

export default function SymbiosisO() {
  return (
    <div className="min-h-screen bg-background-light text-black">
      <Footer />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center px-8 pt-8 pb-32">
        <div className="max-w-3xl text-left space-y-8">
          {/* Header Section */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold mb-12">SymbiosisO</h1>
            <h3 className="text-2xl font-semibold mb-4">Interactive Design at the Intersection of Smart Textiles and Soft Electronics</h3>
          </div>

          {/* Image Example */}
          <div className="space-y-4">
            <div className="flex justify-start mb-6">
              <Image
                src="/images/symbiosiso/symbiosiso.jpg"
                alt="Project Image"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <p className="text-s leading-normal text-gray-700">
              SymbiosisW
            </p>
          </div>

          {/* Why We Created It Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8 text-accent">Why We Created It</h2>
            <p className="text-xl leading-normal text-gray-700">
              SymbiosisO is a collection of biologically inspired interactive design objects that merge smart textiles with soft electronics. These artifacts explore the symbiosis between cyber-organisms and humans, reintroducing natural rhythms into our everyday environments.
            </p>
            <p className="text-xl leading-normal text-gray-700">
              Our goal was to develop programmable textile interfaces capable of visualizing information and expressing emotions—an active, responsive secondary skin. SymbiosisO functions as both an ambient display and a dynamic material that reacts to human and environmental stimuli through animated color changes.
            </p>
            <p className="text-xl leading-normal text-gray-700">
              The project began in 2009 as a collaboration between Estonian textile designer Kärt Ojavee and myself. While working on my thesis at the Tallinn Center of Biorobotics, I became involved in prototyping and researching smart textiles alongside Kärt. After my graduation, we decided to continue working together, evolving SymbiosisO into one of our major research projects.
            </p>
            <p className="text-xl leading-normal text-gray-700">
              Inspired by nature's ability to adapt and evolve, we sought to create objects that integrate seamlessly into urban life, offering a soft, organic approach to human-computer interaction.
            </p>
          </div>

          {/* Objects in the Collection Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8 text-accent">Objects in the SymbiosisO Collection</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">SymbiosisW</h3>
                            {/* SymbiosisW Section */} {/* Image Example */}
  <div className="space-y-4">
            <div className="flex justify-start mb-6">
              <Image
                src="/images/symbiosiso/symbiosisw.jpg"
                alt="Project Image"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <p className="text-s leading-normal text-gray-700">
            SymbiosisW - Reactive Wall
            </p>
          </div>
                <p className="text-xl leading-normal text-gray-700">
                  A three-dimensional textile surface made of hexagonal cells that respond to human touch. As a person interacts with the fabric, patterns grow and spread beneath their hand, creating an evolving organic display. SymbiosisW explores the emotional and sensory qualities of tactile interaction, reinforcing the intimacy of touch.
                </p>
              </div>


              <div className="space-y-4">
            <div className="flex justify-start mb-6">
              <Image
                src="/images/symbiosiso/symbiosisw2.jpg"
                alt="Project Image"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>

          </div>


          <iframe title="vimeo-player" src="https://player.vimeo.com/video/32722816?h=3f79a20b57" width="800" height="360" frameborder="0"    allowfullscreen></iframe>

    
              <div>
                <h3 className="text-2xl font-semibold mb-4">SymbiosisO: Voxel</h3>
                <div className="space-y-4">
                  <div className="flex justify-start mb-6">
                    <Image
                      src="/images/symbiosiso/symbiosisvoxel.jpg"
                      alt="Symbiosis Voxel Display"
                      width={800}
                      height={400}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                  <p className="text-s leading-normal text-gray-700">
                    Symbiosis Voxel - Interactive Display
                  </p>
                </div>

                <p className="text-xl leading-normal text-gray-700 mb-6">
                  A collaboration with Alex Dodge, showcased at Tribeca ISSEY MIYAKE (2012) and featured in Surface Magazine, CoolHunting, and Designboom.
                </p>

                <p className="text-xl leading-normal text-gray-700 mb-8">
                  SymbiosisO: Voxel was an interactive textile installation, exhibited at New York's Tribeca Issey Miyake showroom and gallery space. The installation was composed of interlocking honeycomb-shaped 'voxels', each dyed with heat-activated thermochromic ink and connected to a custom electronics system.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
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

                <div className="space-y-4">
                  <ul className="list-none space-y-4">
                    <li className="text-xl leading-normal text-gray-700">
                     Users could touch the fabric, leaving a highlighted imprint as the thermochromic ink reacted to body heat.
                    </li>
                    <li className="text-xl leading-normal text-gray-700">
                     Visitors could also use their iPhones and iPads to access a web-based interface, allowing them to design multi-frame animations by tapping individual voxels on their screens. Once submitted, the animation played back directly on the textile installation.
                    </li>
                  </ul>
                </div>

                <p className="text-xl leading-normal text-gray-700 mt-6">
                  Unlike other SymbiosisO designs, Voxel reimagined the textile surface as a programmable, evolving display, blending touch, digital interaction, and responsive materiality into a unified sensory experience.
                </p>

                <p className="text-xl leading-normal text-gray-700 mt-6">
                  This project was my final thesis at NYU ITP.
                </p>

                {/* Video Section */}
                <div className="space-y-8 mt-8">
                  <div className="w-full aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://player.vimeo.com/video/40135084?badge=0&autopause=0&player_id=0&app_id=58479"
                      title="SymbiosisO:Voxel"
                      allow="autoplay; fullscreen; picture-in-picture"
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-s leading-normal text-gray-700">
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
                  <p className="text-s leading-normal text-gray-700">
                    Cool Hunting Rough Cut: SymbiosisO: Voxel
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">SymbiosisO: Membrains</h3>
                <p className="text-xl leading-normal text-gray-700">
                  An immersive exhibition piece narrating the daily morphing of an interior environment in response to user activity throughout the day. The installation unfolds over a 20-30 minute cycle, allowing visitors to experience how dynamic materials reshape a living space based on time and interaction.
                </p>

                <ul className="list-none space-y-4 mt-6">
                  <li className="text-xl leading-normal text-gray-700">
                    <span className="text-accent">•</span> <span className="font-semibold">Morning:</span> A window shader mimics the soft glow of morning light and a gentle breeze.
                  </li>
                  <li className="text-xl leading-normal text-gray-700">
                    <span className="text-accent">•</span> <span className="font-semibold">Awakening:</span> A shape-changing resting area ("Nest") subtly awakens the inhabitant.
                  </li>
                  <li className="text-xl leading-normal text-gray-700">
                    <span className="text-accent">•</span> <span className="font-semibold">Flow of Time:</span> The wall cover visualizes time through evolving patterns.
                  </li>
                  <li className="text-xl leading-normal text-gray-700">
                    <span className="text-accent">•</span> <span className="font-semibold">Tracking Movement:</span> The carpet senses footsteps, responding with changes in temperature and graphics.
                  </li>
                  <li className="text-xl leading-normal text-gray-700">
                    <span className="text-accent">•</span> <span className="font-semibold">Evening:</span> Lighting gradually shifts to create an intimate, localized atmosphere.
                  </li>
                </ul>

                <p className="text-xl leading-normal text-gray-700 mt-6">
                  The interior is complemented by interactive accessories and responsive interfaces, allowing visitors to explore individual objects beyond the full cycle.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">SymbiosisS</h3>
                 {/* Image Example */}
            <div className="space-y-4">
            <div className="flex justify-start mb-6">
              <Image
                src="/images/symbiosiso/symbiosiss.jpg"
                alt="Project Image"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <p className="text-s leading-normal text-gray-700">
            SymbiosisS - Reactive Seat
            </p>
          </div>
                <p className="text-xl leading-normal text-gray-700">
                  A soft, interactive textile designed for seating areas. As a person sits, a slowly shifting pattern forms and evolves, responding dynamically to movement and pressure. When left undisturbed, the textile returns to its peaceful state, expanding the pattern organically.
                </p>

 {/* Image Example */}
 <div className="space-y-4">
            <div className="flex justify-start mb-6">
              <Image
                src="/images/symbiosiso/symbiosiss2.jpg"
                alt="Project Image"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <p className="text-s leading-normal text-gray-700">
            SymbiosisS - Reactive Seat
            </p>
          </div>

                <p className="text-xl leading-normal text-gray-700">
                  SymbiosisS demonstrates the potential of programmable textile interfaces in everyday environments. It can be customized to visualize different information—such as gentle reminders (e.g., drawing circles for an important task) or purely aesthetic animations.
                </p>
              </div>

                  {/* Image Example */}
      <div className="space-y-4">
        <div className="w-1/2">
          <div className="flex justify-start mb-6">
            <Image
              src="/images/symbiosiso/symbiosiss3.jpg"
              alt="Project Image"
              width={400}
              height={200}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>
        <p className="text-s leading-normal text-gray-700">
          SymbiosisS
        </p>
      </div>


              <div>
                <h3 className="text-2xl font-semibold mb-4">SymbiosisC</h3>
                             {/* Image Example */}
      <div className="space-y-4">
            <div className="flex justify-start mb-6">
              <Image
                src="/images/symbiosiso/symbiosisC.jpg"
                alt="Project Image"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <p className="text-s leading-normal text-gray-700">
            SymbiosisC - Heat-Responsive Cushion
            </p>
          </div>
                <p className="text-xl leading-normal text-gray-700">
                  A low-tech member of the SymbiosisO collection, SymbiosisC is a cushion that reacts to body heat and warm objects by changing color. The pattern was generated using a custom parametric algorithm in Processing.org, offering a simple yet striking visualization of temperature changes.
                </p>
              </div>
            </div>
          </div>

          {/* How We Made It Section */}
               {/* Image Example */}
               <div className="space-y-4">
            <div className="flex justify-start mb-6">
              <Image
                src="/images/symbiosiso/stitching.jpg"
                alt="Project Image"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <p className="text-s leading-normal text-gray-700">
            We spent days and nights stitching the textiles.
            </p>
          </div>




           
           <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8 text-accent">How We Made It</h2>
            <p className="text-xl leading-normal text-gray-700">
              The fabrication process blends traditional craftsmanship with innovative technologies:
            </p>
            <ul className="list-disc pl-4 space-y-2 mt-4">
              <li className="text-xl leading-normal text-gray-700">Handcraft techniques such as stitching and screen printing</li>
              <li className="text-xl leading-normal text-gray-700">Advanced digital fabrication, including laser cutting</li>
              <li className="text-xl leading-normal text-gray-700">Integration of soft electronics <Link href="/heatit" className="text-accent hover:underline text-lg whitespace-nowrap">Heatit</Link> directly into the textile structure</li>
              <li className="text-xl leading-normal text-gray-700">Water-based thermochromic ink for dynamic color changes</li>
            </ul>


          <div className="space-y-4">
            <div className="flex justify-start mb-6">
              <Image
                src="/images/symbiosiso/voxel5.avif"
                alt="Project Image"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
            <p className="text-xl leading-normal text-gray-700">
              The textile's modular design allows SymbiosisO objects to expand by connecting multiple units, adapting to different spaces and applications.
            </p>
            <p className="text-xl leading-normal text-gray-700">
              We primarily use felt, a warm and tactile material that lends itself to interior applications. The geometric structure is based on Voronoi tessellation, a natural cellular pattern that intuitively folds into three-dimensional surfaces. This flexibility allows the textile to cover and conform to various objects, enabling SymbiosisO to become an interactive element in diverse environments.
            </p>
          </div>


          {/* Future Vision Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8 text-accent">Future Vision</h2>
            <p className="text-xl leading-normal text-gray-700">
              Our fundamental design philosophy draws from biology: we create multi-layered, responsive materials that evolve conceptually and physically over time.
            </p>
            <p className="text-xl leading-normal text-gray-700">
              While initially designed as a poetic exploration of organic interaction, SymbiosisO has applications beyond personal spaces. We envision its integration into rehabilitation centers, hospital waiting rooms, and children's play areas, where its gentle, adaptive interface can enhance both emotional well-being and sensory engagement.
            </p>
            <p className="text-xl leading-normal text-gray-700">
              By merging technology with textile traditions, SymbiosisO represents an alternative future for human-computer interaction—one that is soft, intuitive, and alive.
            </p>
          </div>

    {/* Image Example */}
    <div className="space-y-4">
            <div className="flex justify-start mb-6">
              <Image
                src="/images/symbiosiso/symbiosisw2.jpg"
                alt="Project Image"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <p className="text-s leading-normal text-gray-700">
            SymbiosisW
            </p>
          </div>



        </div>
      </div>

      {/* Footer Navigation */}
      <nav className="p-8 flex space-x-6 justify-center">
        <Link href="/" className="text-accent hover:underline">Back to Home</Link>
        <Link href="/projects" className="text-accent hover:underline">Projects</Link>
      </nav>

      <Footer />
    </div>
  );
} 