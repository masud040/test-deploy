import CustomLink from "../shared/CustomLink";

export const NavbarLinks = () => {
  return (
    <ul className="gap-2 flex-center">
      <CustomLink hrefName="/" title="Home" />
      <CustomLink hrefName="/shop" title="Shop" />
      <CustomLink hrefName="/deals" title="Deals" />
      <CustomLink hrefName="/new-arrival" title="What's New" />
    </ul>
  );
};
