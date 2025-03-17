import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Template() {
  return (
    <div className="min-h-screen bg-background-light text-black">
      {/* Navigation */}
      <nav className="p-8 flex space-x-6 justify-center">
        <Link href="/" className="text-accent hover:underline">Back to Home</Link>
        <Link href="/projects" className="text-accent hover:underline">Projects</Link>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center px-8 pt-8 pb-32">
        <div className="max-w-3xl text-left space-y-8">
          {/* Header Section */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold mb-12">Project Title</h1>
            <p className="text-xl leading-normal text-gray-700">
              Project introduction and overview. This section should provide a brief description of the project, its goals, and its significance.
            </p>
          </div>

          {/* Image Example */}
          <div className="space-y-4">
            <div className="flex justify-start mb-6">
              <Image
                src="/images/placeholder.jpg"
                alt="Project Image"
                width={200}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
            <p className="text-xl leading-normal text-gray-700">
              Description or caption for the image above. You can explain what the image represents or its significance to the project.
            </p>
          </div>

          {/* Full Width Image Example */}
          <div className="space-y-4">
            <div className="flex justify-start mb-6">
              <Image
                src="/images/placeholder.jpg"
                alt="Full Width Project Image"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <p className="text-xl leading-normal text-gray-700">
              Description for the full-width image. This layout is good for showcasing larger visuals or important project milestones.
            </p>
          </div>

          {/* YouTube Video Embed Example */}
          <div className="space-y-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[450px] rounded-lg"
                src="https://www.youtube.com/embed/PLACEHOLDER_ID"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-xl leading-normal text-gray-700">
              Description or context for the video above. Explain what viewers will learn or see in the video.
            </p>
          </div>

          {/* Text Section Example */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8 text-accent">Section Title</h2>
            <p className="text-xl leading-normal text-gray-700">
              This is an example of a text section. You can use these sections to provide detailed information about different aspects of your project. The text is styled to match the Bio page for consistency.
            </p>
            <ul className="list-disc pl-4 space-y-2 mt-4">
              <li className="text-xl leading-normal text-gray-700">Key point or feature of the project</li>
              <li className="text-xl leading-normal text-gray-700">Another important aspect to highlight</li>
              <li className="text-xl leading-normal text-gray-700">Technical details or specifications</li>
            </ul>
          </div>

          {/* Technical Details Section Example */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8 text-accent">Technical Details</h2>
            <div className="space-y-2">
              <p className="text-xl leading-normal text-gray-700">
                <span className="font-semibold">Technologies Used:</span> List of technologies, tools, or methods used in the project.
              </p>
              <p className="text-xl leading-normal text-gray-700">
                <span className="font-semibold">Development Process:</span> Brief description of how the project was developed.
              </p>
              <p className="text-xl leading-normal text-gray-700">
                <span className="font-semibold">Challenges:</span> Discussion of challenges faced and how they were overcome.
              </p>
            </div>
          </div>

          {/* Links Section Example */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-8 text-accent">Related Links</h2>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://example.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-link hover:underline text-xl"
                >
                  Project Website
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/example" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-link hover:underline text-xl"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <nav className="p-8 flex space-x-6 justify-center">
        <Link href="/" className="text-accent hover:underline">Back to Home</Link>
        <Link href="/projects" className="text-accent hover:underline">Projects</Link>
      </nav>
    </div>
  );
} 