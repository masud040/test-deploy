import Facebook from "@/public/images/icons/Facebook.png";
import Linkedin from "@/public/images/icons/Linkedin.png";
import Twitter from "@/public/images/icons/Twitter.png";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "../Navbar/Logo";
export const FooterContainer = () => {
  return (
    <footer className="px-4 py-6 space-y-12 lg:py-12 bg-background-dark lg:px-20 text-background-light">
      <div className="flex flex-col items-start justify-center gap-6 lg:gap-20 md:flex-row md:items-center">
        <div className="flex-1 space-y-3 md:space-y-6">
          <Logo from="footer" />
          <p className="footer-paragraph-text ">
            Saepe quo suscipit vitae quia. Requdiandae nobis quis. Laboriosam
            unde quae qui quasi mollitia tenetur. Bicta explicabo est
            consectetur maxime quos fugit velit assumenda est.{" "}
          </p>
        </div>
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <h3 className="capitalize title-bold md:heading5-bold">
              Sign Up For Our Newseltter!
            </h3>
            <p className="footer-paragraph-text">
              Get nofied about updates and be the first to get early access to
              new Podcast episode.
            </p>
          </div>
          <div className="max-w-xl flex-center">
            <input type="text" className="p-2 rounded-s-lg input-field" />
            <button className="px-6 py-[9px] transition duration-500 ease-in-out text-background-light bg-primary-dark rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="grid items-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 footer-paragraph-text">
        <div>
          <p className="font-bold">Contact Us</p>
          <p>support@we5iv.com</p>
        </div>
        <div>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div>
          <p>Privacy policy</p>
          <p>Terms $ Condition</p>
        </div>
        <div className="space-y-2">
          <p className="font-bold">Social Link</p>
          <div className="gap-2 flex-start">
            <Link href="#">
              <Image src={Facebook} width={25} height={25} alt="Facebook" />
            </Link>
            <Link href="#">
              <Image src={Twitter} width={25} height={25} alt="Twitter" />
            </Link>
            <Link href="#">
              <Image src={Linkedin} width={25} height={25} alt="Linkedin" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
