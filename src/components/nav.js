import React from "react";
import { Link } from "gatsby";

const Menus = [
  {
    value: "△",
    title: "Home",
    link: "/",
  },
  {
    value: "Dev-Posts",
    title: "Longfrom articles",
    link: "/dev-posts",
  },
  {
    value: "Fragments",
    title: "Fragments (short articles)",
    link: "/fragments",
  },
  {
    value: "Photos",
    title: "Photography",
    link: "/photos",
  },
  {
    value: "Now",
    title: "What I'm doing now",
    link: "/now",
  },
  {
    value: "About",
    title: "About me &amp; this site",
    link: "/about",
  },
  {
    value: "☰",
    title: "Sitemap",
    link: "/sitemap",
  },
];

export default function Nav() {
  return (
    <nav className="inline-block font-helvetica text-p65r font-bold uppercase">
      <ul>
        {Menus.map((menuItem) => {
          return (
            <li key={menuItem.value} className={`mx-px5 float-left`}>
              <Link
                to={menuItem.link}
                title={menuItem.title}
                className="border-b-2 border-black hover:border-white"
              >
                {menuItem.value}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
