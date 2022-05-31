import React from "react";
import PropTypes from "prop-types";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export const NavBar = (props) => {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand className="" href="#">
						{props.title}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse
						id="responsive-navbar-nav"
						className="justify-content-end">
						<Nav>
							<Nav.Link href="#Home">Home</Nav.Link>
							<Nav.Link eventKey={2} href="#about">
								{props.opt1}
							</Nav.Link>
							<Nav.Link eventKey={3} href="#services">
								{props.opt2}
							</Nav.Link>
							<Nav.Link eventKey={4} href="#contact">
								{props.opt3}
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

NavBar.propsTypes = {
	title: PropTypes.string,
	opt1: PropTypes.string,
	opt2: PropTypes.string,
	opt3: PropTypes.string,
	// url1: PropTypes.string,
	// url2: PropTypes.string,
	// url3: PropTypes.string,
	// url4: PropTypes.string,
};
