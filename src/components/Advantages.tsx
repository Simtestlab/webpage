import AdvantageCard from "./AdvantageCard";

const Advantages = () => {
  const advantages = [
    {
      title: "End-to-End Expertise",
      description: "From the semiconductor in the BMS to the grid-scale BESS and its end-of-life recycling, we manage the entire technology stack. This holistic view reduces complexity and creates unparalleled value."
    },
    {
      title: "Uncompromising Safety & Reliability",
      description: "Safety is at the center of our design philosophy. Our systems are built on a foundation of rigorous testing and certified compliance, giving you and your customers total peace of mind."
    },
    {
      title: "Bankable, Future-Proof Technology",
      description: "We invest heavily in R&D to stay ahead of the curve. Our modular, scalable platforms are designed to adapt to the next generation of battery chemistries and energy demands."
    },
    {
      title: "A Commitment to Sustainability",
      description: "We believe the energy transition must be sustainable. Our focus on second-life applications and materials recycling ensures we are not just solving today's energy problems, but also protecting tomorrow's resources."
    }
  ];

  return (
    <section className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The Simtestlab Advantage
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={index} {...advantage} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
