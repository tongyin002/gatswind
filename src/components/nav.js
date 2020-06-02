import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { Menus } from "../utils/constants";

export default function Nav({ sideBarOnMd, bgLight }) {
  return (
    <nav className="inline-block font-helvetica text-p65r font-bold uppercase md:text-p7r">
      <ul>
        {Menus.map((menuItem) => {
          return (
            <li
              key={menuItem.value}
              className={`mx-px5 float-left ${
                sideBarOnMd ? "md:float-none" : ""
              }`}
            >
              <Link
                to={menuItem.link}
                title={menuItem.title}
                className={`border-b-2 ${
                  bgLight
                    ? "border-white hover:border-black"
                    : "border-black hover:border-white"
                }`}
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

Nav.propTypes = {
  sideBarOnMd: PropTypes.bool,
  bgLight: PropTypes.bool,
};
