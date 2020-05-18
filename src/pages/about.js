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
            I&apos;m a grad student living in Santa Clara, CA. who is about to
            graduate soon. Will hopefully be an engineer{" "}
            <a
              href="https://quip.com/"
              className=" border-b border-black hover:border-white"
            >
              @Quip
            </a>
            . ( if I can get my EAD card on time : ) )
          </p>
          <p className="my-px20">
            I spent a year at Goldwind, a company specilizes designing and
            building windturbines, working on their infrastructure, upgrading
            CI/CD workflow. Spent a few months at Blend, a fintech startup that
            builds platform for streamlining lending process. Worked on their
            public API v3. Having just started my developer career, I&apos;m
            eager to learn everything especially building robust and pixel
            detailed systems.
          </p>
          <p className="my-px20">
            I mainly document development and problm solving process in{" "}
            <Link
              to="/dev-posts"
              className=" border-b border-black hover:border-white"
            >
              DEV-POSTS
            </Link>
            . Where in{" "}
            <Link
              to="/fragments"
              className=" border-b border-black hover:border-white"
            >
              FRAGMENTS
            </Link>
            , I share about things I learned and interesting thoughts about
            everything.
          </p>
          <p className="my-px20">
            My favorite movie and TV series are Hayao Miyazaki&apos;s{" "}
            <em>Spirited Away</em> and Philipp Kadelbach&apos;s{" "}
            <em>Generation War</em>. My favorite book is Keigo Higashino&apos;s{" "}
            <em>トキオ</em>. I also like swimming, music, history, politics and
            NBA.
          </p>
          <h2 className="mt-px30 -mb-px10 text-1p5r tracking-npx1 font-helvetica text-black">
            Technology
          </h2>
          <p className="my-px20">
            This site is a static set of HTML, JS, CSS, and image files built
            using Gatsby.js, Tailwindcss, stored on AWS amplify. I don&apos;t
            plan to use any CI as amplify can automate deployment from the repo
            plus it doesn&apos;t need any tests to pass considering it is a
            static site.
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
