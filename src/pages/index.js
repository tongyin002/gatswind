import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import LayoutBlack from "../components/LayoutIndex";
import SEO from "../components/seo";
import WritingGroup from "../components/WritingGroup";
import Img from "gatsby-image";

export default function IndexPage({ data }) {
  const groups = data.allMdx.group;
  const photos = data.allFile.nodes;
  const photo =
    photos[Math.floor(Math.random() * photos.length)].childImageSharp.fluid;

  return (
    <LayoutBlack>
      <SEO
        title="Home"
        description="tyin home"
        classProp="bg-black text-white"
      />
      <section
        id="content"
        className="mx-2/25 max-w-px1920 flex flex-col justify-center text-1p2r leading-1p9em md:flex-row md:mx-0 md:my-px60 md:text-1r md:leading-1p7em"
      >
        <div
          id="text"
          className="md:ml-px80 md:mr-px20 md:max-w-px300 md:flex-shrink"
        >
          <h1 className="my-px15 font-helvetica text-p7r font-bold leading-1p4em uppercase">
            About
          </h1>
          <p className="my-px10 hyphens-auto">
            I&apos;m{" "}
            <a
              href="https://github.com/tongyin002?tab=repositories"
              className="border-b hover:border-black"
            >
              @tongyin002
            </a>
            , an occasional blogger, and a future software engineer at Quip.
          </p>
          <p className="my-px10 hyphens-auto">
            I most often share about web dev processes, web APIs, thoughts on
            readings, product design and many other things.
          </p>
          <div id="writings" className="mx-3/50 md:mx-0">
            {groups.map((group, index) => {
              return (
                <WritingGroup key={index} writings={group.nodes}></WritingGroup>
              );
            })}
          </div>
        </div>
        <div
          id="photo"
          className="md:flex-shrink-3 md:mr-px80 md:ml-px20 md:overflow-hidden md:w-px1150"
        >
          <Img
            fluid={photo}
            alt="cover photo"
            className="my-px20 md:h-px760"
          ></Img>
        </div>
      </section>
    </LayoutBlack>
  );
}

IndexPage.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query GetContent {
    allMdx(sort: { order: DESC, fields: frontmatter___published_at }) {
      group(field: fields___type, limit: 2) {
        nodes {
          fields {
            slug
            type
          }
          frontmatter {
            title
            hook
            published_at(formatString: "MMMM DD YYYY")
          }
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "photos" } }) {
      nodes {
        childImageSharp {
          fluid(
            webpQuality: 100
            quality: 100
            jpegQuality: 100
            pngQuality: 100
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
