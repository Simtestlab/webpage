import SolutionCard from "./SolutionCard";

const Solutions = () => {
  const solutions = [
    {
      number: "01",
      title: "Intelligent Energy Management",
      description: "Control every watt. Our advanced Energy Management Systems (EMS) optimize energy distribution, integrate renewables, and ensure grid stability. From industrial microgrids to smart commercial buildings, we deliver efficiency and resilience.",
      features: [
        "Grid Optimization & Ancillary Services",
        "Renewable Energy Integration (Solar, Wind)",
        "Commercial & Industrial Load Management",
        "Smart Building & Home Energy Automation"
      ]
    },
    {
      number: "02",
      title: "Advanced Battery Intelligence",
      description: "Unlock peak performance and safety at the core. Our cutting-edge Battery Management Systems (BMS) provide high-fidelity monitoring, precision balancing, and predictive diagnostics. We ensure your batteries operate at maximum efficiency and longevity.",
      features: [
        "High-Precision Cell Monitoring & State-of-Charge (SoC)",
        "Active Thermal Management & Safety Protocols",
        "Predictive Analytics for Battery Health (SoH)",
        "Modular BMS for Custom Pack Integration"
      ]
    },
    {
      number: "03",
      title: "Scalable Storage Solutions",
      description: "Power for any scale. We design and deploy robust Battery Energy Storage Systems (BESS) tailored to your needs. From utility-scale systems that stabilize the grid to behind-the-meter solutions for businesses, we build the energy reserves of tomorrow.",
      features: [
        "Utility-Scale Grid Storage",
        "Commercial & Industrial (C&I) Peaker Plant Replacement",
        "Residential & Community Power Solutions",
        "Turnkey EPC (Engineering, Procurement, & Construction)"
      ]
    },
    {
      number: "04",
      title: "Assurance, Integration & Safety",
      description: "Build with confidence. Our world-class testing, validation, and certification services ensure your battery systems meet the highest global standards for safety, performance, and reliability.",
      features: [
        "Global Standards Certification & Compliance (UL, IEC)",
        "Performance & Environmental Stress Testing",
        "Battery Pack Design & Integration Services",
        "Safety & Failure Analysis"
      ]
    },
    {
      number: "05",
      title: "Circular Economy & Sustainability",
      description: "Create value that lasts. We are committed to a zero-waste battery ecosystem. Our services include end-of-life management, sustainable recycling, and innovative second-life applications.",
      features: [
        "High-Yield Critical Material Recovery (Lithium, Cobalt)",
        "Second-Life Battery Repurposing & Re-certification",
        "End-of-Life Logistics & Responsible Disposal",
        "Full Life-Cycle Assessment (LCA) Services"
      ]
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-background" id="solutions">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Our Solutions
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-balance leading-tight">
            A Full-Cycle Partner in 
            <span className="text-primary"> Battery Technology</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We provide integrated solutions that cover the entire battery value chain—from intelligent management to sustainable recycling.
          </p>
        </div>
        <div className="grid gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
