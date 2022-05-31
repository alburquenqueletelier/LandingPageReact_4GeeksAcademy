import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavBar } from "./navbar/Navbar.jsx";
import { Presentation } from "./presentation/Presentation.jsx";
import { Cardproyect } from "./card/Cardproyect.jsx";

//create your first component
const Main = () => {
	return (
		<>
			<Container fluid>
				<Row>
					<Col>
						<NavBar />
					</Col>
				</Row>
				<Row>
					<Col className="p-3" bg="light" variant="light">
						<Presentation />
					</Col>
				</Row>
				<Row>
					<Col>
						<Cardproyect />
					</Col>
					<Col>
						<Cardproyect />
					</Col>
					<Col>
						<Cardproyect />
					</Col>
					<Col>
						<Cardproyect />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Main;
