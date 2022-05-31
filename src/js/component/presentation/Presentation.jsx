import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export const Presentation = (props) => {
	return (
		<>
			<div className="bg-light border-radius p-4">
				<h1>hola</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Atque cumque distinctio esse excepturi facilis, quos
					voluptates architecto qui quis nesciunt minima perspiciatis
					illum quasi nobis nam pariatur natus aut velit.
				</p>
				<Button>Click Me</Button>
			</div>
		</>
	);
};
