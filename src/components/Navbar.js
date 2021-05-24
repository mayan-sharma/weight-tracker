import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

export default function Menu({ handleSignOut }) {

    const styles = { color: '#fff'};

    return (
        <Navbar collapseOnSelect expand="sm" fixed="top" bg="primary" variant="dark" className="shadow justify-content-between">
            <Navbar.Brand>Weight Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link onClick={handleSignOut} style={styles}>Sign Out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}