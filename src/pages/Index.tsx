import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Solutions from "@/components/Solutions";
import Advantages from "@/components/Advantages";
import TeamTestimonials from "@/components/TeamTestimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Mission />
        <div id="solutions">
          <Solutions />
        </div>
        <div id="advantages">
          <Advantages />
        </div>
        <TeamTestimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
