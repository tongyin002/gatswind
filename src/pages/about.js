import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import SEO from "../components/seo";
import LayoutWhite from "../components/LayoutWriting";

export default function AboutPage({ data }) {
  return (
    <LayoutWhite>
      <SEO title="About" description="tyin about" />
      <section className="mx-2/25 flex-1 md:m-px50">
        <div className="hyphens-auto md:max-w-px550 lg:overflow-visible">
          <h1 className="mt-px20 mb-px30 text-4p5r tracking-npx6 leading-1em text-black font-helvetica md:text-5p75r">
            About
          </h1>
          <div className="my-px20 lg:w-px650">
            <Img fluid={data.file.childImageSharp.fluid} alt="about"></Img>
          </div>
          <p className="my-px20">
            I&apos;m a grad student living in Santa Clara, CA. Will be
            an engineer{" "}
            <a
              href="https://quip.com/"
              className=" border-b border-black hover:border-white"
            >
              @Quip
            </a>{" "}
            after I graduate in June.
          </p>
          <p className="my-px20">
            I spent a year at Goldwind, a company specilizes designing and
            building windturbines. I worked on their infrastructure and upgraded
            their CI/CD workflow. I also spent a few months at Blend, a fintech
            startup that builds platform for streamlining lending process. I
            worked on their public API v3. Having just started my developer
            career, I&apos;m eager to learn everything especially building
            robust and pixel detailed systems.
          </p>
          <p className="my-px20">
            I mainly document development and problem solving process in{" "}
            <Link
              to="/dev-posts"
              title="dev-posts"
              className=" border-b border-black hover:border-white"
            >
              DEV-POSTS
            </Link>
            . Where in{" "}
            <Link
              to="/fragments"
              title="fragments"
              className=" border-b border-black hover:border-white"
            >
              FRAGMENTS
            </Link>
            , I share about things I learned and some random thoughts about
            every other thing.
          </p>
          <p className="my-px20">
            My favorite movie and TV series are Hayao Miyazaki&apos;s{" "}
            <em>Spirited Away</em> and Philipp Kadelbach&apos;s{" "}
            <em>Generation War</em>. My favorite book is Keigo Higashino&apos;s{" "}
            <em>トキオ</em>. I also like swimming, music, history, geopolitics
            and NBA.
          </p>
          <h2 className="mt-px30 -mb-px10 text-1p5r tracking-npx1 font-helvetica text-black">
            Technology
          </h2>
          <p className="my-px20">
            This site is a static set of HTML, JS, CSS, and image files built
            using Gatsby.js, Tailwindcss, stored on AWS s3 and served through
            Cloudfront with numerous edge locations around the globe. Deployment
            is managed by Github Actions with a deployment script.
          </p>
          <h2 className="mt-px30 -mb-px10 text-1p5r tracking-npx1 font-helvetica text-black">
            Design
          </h2>
          <p className="my-px20">
            Full credit to{" "}
            <a
              href="https://twitter.com/brandur"
              className=" border-b border-black hover:border-white"
            >
              @brandur
            </a>
            . After luring his site for a long time, I decided to implement it
            from scratch. Just like he said,{" "}
            <a
              href="http://en.wikipedia.org/wiki/Helvetica_(film)"
              className=" border-b border-black hover:border-white"
            >
              Helvetica
            </a>{" "}
            is indeed a timeless beauty.
          </p>
        </div>
      </section>
    </LayoutWhite>
  );
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};
export const query = graphql`
  query GetImage {
    file(relativePath: { eq: "metaInfo/about.jpg" }) {
      childImageSharp {
        fluid(quality: 100, webpQuality: 100, maxWidth: 650) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
