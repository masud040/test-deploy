export const Logo = ({ from }) => {
  // change color depending on where rendered.
  return (
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
  );
};
