import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";
import LayoutWhite from "../components/LayoutWriting";

export default function NowPage() {
  return (
    <LayoutWhite>
      <SEO title="Sitemap" description="tyin sitemap" />
      <section className="mx-2/25 flex-1 md:m-px50">
        <div className="hyphens-auto md:max-w-px550 md:hyphens-none">
          <h1 className="mt-px20 mb-px30 text-4p5r tracking-npx6 leading-1em text-black font-helvetica md:text-5p75r">
            Sitemap
          </h1>
          <div id="sitemap" className="md:grid md:grid-cols-3">
            <div className="mb-px20">
              <h2 className="font-helvetica font-semibold mb-px10 uppercase text-p7r">
                Core
              </h2>
              <ul>
                <li className="mb-px3">
                  <Link
                    to="/about"
                    title="about"
                    className="border-b border-black hover:border-white"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-px3">
                  <Link
                    to="/"
                    title="home"
                    className="border-b border-black hover:border-white"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-px3">
                  <Link
                    to="/now"
                    title="now"
                    className="border-b border-black hover:border-white"
                  >
                    Now
                  </Link>
                </li>
                <li className="mb-px3">
                  <Link
                    to="/sitemap"
                    title="sitemap"
                    className="border-b border-black hover:border-white"
                  >
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-px20">
              <h2 className="font-helvetica font-semibold mb-px10 uppercase text-p7r">
                Writing
              </h2>
              <ul>
                <li className="mb-px3">
                  <Link
                    to="/dev-posts"
                    title="dev-posts"
                    className="border-b border-black hover:border-white"
                  >
                    Dev-Posts
                  </Link>
                </li>
                <li className="mb-px3">
                  <Link
                    to="/fragments"
                    title="fragments"
                    className="border-b border-black hover:border-white"
                  >
                    Fragments
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-px20">
              <h2 className="font-helvetica font-semibold mb-px10 uppercase text-p7r">
                Other
              </h2>
              <ul>
                <li className="mb-px3">
                  <Link
                    to="/photos"
                    title="photos"
                    className="border-b border-black hover:border-white"
                  >
                    Photos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </LayoutWhite>
  );
}
