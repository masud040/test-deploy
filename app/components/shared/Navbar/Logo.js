import BlackLogo from "@/public/images/icons/black-logo.png";
import WhiteLogo from "@/public/images/icons/white-logo.png";
import Image from "next/image";
import Link from "next/link";
export const Logo = ({ from }) => {
  // change color depending on where rendered.
  return (
    <Link href="/" className="gap-1 flex-start">
      <Image
        src={from === "footer" ? WhiteLogo : BlackLogo}
        className="h-[18px] md:h-[27px] w-[26px] md:w-[40px]"
        alt="Logo"
      />

      <div className="body-bold-md-heading4-bold">
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
    </Link>
  );
};
