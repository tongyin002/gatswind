import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

export default function WritingGroup({ writings }) {
  const groupTitle = writings[0].fields.type;
  return (
    <>
      <div className="w-4/5 my-px25 mx-auto border-b border-lightBlack" />
      <h1 className="my-px15 font-helvetica text-p7r font-bold leading-1p4em uppercase">
        {groupTitle}
      </h1>
      <ul className="mt-px10 mb-px25">
        {writings.map((writing) => {
          const { title, published_at, hook } = writing.frontmatter;
          const pathTo = writing.fields.slug;

          return (
            <li key={title} className="mb-px25">
              <h2 className="my-px10 leading-1p5em font-helvetica font-bold">
                <Link to={pathTo} title={title}>
                  {title}
                </Link>
              </h2>
              <p className="text-p85r leading-1p7em hyphens-auto">
                {hook}
                <span className="mx-px5 text-p7r text-lightWhite italic">
                  {published_at}
                </span>
              </p>
            </li>
          );
        })}
      </ul>
      <p className="my-px10 hyphens-auto text-p8r text-lightWhite italic">
        <em>
          Older {groupTitle} available{" "}
          <Link
            to={groupTitle == "fragments" ? "/fragments" : "/dev-posts"}
            title={groupTitle == "fragments" ? "fragments" : "dev-posts"}
            className="text-white border-b hover:border-black"
          >
            here
          </Link>
        </em>
      </p>
    </>
  );
}

WritingGroup.propTypes = {
  writings: PropTypes.array.isRequired,
};
