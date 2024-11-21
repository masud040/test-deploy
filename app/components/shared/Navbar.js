import { NavbarLinks } from "../Navbar/NavbarLinks";
import { NavbarRightAction } from "../Navbar/NavbarRightAction";
import { Logo } from "./Logo";

export default function Navbar() {
  return (
    <nav className="bg-[#F5F3FF] px-20 py-[19.5px]">
      <div className="flex-between">
        <Logo />
        <NavbarLinks />
        <NavbarRightAction />
      </div>
    </nav>
  );
}
