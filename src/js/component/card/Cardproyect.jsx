import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

export const Cardproyect = (props) => {
	return (
		<>
			<Card className="text-center" style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					src="holder.js/100px180?text=Image cap"
				/>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button>Find Out More</Button>
				</Card.Footer>
			</Card>
		</>
	);
};
