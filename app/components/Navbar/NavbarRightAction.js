import { IoBagOutline, IoSearch } from "react-icons/io5";
import { SlUser } from "react-icons/sl";
export const NavbarRightAction = () => {
  return (
    <ul className="gap-4 lg:gap-2 flex-center">
      <li>
        <input
          type="text"
          className="hidden p-2 input-field rounded-3xl lg:block"
          placeholder="Search"
        />
      </li>
      <li className="block px-2 py-0 md:py-2 md:hidden">
        <IoSearch className="icon" />
      </li>
      <li className="relative px-2 py-0 md:py-2">
        <IoBagOutline className="icon" />
        <div className="absolute rounded-full -top-[3px] -right-1 size-5 bg-tertiary-dark flex-center">
          <p className="text-xs text-background-light">0</p>
        </div>
      </li>
      <li className="px-2 py-0 md:py-2">
        <SlUser className="icon" />
      </li>
    </ul>
  );
};
