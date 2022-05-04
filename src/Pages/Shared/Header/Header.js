import React, { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../watch-img/logo-main.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();

// change nav colour when scrolling
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 65) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor);

    // navbar-scroll
    // let navArea = document.querySelector('.nav-area');

    // window.onscroll = () => {
    //     if (window.scrollY >= 400) {
    //         navArea.classList.add("navbar-scroll")
    //     }
    //     else {
    //         navArea.classList.remove("navbar-scroll")
    //     }
    // }
    return (
        <div className={color? 'nav-area nav-scroll' : 'nav-area'}>
            <nav  id="navbar_top">
                <div className="navbar navbar-expand-lg menu-style">
                    <div className="container">
                        <a className="navbar-brand logo-style fs-3" href="#home"><img className='logo-img' width="40" height="25" src={logo} alt="" /><span>
                            Goldex Watch</span> </a>

                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="toggler-icon top-bar"></span>
                            <span className="toggler-icon middle-bar"></span>
                            <span className="toggler-icon bottom-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse position-relative" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                                <li className="active ms-3">
                                    <Nav.Link as={HashLink} className="nav-link" to="/home#banner">Banner</Nav.Link>
                                </li>

                                <li className="ms-3">
                                    <Nav.Link as={HashLink} className="nav-link" to="/home#products">Products</Nav.Link>
                                </li>

                                <li className="ms-3">
                                    <Nav.Link as={HashLink} className="nav-link" to="/explore">Gallary</Nav.Link>
                                </li>

                                <li className="ms-3">
                                    <Nav.Link as={HashLink} className="nav-link" to="/review#review">Reviews</Nav.Link>
                                </li>

                                <li className="ms-3">
                                    <Nav.Link as={HashLink} to="#login">{user?.displayName}</Nav.Link>
                                </li>
                                {
                                    user?.email ?
                                        <div>
                                            <div className="row">
                                                <div className="col-md-6 py-1">
                                                    <Nav.Link as={HashLink} to="/dashboard" ><h5 className='ms-3' style={{
                                                        color: 'white'
                                                    }}>Dashboard</h5></Nav.Link>
                                                </div>

                                                <div className="col-md-6"><Nav.Link>
                                                    <Button onClick={logOut} className="  border-0 ms-3 logOut-btn pb-0"><h5 >Logout</h5></Button>
                                                </Nav.Link></div>
                                            </div>
                                        </div>
                                        :
                                        <li className='mt-2 ms-3 ms-md-0'>
                                            <NavLink style={{ color: 'white', textDecoration: 'none' }} to="/login">Login

                                            </NavLink>
                                        </li>
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;

