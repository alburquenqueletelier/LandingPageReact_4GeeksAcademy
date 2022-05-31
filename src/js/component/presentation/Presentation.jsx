import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export const Presentation = (props) => {
	return (
		<>
			<div className="bg-light border-radius p-4">
				<h1>{props.title}</h1>
				<p>{props.text}</p>
				<Button>{props.buttonText}</Button>
			</div>
		</>
	);
};

Presentation.propsTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	buttonText: PropTypes.string,
};
