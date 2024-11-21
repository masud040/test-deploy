import CustomLink from "../shared/CustomLink";

export const NavbarLinks = () => {
  return (
    <ul className="flex flex-col items-start justify-center gap-2 md:items-center md:flex-row">
      <CustomLink hrefName="/" title="Home" />
      <CustomLink hrefName="/shop" title="Shop" />
      <CustomLink hrefName="/deals" title="Deals" />
      <CustomLink hrefName="/new-arrival" title="What's New" />
    </ul>
  );
};
