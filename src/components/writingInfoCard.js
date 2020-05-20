import React from "react";
import PropTypes from "prop-types";

export default function WritingInfoCard({
  title,
  published_at,
  location,
  className,
  type,
}) {
  return (
    <div className={className}>
      <p className="my-px20 text-p8r leading-1p6em md:my-px10 md:text-p65r md:leading-1p4em">
        <strong className="font-helvetica not-italic text-p75r font-bold md:text-p65r">
          {type == "fragments" ? "Fragment" : "Dev-Post"}
        </strong>
        <br />
        {title}
      </p>
      <p className="my-px20 text-p8r leading-1p6em md:my-px10 md:text-p65r md:leading-1p4em">
        <strong className="font-helvetica not-italic text-p75r font-bold md:text-p65r">
          Published
        </strong>
        <br />
        {published_at}
      </p>
      <p className="my-px20 text-p8r leading-1p6em md:my-px10 md:text-p65r md:leading-1p4em">
        <strong className="font-helvetica not-italic text-p75r font-bold md:text-p65r">
          Location
        </strong>
        <br />
        {location}
      </p>
    </div>
  );
}

WritingInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  published_at: PropTypes.string,
  location: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};
