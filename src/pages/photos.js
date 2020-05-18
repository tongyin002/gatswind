import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import LayoutBlack from "../components/LayoutIndex";
import SEO from "../components/seo";
import Img from "gatsby-image";

export default function IndexPage({ data }) {
  const photos = data.allFile.nodes;

  return (
    <LayoutBlack>
      <SEO
        title="Photos"
        description="tyin photos"
        classProp="bg-black text-white"
      />
      <section
        id="content-photos"
        className="mt-px40 mb-px20 mx-auto max-w-px1580 md:my-px60"
      >
        <div id="content-photos-inner" className="mx-px20 md:mx-px40">
          <h1 className="mt-px20 mb-px30 text-4p5r font-helvetica font-normal leading-1em tracking-npx6 md:text-5p75r">
            Photos
          </h1>
          <ul>
            <li className="max-w-px1500">
              {photos.map((photo) => {
                const fluid = photo.childImageSharp.fluid;
                return (
                  <Img
                    key={fluid.src}
                    fluid={fluid}
                    className="my-px10 md:my-px20"
                  ></Img>
                );
              })}
            </li>
          </ul>
        </div>
      </section>
    </LayoutBlack>
  );
}

IndexPage.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query GetPhotos {
    allFile(filter: { relativeDirectory: { eq: "photos" } }) {
      nodes {
        childImageSharp {
          fluid(webpQuality: 100, quality: 100, fit: COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
