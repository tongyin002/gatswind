import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import SEO from "../components/seo";
import LayoutWhite from "../components/LayoutWriting";

export default function NowPage({ data }) {
  return (
    <LayoutWhite>
      <SEO title="Now" description="tyin about" />
      <section className="mx-2/25 flex-1 md:m-px50">
        <div className="hyphens-auto md:max-w-px550 lg:overflow-visible md:hyphens-none">
          <div>
            <h1 className="mt-px20 mb-px30 text-4p5r tracking-npx6 leading-1em text-black font-helvetica md:text-5p75r">
              What I&apos;m Doing Now
            </h1>
            <p className="my-px20">It&apos;s 2020. What a year to be alive.</p>
            <div className="my-px20 lg:w-px650">
              <Img fluid={data.file.childImageSharp.fluid} alt="about"></Img>
            </div>
            <p className="my-px20">
              You only recognize this place if and only if you have been there
              (disclaimer: it&apos;s on Oahu, Hwaii). The cost of reaching to
              the top from the back of the moutain with no stairs on a muddy
              raining day is memorable, not to mention playing hide and seek
              with cops (literally, it&apos;s illegal to be there). For every
              one of us, navigating life with COVID-19 is, for sure, far more
              depressing and exhausting. But we will leap through this, we will
              reach to the top, we will be able to enjoy the view, we will get
              there.
            </p>
            <p className="my-px20">
              There are still a couple of weeks before starting my full time job
              after graduation. With stay at home policy, I&apos;m stuck at
              home. But I will try to not waste a ton of it. A couple of things
              I&apos;m working on: exercising every day, reviewing OS and
              Network materials to pick up C again.
            </p>
            <div className="w-4/5 my-px30 mx-auto border-b border-lightGray" />
            <p className="italic leading-1p6em">
              This page was last updated on{" "}
              <strong className="font-helvetica font-bold">May 18, 2020</strong>{" "}
              from{" "}
              <strong className="font-helvetica font-bold">
                Santa Clara, California
              </strong>
              .
            </p>
          </div>
        </div>
      </section>
    </LayoutWhite>
  );
}

NowPage.propTypes = {
  data: PropTypes.object.isRequired,
};
export const query = graphql`
  query GetNowImage {
    file(relativePath: { eq: "metaInfo/now.jpg" }) {
      childImageSharp {
        fluid(quality: 100, webpQuality: 100, maxWidth: 650) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
