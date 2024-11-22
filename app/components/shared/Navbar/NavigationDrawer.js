import { IoClose } from "react-icons/io5";
import { NavbarLinks } from "../../Navbar/NavbarLinks";
import { Logo } from "./Logo";

export default function NavigationDrawer({ showDrawer, handleDrawer }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50  w-60 overflow-x-hidden bg-background-light  p-6 shadow-xl lg:hidden ${
        !showDrawer && "-translate-x-full"
      }  flex h-screen flex-col transition duration-700 ease-in-out`}
    >
      <div>
        <ul className="mb-8 flex-between">
          <Logo />
          <li
            className="rounded-btn-with-inset-shadow"
            onClick={() => handleDrawer(false)}
          >
            <IoClose className="text-primary" />
          </li>
        </ul>

        <NavbarLinks />
      </div>
    </div>
  );
}
