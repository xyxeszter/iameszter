import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light text-black text-center font-space-grotesk">
      <Footer />

      <div className="flex flex-col items-center justify-center py-32">
        <div className="w-full max-w-[600px] px-4 mb-8">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full pointer-events-none"
          >
            <source src="/videos/eszter_with_birds.mov" type="video/quicktime" />
            <source src="/videos/eszter_with_birds.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h1 className="text-5xl font-bold mb-8">
          <span className="text-black">Eszter Ozsvald</span>
        </h1>
        <div className="max-w-2xl mx-auto space-y-2">
          <p className="text-xl text-black leading-relaxed">
            AI wearables, motion tracking, and biomechanics—building the future of sports tech and human performance.
            As an entrepreneur and product designer, I work at the intersection of innovation, technology, and movement, leading projects like Notch, reactive textiles, and robotic motion tracking.
          </p>
        </div>
      </div>
    </div>
  );
}
