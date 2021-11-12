import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Manage Order</Nav.Link>
                        <Nav.Link href="#pricing">My Order</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Make Admin</Nav.Link>
                        <Nav.Link>
                            Payment
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Dashboard;