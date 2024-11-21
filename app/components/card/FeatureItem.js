import Image from "next/image";

export const FeatureItem = ({ Icon, title, description }) => {
  return (
    <div>
      <Image src={Icon} height={30} width={30} alt={title} />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
