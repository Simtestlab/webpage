interface TeamMemberProps {
  name: string;
  designation: string;
  description: string;
  image: string;
}

const TeamMember = ({ name, designation, description, image }: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-background rounded-lg shadow-sm border border-border max-w-sm mx-auto">
      <div className="mb-6">
        <img
          src={image}
          alt={`${name} - ${designation}`}
          className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-primary font-medium mb-4">{designation}</p>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};

export default TeamMember;