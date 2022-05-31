import React from "react";
import PropTypes from "prop-types";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export const NavBar = (props) => {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand className="" href="#">
						React-Bootstrap
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse
						id="responsive-navbar-nav"
						className="justify-content-end">
						<Nav>
							<Nav.Link href="#Home">Home</Nav.Link>
							<Nav.Link eventKey={2} href="#about">
								About
							</Nav.Link>
							<Nav.Link eventKey={3} href="#services">
								Services
							</Nav.Link>
							<Nav.Link eventKey={4} href="#contact">
								Contact
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};
