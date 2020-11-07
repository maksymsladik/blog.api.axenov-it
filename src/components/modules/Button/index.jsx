import React from "react";
import PropTypes from "prop-types";
import LinkRoute from "./component/LinkRoute";
import Btn from "./component/Btn";

function Button({ type, href, onClick, title, className, styles }) {
  switch (type) {
    case "linkRoute":
      return <LinkRoute href={href} title={title} className={className} />;

    default:
      return (
        <Btn
          onClick={onClick}
          title={title}
          className={className}
          styles={styles}
        />
      );
  }
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  styles: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
