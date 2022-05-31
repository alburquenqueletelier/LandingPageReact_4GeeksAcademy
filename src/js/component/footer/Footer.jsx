import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";

export const Footer = (props) => {
	return (
		<footer className="bg-dark text-light text-center pt-3">
			{props.text}
		</footer>
	);
};

Footer.propTypes = {
	text: PropTypes.string,
};
