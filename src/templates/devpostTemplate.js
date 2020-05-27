import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import SEO from "../components/seo";
import LayoutWhite from "../components/LayoutWriting";
import { ImageSharp, ImageSrc, VideoSrc } from "../components/figure";
import CodeBlock from "../components/codeBlock";
import WritingInfoCard from "../components/writingInfoCard";

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

const createFnDef = (node, i) => {
  if (node && node.props && node.props.children) {
    const children = node.props.children;

    if (node.props.mdxType == "ol") {
      return (
        <ol key={i} className="list-none">
          {children.length > 1
            ? children.map((child, index) => {
                return createFnDef(child, index);
              })
            : createFnDef(children, 1)}
        </ol>
      );
    } else if (node.props.mdxType == "li") {
      return (
        <li
          key={i}
          id={node.props.id}
          className="text-p8r leading-1p6em my-px20 md:text-p85r"
        >
          <sup
            key={node.props.id}
            className="cursor-pointer text-p85r border-b border-black hover:border-white"
          >
            <a href={`#fnref-${node.props.id.slice(3)}`}>
              {node.props.id.slice(3)}
            </a>
          </sup>{" "}
          {children.length > 1
            ? children.map((child, index) => {
                return createFnDef(child, index);
              })
            : createFnDef(children, 1)}
        </li>
      );
    } else if (node.props.mdxType == "inlineCode") {
      return (
        <code key={i} className="bg-codeBg text-p65r py-px2 px-px4 font-monoca">
          {children}
        </code>
      );
    } else if (node.props.mdxType == "a" && node.props.href.startsWith("#fn")) {
      return;
    } else {
      return node;
    }
  } else {
    return node;
  }
};

/* eslint-disable react/display-name */
const components = {
  p: (props) => (
    <p
      {...props}
      className="my-px20 text-1r leading-1p7em hyphens-auto md:text-1p04r md:leading-1p75em"
    />
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
      className="ml-px40 pl-px5 mb-px10 text-1r leading-1p7em md:text-1p04r md:leading-1p75em"
    ></li>
  ),
  strong: (props) => (
    <strong {...props} className="font-helvetica text-p95r font-bold"></strong>
  ),
  a: (props) => (
    <a {...props} className="border-b border-black hover:border-white"></a>
  ),
  inlineCode: (props) => (
    <code
      {...props}
      className="bg-codeBg text-p8r py-px2 px-px4 font-monoca"
    ></code>
  ),
  pre: (props) => (
    <CodeBlock
      {...props}
      classNamePre="bg-codeBg font-monoca text-p75r leading-1p4em p-px25 lg:w-px650"
      classNameDiv="p-p5em overflow-auto"
    ></CodeBlock>
  ),
  // eslint-disable-next-line react/prop-types
  wrapper: ({ children }) => {
    // updatedChildren becomes our new list of children, including any modifications
    // eslint-disable-next-line react/prop-types
    const updatedChildren = children.map((child, index) => {
      if (child.props.className === "footnotes") {
        // Since we only have one element that will ever match this
        // the key doesn't matter, but react will yell without a key.
        return (
          <div key={index} className="footnotes my-px30 mx-auto w-9/10">
            {child.props.children.length > 1
              ? child.props.children.map((child, i) => createFnDef(child, i))
              : createFnDef(child.props.children, 1)}
          </div>
        );
      }
      return child;
    });
    return <>{updatedChildren}</>;
  },
};
/* eslint-enable react/display-name */

export default function DevPostTemplate({ data: { mdx } }) {
  const { title, images, PR, videos } = mdx.frontmatter;

  const imgs = {};
  if (images) {
    images.forEach((image, index) => {
      const { childImageSharp, publicURL, name } = image;
      const className = "my-px40 lg:relative lg:w-px650";
      const classNameCaption =
        "pt-px12 text-center text-p85r italic leading-1p5em lg:absolute lg:w-px100 lg:text-right lg:left-npx120 lg:top-0";
      // eslint-disable-next-line react/display-name, react/prop-types
      imgs[`Img${index + 1}`] = ({ caption }) =>
        childImageSharp ? (
          <ImageSharp
            fluid={childImageSharp.fluid}
            alt={name}
            caption={caption}
            className={className}
            classNameCaption={classNameCaption}
          />
        ) : (
          <ImageSrc
            src={publicURL}
            alt={name}
            caption={caption}
            className={className}
            classNameCaption={classNameCaption}
          />
        );
    });
  }

  const vids = {};
  if (videos) {
    videos.forEach((video, index) => {
      const { publicURL } = video;
      const className = "my-px40 lg:relative lg:w-px650";
      const classNameCaption =
        "pt-px12 text-center text-p85r italic leading-1p5em lg:absolute lg:w-px100 lg:text-right lg:left-npx120 lg:top-0";
      // eslint-disable-next-line react/display-name, react/prop-types
      vids[`Vid${index + 1}`] = ({ caption }) => (
        <VideoSrc
          src={publicURL}
          caption={caption}
          className={className}
          classNameCaption={classNameCaption}
        ></VideoSrc>
      );
    });
  }

  const infoCard = (
    <>
      <div className="hidden md:block md:w-4/5 md:my-px25 md:mx-auto md:border-b md:border-lightGray" />
      <WritingInfoCard
        {...mdx.frontmatter}
        className="hidden md:block md:text-right md:text-p65r md:leading-1p4em md:mr-px5"
      ></WritingInfoCard>
    </>
  );

  return (
    <LayoutWhite writingInfo={infoCard}>
      <SEO title="Dev-Post" description="tyin dev-post" />
      <section className="mx-2/25 flex-1 md:m-px50">
        <div className="max-w-px1000">
          <h1 className="mt-px20 mb-px40 pb-px40 text-4p5r leading-1em tracking-npx6 hyphens-auto text-black border-b-8 border-black md:mb-px50 md:pb-px50 md:border-b-10 md:text-5p75r md:hyphens-none lg:mb-px50 lg:pb-px50">
            {title}
          </h1>
        </div>
        <div className="max-w-px680">
          {mdx.tableOfContents.items ? (
            <div className="md:float-right md:ml-px30 md:w-px200">
              <div className="text-p65r font-helvetica leading-1p5em">
                <h2 className="my-px10 text-p7r tracking-npxp5 text-black font-bold uppercase">
                  Contents
                </h2>
                {createToc(mdx.tableOfContents.items, 0)}
              </div>
              <div className="w-4/5 my-px30 mx-auto border-b border-lightGray" />
            </div>
          ) : (
            <></>
          )}
          <MDXProvider components={components}>
            <div className="md:max-w-px550 lg:overflow-visible">
              <MDXRenderer imgs={imgs} vids={vids}>
                {mdx.body}
              </MDXRenderer>
              <div className="w-4/5 my-px25 mx-auto border-b border-lightGray" />
            </div>
          </MDXProvider>
          <WritingInfoCard
            {...mdx.frontmatter}
            className="leading-1p6em italic text-left md:hidden"
          ></WritingInfoCard>
          <p className="italic text-p8r leading-1p6em md:text-p85r">
            Did I make a mistake? Please consider{" "}
            <a href={PR} className="border-b border-black hover:border-white">
              sending a pull request
            </a>
            .
          </p>
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
        PR
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
