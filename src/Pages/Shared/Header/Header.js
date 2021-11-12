import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../watch-img/logo.png';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar className="container-fluid p-1" sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar className="py-1" ><img alt="" src={logo} width="90" height="50"
                /><span style={{
                    color: 'orange'
                }}><b><h5 className="me-2">Goldex WatchShop</h5></b></span></Navbar>
                <Navbar.Toggle />

                <Navbar.Collapse className="justify-content-end" >
                    <Nav.Link as={HashLink} to="/home"><h5 style={{
                        color: 'orange'
                    }}>Banner</h5></Nav.Link>

                    <Nav.Link as={HashLink} to="/home#products"><h5 style={{
                        color: 'orange'
                    }}>Products</h5></Nav.Link>

                    <Nav.Link as={HashLink} to="/explore"><h5 style={{
                        color: 'orange'
                    }}>Explore Gallary</h5></Nav.Link>

                    <Nav.Link as={HashLink} to="/review"><h5 style={{
                        color: 'orange'
                    }}>Reviews</h5></Nav.Link>

                    <Nav.Link as={HashLink} to="/dashboard"><h5 style={{
                        color: 'orange'
                    }}>Dashboard</h5></Nav.Link>

                    {
                        user?.email ?
                            <Button onClick={logOut} className="px-3 py-1" style={{ backgroundColor: 'orange', color: 'white', borderRadius: '3px' }}><h5><b>Logout</b></h5></Button>
                            :
                            <NavLink style={{ color: 'white', borderRadius: '3px' }} to="/login">
                                <Button className="px-3 py-1" style={{ backgroundColor: 'orange' }}><h5><b>Login</b></h5></Button>
                            </NavLink>
                    }

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
