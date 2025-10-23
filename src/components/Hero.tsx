import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
          Powering the Next Energy Revolution
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto text-balance">
          We are your end-to-end partner in battery technology—from intelligent management and scalable storage to full-circle sustainability.
        </p>
      </div>
    </section>
  );
};

export default Hero;
