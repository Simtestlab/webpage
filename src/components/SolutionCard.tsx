interface SolutionCardProps {
  number: string;
  title: string;
  description: string;
  features: string[];
}

const SolutionCard = ({ number, title, description, features }: SolutionCardProps) => {
  return (
    <div className="border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 bg-background">
      <div className="flex items-start gap-4 mb-6">
        <span className="text-5xl font-bold text-muted-foreground/30">{number}</span>
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-foreground mt-1">•</span>
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SolutionCard;
