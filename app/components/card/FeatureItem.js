export const BenefitItem = ({ Icon, title, description }) => {
  return (
    <div className="flex items-start justify-start gap-[16px]">
      <Icon className="text-[32px]" />
      <div className="space-y-2 uppercase">
        <h4 className="font-bold md:font-semibold body-md-title">{title}</h4>
        <p className="caption1">{description}</p>
      </div>
    </div>
  );
};
