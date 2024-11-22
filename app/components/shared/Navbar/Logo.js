import LogoPhoto from "@/public/images/icons/logo.png";
import Image from "next/image";
export const Logo = ({ from }) => {
  // change color depending on where rendered.
  return (
    <div className="gap-1 flex-start">
      <Image
        src={LogoPhoto}
        className="h-[18px] md:h-[27px] w-[26px] md:w-[40px]"
        alt="Logo"
      />

      <div className="h4-bold-lg-h1-bold">
        <span
          className={`${
            from === "footer" ? "text-background-light" : "text-background-dark"
          }`}
        >
          We
        </span>
        <span className="text-primary-medium">5</span>
        <span
          className={`${
            from === "footer" ? "text-background-light" : "text-background-dark"
          }`}
        >
          ive
        </span>
      </div>
    </div>
  );
};
