import { useScrollReveal } from "@/hooks/useScrollReveal";

const Mission = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center space-y-8 mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Our Mission
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance leading-tight">
            Redefining Energy for a 
            <span className="text-primary"> Sustainable Future</span>
          </h2>
        </div>
        
        <div 
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              The world is transitioning to a cleaner, electrified future. At <span className="text-foreground font-semibold">Simtestlab</span>, our mission is to accelerate this shift.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We provide the critical technologies, advanced systems, and life-cycle services that make battery energy safer, more reliable, and more sustainable.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-3 text-sm text-primary font-medium">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                Engineers, scientists & strategists
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-transparent rounded-2xl p-8 flex items-center justify-center hover:from-primary/30 transition-all duration-500 group">
              <div className="text-center space-y-4">
                <div className="text-4xl md:text-5xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-sm text-muted-foreground">Dedicated to unlocking battery potential</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
