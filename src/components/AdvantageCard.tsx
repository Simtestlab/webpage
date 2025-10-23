interface AdvantageCardProps {
  title: string;
  description: string;
}

const AdvantageCard = ({ title, description }: AdvantageCardProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default AdvantageCard;
