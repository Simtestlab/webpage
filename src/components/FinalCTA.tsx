import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Let's Build the Future of Energy. Together.
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Whether you're developing a new product, scaling your energy infrastructure, or building a more sustainable supply chain, our team is ready to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button size="lg" variant="default" className="text-lg px-8 py-6">
            Schedule a Consultation
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6">
            Explore Our Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
