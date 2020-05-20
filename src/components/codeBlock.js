import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import PropTypes from "prop-types";
import theme from "prism-react-renderer/themes/github";

export default function CodeBlock({ children, classNamePre, classNameDiv }) {
  const classNameCode = children.props.className || "";
  const matches = classNameCode.match(/language-(?<lang>.*)/);
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.props.children.trim()}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ""
      }
    >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} ${classNamePre}`}>
          <div className={classNameDiv}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </div>
        </pre>
      )}
    </Highlight>
  );
}

CodeBlock.propTypes = {
  children: PropTypes.node,
  classNamePre: PropTypes.string,
  classNameDiv: PropTypes.string,
};
