import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";

const ImageSharp = ({ fluid, alt, caption, className, classNameCaption }) => {
  return (
    <figure className={className}>
      <Img fluid={fluid} alt={alt}></Img>
      <figcaption className={classNameCaption}>{caption}</figcaption>
    </figure>
  );
};

ImageSharp.propTypes = {
  fluid: PropTypes.object.isRequired,
  alt: PropTypes.string,
  caption: PropTypes.string,
  className: PropTypes.string,
  classNameCaption: PropTypes.string,
};

const ImageSrc = ({ src, alt, caption, className, classNameCaption }) => {
  return (
    <figure className={className}>
      <img src={src} alt={alt} />
      <figcaption className={classNameCaption}>{caption}</figcaption>
    </figure>
  );
};

ImageSrc.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  caption: PropTypes.string,
  className: PropTypes.string,
  classNameCaption: PropTypes.string,
};

const VideoSrc = ({ src, caption, className, classNameCaption }) => {
  return (
    <figure className={className}>
      <video controls>
        <source src={src} type="video/mp4" />
      </video>
      <figcaption className={classNameCaption}>{caption}</figcaption>
    </figure>
  );
};

VideoSrc.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string,
  className: PropTypes.string,
  classNameCaption: PropTypes.string,
};
export { ImageSharp, ImageSrc, VideoSrc };
