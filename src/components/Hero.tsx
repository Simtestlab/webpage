import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden" id="hero">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/ev-charging-bg.jpg')`
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="relative max-w-7xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-balance leading-tight text-white">
            Powering the Next
            <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Energy Revolution
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto text-balance leading-relaxed">
            Your end-to-end partner in battery technology—from intelligent management and scalable storage to full-circle sustainability.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold" href="#mission">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;