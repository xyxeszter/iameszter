import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Heatit() {
  return (
    <div className="min-h-screen bg-background-light text-black">
      <Footer />

      <div className="flex flex-col items-center justify-center text-center px-8 pt-8 pb-32">
        <div className="max-w-3xl text-left space-y-8">
          {/* Header Section */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold mb-12">Heatit°C</h1>
            <h2 className="text-2xl font-semibold mb-4">Open-Source Platform for Dynamic Materials</h2>
            <p className="text-xl leading-normal text-gray-700 font-semibold">
              Bringing heat-activated materials to life
            </p>
          </div>

          {/* YouTube Video */}
          <div className="w-full aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/FuT3hkR3GUk"
              title="Heatit°C Project"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Why We Created It Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8 text-accent">Why We Created It</h2>
            <p className="text-xl leading-normal text-gray-700">
              Many dynamic materials—such as Nitinol (shape-memory alloys), thermochromic inks, solenoids, and soft actuators—require higher power levels than typical prototyping boards can provide. Traditional setups often involve bulky circuits, external power modules, and complex integrations, limiting their use in mobile or embedded applications.
            </p>
            <p className="text-xl leading-normal text-gray-700">
              With Heatit°C, we aimed to create a compact, open-source platform that simplifies the process, making it easier to integrate heat-activated materials into prototypes, interactive projects, and real-world applications.
            </p>
            <p className="text-xl leading-normal text-gray-700">
              Heatit°C was developed in collaboration with Kärt Ojavee and Susan Ngo, combining expertise in textile innovation, interactive design, and material experimentation.
            </p>
          </div>

          {/* How It Works Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8 text-accent">How It Works</h2>
             {/* Main Image Placeholder */}
          <div className="space-y-4">
            <div className="flex justify-start mb-6">
              <Image
                src="/images/heatit/heatit_main.jpg"
                alt="Heatit°C Platform"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
            <p className="text-xl leading-normal text-gray-700">
              Heatit°C is based on the Arduino environment, with a modified board designed to handle higher power outputs safely and efficiently. It supports a range of heating-based materials and actuators, allowing users to prototype kinetic sculptures, shape-changing surfaces, soft robotics, and more—without the usual constraints of external power management.
            </p>
            <ul className="list-disc pl-4 space-y-2 mt-4">
              <li className="text-xl leading-normal text-gray-700">
                <span className="font-semibold">Higher Power Handling</span> – Supports dynamic materials that require more current than standard microcontrollers can provide
              </li>
              <li className="text-xl leading-normal text-gray-700">
                <span className="font-semibold">Compact & Modular</span> – Easily integrated into both static and mobile applications
              </li>
              <li className="text-xl leading-normal text-gray-700">
                <span className="font-semibold">Open-Source & Hackable</span> – Built for makers, researchers, and designers who want to push the boundaries of interactive material design
              </li>
            </ul>
          </div>

          {/* What You Can Make Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8 text-accent">What You Can Make with Heatit°C</h2>
             {/* Main Image Placeholder */}
          <div className="space-y-4">
            <div className="flex justify-start mb-6">
              <Image
                src="/images/heatit/heatit_what.png"
                alt="Heatit°C Platform"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
            <p className="text-xl leading-normal text-gray-700">
              Heatit°C enables a variety of interactive and kinetic designs, including:
            </p>
            <ul className="list-none space-y-2 mt-4">
              <li className="text-xl leading-normal text-gray-700">
                <span className="text-accent">⚡</span> <span className="font-semibold">Shape-Shifting Materials</span> – Nitinol-based actuators for dynamic movement
              </li>
              <li className="text-xl leading-normal text-gray-700">
                <span className="text-accent">⚡</span> <span className="font-semibold">Thermochromic Displays</span> – Textiles and surfaces that change color with heat
              </li>
              <li className="text-xl leading-normal text-gray-700">
                <span className="text-accent">⚡</span> <span className="font-semibold">Soft Robotics</span> – Shape-memory polymers and responsive structures
              </li>
              <li className="text-xl leading-normal text-gray-700">
                <span className="text-accent">⚡</span> <span className="font-semibold">Interactive Wearables</span> – Smart garments that adapt to environmental changes
              </li>
              <li className="text-xl leading-normal text-gray-700">
                <span className="text-accent">⚡</span> <span className="font-semibold">Kinetic Installations</span> – Art and design projects with animated heat-driven elements
              </li>
            </ul>
          </div>

          {/* Kickstarter Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8 text-accent">Kickstarter & Community Support</h2>
             {/* Main Image Placeholder */}
          <div className="space-y-4">
            <div className="flex justify-start mb-6">
              <Image
                src="/images/heatit/heatit_scarf.avif"
                alt="Heatit°C Platform"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
            <p className="text-xl leading-normal text-gray-700">
              Heatit°C launched on Kickstarter, gathering support from a community of makers, engineers, and artists eager to experiment with heat-activated materials. As an open-source project, it invites collaboration, modifications, and creative experimentation.
            </p>
            <p className="text-xl leading-normal text-gray-700">
              Whether you're a designer exploring smart textiles, an engineer building responsive environments, or an artist experimenting with kinetic sculptures, Heatit°C gives you the power to create.
            </p>
            <p className="text-xl leading-normal text-gray-700 mt-8">
              🔗 Check out the Kickstarter campaign here: {" "}
              <a 
                href="https://www.kickstarter.com/projects/1257609237/heatit" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-link hover:underline"
              >
                Kickstarter Page
              </a>
            </p>
          </div>

          {/* Image placeholders - you can add your images here */}
          {/* Example:
          <div className="space-y-4">
            <div className="w-1/2">
              <div className="flex justify-start mb-6">
                <Image
                  src="/images/heatit/detail.jpg"
                  alt="Heatit°C Detail"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>
            <p className="text-s leading-normal text-gray-700">
              Heatit°C board detail
            </p>
          </div>
          */}
        </div>
      </div>

      <Footer />
    </div>
  );
} 