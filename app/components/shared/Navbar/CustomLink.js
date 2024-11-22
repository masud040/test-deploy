"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({ hrefName, title }) {
  const pathname = usePathname();
  const firstPath = `/${pathname?.split("/")[1]}`;

  return (
    <li>
      <Link
        href={hrefName}
        className={`${
          firstPath === hrefName ? "text-secondary" : "text-tertiary"
        } nav-link`}
      >
        {title}
      </Link>
    </li>
  );
}
