import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";

import SEO from "../components/seo";
import LayoutWhite from "../components/LayoutWriting";

import styles from "../css/fragment.module.css";

const creatYearList = (groups) => {
  return (
    <div className="w-px100 mt-px5 text-right font-helvetica text-p65r leading-1p5em">
      <ul>
        {groups.map((group, index) => (
          <li key={index} className="-mt-px4">
            <a
              href={`#${group.fieldValue}`}
              className="border-b border-white hover:border-black"
            >
              {group.fieldValue}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default function FragmentsPage({ data }) {
  const groups = data.allMdx.group.slice(0).reverse();

  return (
    <LayoutWhite yearList={creatYearList(groups)}>
      <SEO title="Fragments" description="tyin fragments" />
      <section className="mx-2/25 pt-px10 flex-1 md:m-px50">
        <div className="max-w-px700">
          <h1 className="mt-px20 mb-px50 font-helvetica text-3r tracking-npx4 leading-1em hyphens-auto md:text-4r">
            Fragments
          </h1>
          <div
            className={`${styles.fragmentsHeaderSeparator} h-px5 mb-px40 md:mb-px50 md:h-px6`}
          ></div>
          <div className="text-p85r leading-1p6em">
            {groups.map((group) => {
              const year = group.fieldValue;
              return (
                <div key={year}>
                  <h2
                    id={year}
                    className="mt-px35 -mb-px15 text-p9r font-helvetica tracking-npx1 font-bold"
                  >
                    {year}
                  </h2>
                  <ul className="my-px20">
                    {group.nodes.map((node, index) => {
                      const { title, published_at } = node.frontmatter;
                      const { slug } = node.fields;
                      return (
                        <li key={index} className="mb-px9">
                          <div className="leading-1p2em font-helvetica">
                            <Link
                              to={slug}
                              title={title}
                              className="border-b border-black hover:border-white"
                            >
                              {title}
                            </Link>
                            <span className="italic text-lightWhite text-p75r ml-px5">
                              {published_at}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LayoutWhite>
  );
}

FragmentsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query GetFragments {
    allMdx(
      filter: { fields: { type: { eq: "fragments" } } }
      sort: { fields: frontmatter___published_at, order: DESC }
    ) {
      group(field: fields___year) {
        nodes {
          frontmatter {
            published_at(formatString: "MMMM DD YYYY")
            title
          }
          fields {
            slug
          }
        }
        fieldValue
      }
    }
  }
`;
