import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
//import Img from "gatsby-image";

import SEO from "../components/seo";
import LayoutWhite from "../components/LayoutWriting";
import { ImageSharp, ImageSrc } from "../components/figure";

const createToc = (items, depth) => {
  if (items) {
    return (
      <ol
        className={`my-px5 ${depth % 2 == 0 ? "list-decimal" : "list-loalpha"}`}
      >
        {items.map((item) => {
          return (
            <li key={item.title} className="my-px8 ml-px16 pl-px10">
              <a
                href={item.url}
                className={`border-b ${
                  depth % 2 == 0 ? "border-black" : ""
                } hover:border-white`}
              >
                {item.title}
              </a>
              {createToc(item.items, depth + 1)}
            </li>
          );
        })}
      </ol>
    );
  } else {
    return;
  }
};

/* eslint-disable react/display-name */
const components = {
  p: (props) => (
    <p {...props} className="my-px20 text-1r leading-1p7em hyphens-auto" />
  ),
  h2: (props) => (
    <h2
      {...props}
      className="mt-px30 -mb-px10 text-1p5r tracking-npx1 font-helvetica hyphens-auto text-black"
    ></h2>
  ),
  h3: (props) => (
    <h3
      {...props}
      className="mt-px30 -mb-px15 text-1p1r tracking-npx1 font-helvetica font-semibold hyphens-auto text-black"
    ></h3>
  ),
  ul: (props) => <ul {...props} className="my-px25 list-disc"></ul>,
  ol: (props) => <ol {...props} className="my-px25 list-decimal"></ol>,
  li: (props) => (
    <li
      {...props}
      className="ml-px40 pl-px5 mb-px10 text-1r leading-1p7em"
    ></li>
  ),
  strong: (props) => (
    <strong {...props} className="font-helvetica text-p95r font-bold"></strong>
  ),
};
/* eslint-enable react/display-name */

export default function DevPostTemplate({ data: { mdx } }) {
  const { title, images } = mdx.frontmatter;

  const imgs = {};
  if (images) {
    images.forEach((image, index) => {
      const { childImageSharp, publicURL, name } = image;

      // eslint-disable-next-line react/display-name, react/prop-types
      imgs[`Img${index + 1}`] = ({ caption }) =>
        childImageSharp ? (
          <ImageSharp
            fluid={childImageSharp.fluid}
            alt={name}
            caption={caption}
            className="my-px40"
            classNameCaption="pt-px12 text-center text-p85r italic leading-1p5em"
          />
        ) : (
          <ImageSrc
            src={publicURL}
            alt={name}
            caption={caption}
            className="my-px40"
            classNameCaption="pt-px12 text-center text-p85r italic leading-1p5em"
          />
        );
    });
  }

  return (
    <LayoutWhite>
      <SEO title="Dev-Post" description="tyin dev-post" />
      <section className="mx-2/25 flex-1">
        <div className="max-w-px1000">
          <h1 className="mt-px20 mb-px40 pb-px40 text-4p5r leading-1em tracking-npx6 hyphens-auto text-black border-b-8 border-black">
            {title}
          </h1>
        </div>
        <div className="max-w-px680">
          {mdx.tableOfContents.items ? (
            <>
              <div className="text-p65r font-helvetica leading-1p5em">
                <h2 className="my-px10 text-p7r tracking-npxp5 text-black font-bold uppercase">
                  Contents
                </h2>
                {createToc(mdx.tableOfContents.items, 0)}
              </div>
              <div className="w-4/5 my-px30 mx-auto border-b border-lightGray" />
            </>
          ) : (
            <></>
          )}
          <MDXProvider components={components}>
            <MDXRenderer imgs={imgs}>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
      </section>
    </LayoutWhite>
  );
}

DevPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      tableOfContents
      frontmatter {
        title
        published_at(formatString: "MMMM DD YYYY")
        location
        images {
          name
          publicURL
          childImageSharp {
            fluid(webpQuality: 100, quality: 100, maxWidth: 650) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
