import Link from "next/link";

const Breadcrumb = ({ nameWithPath, name1 }) => {
  return (
    <div className="gap-1 py-4 flex-start">
      {nameWithPath?.name && (
        <>
          <Link href={nameWithPath?.path}>
            <p className="body-semibold">{nameWithPath?.name}</p>
          </Link>
        </>
      )}
      /
      {name1 && (
        <>
          <p className="body-semibold text-primary-dark">{name1}</p>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
