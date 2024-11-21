import { IoBagOutline } from "react-icons/io5";
import { SlUser } from "react-icons/sl";
export const NavbarRightAction = () => {
  return (
    <ul className="gap-2 flex-center">
      <li className="p-2">
        <input
          type="text"
          className="input-field p-2.5 rounded-3xl"
          placeholder="Search"
        />
      </li>
      <li className="relative p-2">
        <IoBagOutline className="size-6 text-tertiary-dark" />
        <div className="absolute top-0 rounded-full -right-1 size-5 bg-tertiary-dark flex-center">
          <p className="text-xs text-background-light">0</p>
        </div>
      </li>
      <li className="p-2">
        <SlUser className="size-6 text-tertiary-dark" />
      </li>
    </ul>
  );
};
