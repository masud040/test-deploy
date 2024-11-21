"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({ hrefName, title }) {
  const pathname = usePathname();
  console.log(pathname === hrefName);
  return (
    <li>
      <Link
        href={hrefName}
        className={`${
          pathname === hrefName ? "text-secondary" : "text-tertiary"
        } nav-link`}
      >
        {title}
      </Link>
    </li>
  );
}
