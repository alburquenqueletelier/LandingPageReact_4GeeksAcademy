import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

export const Cardproyect = (props) => {
	return (
		<>
			<Card className="text-center" style={{ width: "18rem" }}>
				<Card.Img variant="top" src={props.imgSource} />
				<Card.Body>
					<Card.Title>{props.title}</Card.Title>
					<Card.Text>{props.text}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button>{props.buttonText}</Button>
				</Card.Footer>
			</Card>
		</>
	);
};

Cardproyect.propTypes = {
	title: PropTypes.string,
	imgSource: PropTypes.string,
	text: PropTypes.string,
	buttonText: PropTypes.string,
};
