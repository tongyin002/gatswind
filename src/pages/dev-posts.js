import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import SEO from "../components/seo";
import LayoutWhite from "../components/LayoutWriting";

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
export default function PostsPage({ data }) {
  const groups = data.allMdx.group.slice(0).reverse();

  return (
    <LayoutWhite yearList={creatYearList(groups)}>
      <SEO title="Dev-Posts" description="tyin posts" />
      <section className="mx-2/25 flex-1 md:m-px50">
        <div className="md:max-w-px550">
          <h1 className="mt-px20 mb-px30 text-4p5r tracking-npx6 leading-1em font-helvetica hyphens-auto text-black md:text-5p75r">
            Dev-Posts
          </h1>
          <div className="text-p9r">
            {groups.map((group) => {
              const year = group.fieldValue;
              return (
                <div key={year}>
                  <h2
                    id={year}
                    className="mt-px30 -mb-px10 text-1p5r font-helvetica tracking-npx1"
                  >
                    {year}
                  </h2>
                  <ul className="my-px20">
                    {group.nodes.map((node, index) => {
                      const {
                        title,
                        hook,
                        published_at,
                        hook_image,
                      } = node.frontmatter;
                      const { slug } = node.fields;
                      return (
                        <li key={index} className="mb-px25">
                          {hook_image ? (
                            <Img
                              fixed={hook_image.childImageSharp.fixed}
                              className="rounded-lg mr-px15 mb-px10 float-left"
                            />
                          ) : (
                            <></>
                          )}
                          <div className="leading-1p2em font-helvetica">
                            <Link
                              to={slug}
                              title={title}
                              className="font-bold text-p95r"
                            >
                              {title}
                            </Link>
                            <span className="italic text-lightWhite text-p75r ml-px5">
                              {published_at}
                            </span>
                          </div>
                          <p className="mt-px5 text-p9r leading-1p7em">
                            {hook}
                          </p>
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

PostsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query GetDevPosts {
    allMdx(
      filter: { fields: { type: { eq: "dev-posts" } } }
      sort: { fields: frontmatter___published_at, order: DESC }
    ) {
      group(field: fields___year) {
        nodes {
          frontmatter {
            hook
            published_at(formatString: "MMMM DD YYYY")
            title
            hook_image {
              childImageSharp {
                fixed(webpQuality: 100, quality: 100, width: 65, height: 65) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
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
