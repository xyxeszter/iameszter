import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export default function Bio() {
  return (
    <div className="min-h-screen bg-background-light text-black">
      <Footer />
      <div className="flex flex-col items-center justify-center text-center px-8 pt-16 pb-32">
        <div className="max-w-3xl text-left space-y-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="space-y-4 w-full">
              <p className={`text-5xl font-bold mb-12 ${spaceGrotesk.className}`}>
                ୧(▲ᴗ▲)ノ
              </p>

              <div className="space-y-8 text-m leading-relaxed text-gray-700">
                <p>
                  Hello! I'm Eszter, an entrepreneur, designer, and engineer exploring the intersection of technology, human movement, and interactive design.
                </p>

                <p>
                  My work spans hardware, AI, and wearables, from motion-tracking sensors for weightlifting to responsive textiles and AI-driven fitness platforms. I focus on the balance between innovation and functionality, designing products that enhance human performance and experience.
                </p>

                <p>
                  Born in Hungary, I built a strong foundation in mathematics and engineering, which I've applied across fields—from biomechanics and robotics to smart materials and connected fitness. My early years as a nationally ranked fin-swimmer (No. 8 in Hungary) instilled in me a disciplined, problem-solving mindset, shaping how I approach product development, creative technology, and business strategy.
                </p>

                <p>
                  Currently, I lead Notch, a motion-capture company redefining how athletes track and optimize movement, while also exploring food innovation and biotech through my latest venture. I'm passionate about turning ideas into reality, whether through cutting-edge sports tech, interactive installations, or futuristic nutrition solutions.
                </p>

                <p>
                  If you're interested in collaborating, exploring new technologies, or rethinking the future of human performance, feel free to reach out!
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className={`text-3xl font-bold mb-8 text-accent ${spaceGrotesk.className}`}>Professional Experience</h2>
            <div className="space-y-8">
              <div>
                
                <h3 className="text-2xl font-semibold mb-4">
                  Co-Founder & CTO, Notch Wearable Motion Sensors (2013 - ) 
                </h3>
                <p className="text-m leading-normal text-gray-700 mb-4">
                As the Co-founder and CTO of Notch, I am leading the development of cutting-edge wearable motion sensors that redefine how human movement is captured and analyzed. Notch's multi-sensor system provides high-fidelity 3D motion data, delivering real-time, AI-powered insights on movement form, velocity, range of motion, fatigue, and performance — impacting fitness, rehabilitation, and healthcare.
                <br /><br />I oversee the technological vision of the company, from hardware development - selecting the best gyroscopes, accelerometers, BLE chips-, to AI-driven analytics, bridging biomechanics, machine learning, and user experience. My role extends across R&D, prototyping, manufacturing, and scaling production, ensuring that Notch remains at the forefront of motion tracking innovation.
                <br /><br /> Products:
                </p>
                <ul className="list-none space-y-4">
                  <li className="text-m leading-normal text-gray-700">
                    <span className="text-neon font-semibold">👾</span> <span className="font-semibold"><a href="https://strength.wearnotch.com" target="_blank" rel="noopener noreferrer" className="text-link hover:underline">Notch Strength Lab</a> – The Future of Fitness:</span> Notch Strength lab is redefining fitness. Unlike anything else on the market, it offers real-time form tracking and feedback for strength training, unlocking insights that even elite athletes didn't have before. This is a next-level fitness experience—and no other system does it the way we do.
                  </li>
                  <li className="text-m leading-normal text-gray-700">
                    <span className="text-accent">👾</span> <span className="font-semibold">Notch Pioneer: Empowering Research & Innovation:</span> Notch has enabled countless researchers in universities and industries to study human movement like never before. Our SDK has been integrated into over 50 peer-reviewed studies, including publications in Nature.
                  </li>
                  <li className="text-m leading-normal text-gray-700">
                    <span className="text-accent">👾</span> <span className="font-semibold"><a href="https://site.yoganotch.com/"target="_blank" rel="noopener noreferrer" className="text-link hover:underline">Yoganotch</a>  – Personalized Yoga Coaching:</span> During the pandemic, Yoganotch helped people stay connected through interactive feedback, offering real-time posture correction and guidance. It was more than a product; it was a companion for people practicing yoga alone at home, helping them improve and stay engaged.
                  </li>
                </ul>
              </div>

              <div>
                
                <h3 className="text-2xl font-semibold mb-4">Co-Founder, Heatit (2013)</h3>
                <ul className="list-disc pl-4 space-y-2 mt-4">
                  <p className="text-m leading-normal text-gray-700">Heatit°C is an open-source platform to create projects / fabricate prototypes using dynamic materials that require heat to be activated – such as nitinol, thermochromic inks, solenoids and much much more. Heatit°C is based on the Arduino environment with a modified board to support more output power and is very easy and safe to use.</p>
                  <li className="text-m leading-normal text-gray-700">Developed and successfully funded an open-source electronic textiles project via Kickstarter <a href="https://www.kickstarter.com/projects/1257609237/heatit"target="_blank" rel="noopener noreferrer" className="text-link hover:underline"> Heatit Kickstarter</a></li>
                  <li className="text-m leading-normal text-gray-700">Designed and produced miniaturized heating circuits for interactive textiles</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Data Visualization Engineer (2012-2013)</h3>
                <p className="text-m leading-normal text-gray-700">Worked as a computer engineer and interaction designer with Jer Thorp and his team to develop interactive data-driven storytelling tools. </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Biorobotics Researcher (2009-2010)</h3>
                <p className="text-m leading-normal text-gray-700">At the Tallin Center for Biorobotics, I developed a biologically-inspired robotic fish for my thesis.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Researcher, Kitchen Budapest Media Lab (2008-2009)</h3>
                <p className="text-m leading-normal text-gray-700"> Kitchen Budapest (KiBu) is an innovation lab based in Budapest, Hungary. It was founded in 2007 by a group of media artists, theoreticians and coders. I explored new ways to merge technology with storytelling and interaction design.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8 text-accent">Education</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">New York University, Tisch School of the Arts – ITP MPS (2010-2012)</h3>
                <ul className="list-disc pl-4 space-y-2">
                  <li className="text-m leading-normal text-gray-700">Awarded Dean's Fellowship</li>
                  <li className="text-m leading-normal text-gray-700">Developed interactive textiles showcased at Issey Miyake Tribeca Fashion Store</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Budapest University of Technology and Economics</h3>
                <ul className="list-disc pl-4 space-y-2">
                  <li className="text-m leading-normal text-gray-700">Mechatronics BSc (2006-2010)</li>
                  <li className="text-m leading-normal text-gray-700">Industrial Design Engineering, BSc (2005-2009)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className={`text-3xl font-bold mb-8 text-accent ${spaceGrotesk.className}`}>Sports, Performance & Nutrition</h2>
            <div className="space-y-4">
              <p className="text-m leading-relaxed text-gray-700">
                Movement isn't just a passion—it's central to how I think, work, and design. I've been training Muay Thai for years under Master Thong, practicing weightlifting, yoga, and running, and was a competitive fin swimmer.
              </p>
              <p className="text-m leading-relaxed text-gray-700">
              My approach to training, biomechanics, and recovery is deeply rooted in sports science, performance optimization, and nutrition. Through my work at Notch, I’ve reviewed hundreds of research papers on human movement, and I continuously explore new findings through academic literature, scientific papers, and expert discussions.
              </p>
              <p className="text-m leading-relaxed text-gray-700">
                Nutrition plays a critical role in performance, and I'm always exploring what's next—rethinking how we fuel the body for strength, longevity, and the future of food.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className={`text-3xl font-bold mb-8 text-accent ${spaceGrotesk.className}`}>Exhibitions & Performances</h2>
            <div>
              <ul className="list-disc pl-4 space-y-2 mt-4">
                <li className="text-m leading-normal text-gray-700">SymbiosisO: SIGGRAPH 2012, Los Angeles</li>
                <li className="text-m leading-normal text-gray-700">Symbiosis: Voxel, Tribeca Issey Miyake, New York</li>
                <li className="text-m leading-normal text-gray-700">SymbiosisO: Ambience 2011, Sweden</li>
                <li className="text-m leading-normal text-gray-700">Neurime: Dumbo Arts Festival 2012, New York</li>
                <li className="text-m leading-normal text-gray-700">Gortha: 9th Annual Games for Change Festival 2012</li>
                <li className="text-m leading-normal text-gray-700">Neurime: Nime 2012, Michigan</li>
                <li className="text-m leading-normal text-gray-700">SymbiosisO: TEI2012 - Embedded Soft Material Displays, Canada</li>
                <li className="text-m leading-normal text-gray-700">SymbiosisO: The 4th ACM SIGGRAPH Conference, Hong Kong</li>
                <li className="text-m leading-normal text-gray-700">Festival of Ideas for the New City, New Museum, New York</li>
                <li className="text-m leading-normal text-gray-700">Robarts, ISEA Ruhr, Germany</li>
                <li className="text-m leading-normal text-gray-700">SymbiosisO: ISEA 2010, Finland</li>
                <li className="text-m leading-normal text-gray-700">SymbiosisO: INPUT-OUTPUT Adaptive Materials Symposium, Philadelphia</li>
                <li className="text-m leading-normal text-gray-700">SymbiosisO: Temple University of Art, Philadelphia</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className={`text-3xl font-bold mb-8 text-accent ${spaceGrotesk.className}`}>Awards & Publications</h2>
            <ul className="list-disc pl-4 space-y-2">
              <li className="text-m leading-relaxed text-gray-700">SymbiosisO: SBEOPEN Future Design Award (2nd place) – London Design Festival</li>
              <li className="text-m leading-relaxed text-gray-700">SymbiosisOCore77 Design Award (Runner-up, 2012)</li>
              <li className="text-m leading-relaxed text-gray-700">SymbiosisO: Published in Leonardo - MIT Press Journals & ACM Interactions Magazine</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className={`text-3xl font-bold mb-6 text-accent ${spaceGrotesk.className}`}>Music & Performance</h2>
            <div className="space-y-4">
              <p className="text-m leading-relaxed text-gray-700">
                I have a deep appreciation for rhythm — first in competitive sports, now in music. Recently, I have been focusing on reggae bass and am looking for opportunities to jam and perform. 
              </p>
              <ul className="list-disc pl-4 space-y-2 mt-4">
                <li className="text-m leading-relaxed text-gray-700">Neurime, Cameo Gallery, Brooklyn (2011)</li>
                <li className="text-m leading-relaxed text-gray-700">Neurime, New Interfaces for Musical Expression (NIME), Michigan (2012)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 