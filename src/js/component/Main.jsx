import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavBar } from "./navbar/Navbar.jsx";
import { Presentation } from "./presentation/Presentation.jsx";
import { Cardproyect } from "./card/Cardproyect.jsx";
import { Footer } from "./footer/Footer.jsx";

//create your first component
const Main = () => {
	return (
		<>
			<Container fluid>
				<Row>
					<Col>
						<NavBar
							title="Start Bootstrap"
							opt1="Home"
							opt2="About"
							opt3="Contact"
						/>
					</Col>
				</Row>
				<Row>
					<Col className="p-3" bg="light" variant="light">
						<Presentation
							title="Mi primera pagina con Reac"
							text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora blanditiis ullam quisquam laudantium soluta porro ipsam totam saepe similique illum deserunt consectetur a commodi, impedit aliquam perspiciatis ab. Explicabo."
							buttonText="Click Me!"
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<Cardproyect
							title="Card Title"
							imgSource="#"
							text="Probando una carta de Bootstrap con React"
							buttonText="High 5!"
						/>
					</Col>
					<Col>
						<Cardproyect
							title="Card Title"
							imgSource="#"
							text="Probando una carta de Bootstrap con React"
							buttonText="High 5!"
						/>
					</Col>
					<Col>
						<Cardproyect
							title="Card Title"
							imgSource="#"
							text="Probando una carta de Bootstrap con React"
							buttonText="High 5!"
						/>
					</Col>
					<Col>
						<Cardproyect
							title="Card Title"
							imgSource="#"
							text="Probando una carta de Bootstrap con React"
							buttonText="High 5!"
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<Footer text="CopyRight © Your Website 2022" />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Main;
