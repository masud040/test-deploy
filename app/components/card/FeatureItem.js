export const FeatureItem = ({ Icon, title, description }) => {
  return (
    <div className="flex items-start justify-start gap-[16px]">
      <Icon className="text-[32px]" />
      <div className="space-y-2 uppercase">
        <h4 className="font-bold md:font-semibold h4-h3-lg-h2">{title}</h4>
        <p className="text-[13px] leading-[16.9px]">{description}</p>
      </div>
    </div>
  );
};