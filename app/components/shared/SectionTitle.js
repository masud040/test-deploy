export const SectionTitle = ({ sectionLabel, sectionTitle }) => {
  return (
    <div className="my-6 space-y-1 text-start">
      <p className="font-normal uppercase h4-h3-lg-h2 text-primary-medium">
        {sectionLabel}
      </p>
      <h1 className="text-[23px] leading-[29.9px] lg:text-[28px] lg:leading-[36.4px] capitalize font-bold text-background-dark">
        {sectionTitle}
      </h1>
    </div>
  );
};
