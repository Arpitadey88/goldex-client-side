import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Dashboard = () => {
    // let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth();
    return (
        <div className='mt-5 pt-4 rounded-3'>
            <Navbar>
                <Container style={{
                    backgroundColor: 'aliceBlue'
                }}>
                    <Navbar.Brand style={{
                        color: '#1E3163'
                    }} href="#home"><h4><b>DashBoard</b></h4></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="#login"><h5 style={{
                            color: '#1E3163', fontWeight: 'bold'
                        }}>{user?.displayName}</h5></Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <div className=" row rounded-3">
                    <div style={{
                        backgroundColor: 'aliceBlue'
                    }} className="col-md-3 col-sm-2">
                        <Link style={{ textDecoration: "none", color: '#1E3163' }} to={"/dashboard"}><h5 className='ms-md-2 pt-4 pb-3'>Dashboard</h5></Link>
                        <hr />
                        {
                            admin ? <div>
                                <Link style={{ textDecoration: "none", color: '#1E3163'}} to={`/dashboard/manageOrder`}><h5 className='ms-md-2 py-3'>Manage All Order</h5></Link>
                                <hr />
                                <Link style={{ textDecoration: "none", color: '#1E3163' }} to={`/dashboard/addProduct`}><h5 className='ms-md-2 py-3'>Add New Product</h5></Link>
                                <hr />
                                <Link style={{ textDecoration: "none" , color: '#1E3163'}} to={`/dashboard/manageProducts`}><h5 className='ms-md-2 py-3'>Manage Products</h5></Link>
                                <hr />
                                <Link style={{ textDecoration: "none", color: '#1E3163' }} to={`/dashboard/makeAdmin`}><h5 className='ms-md-2 py-3'>Make Admin</h5></Link>
                                <hr />
                            </div>
                                :
                                <div>
                                    <Link style={{ textDecoration: "none", color: '#1E3163' }} to={`/dashboard/myOrder`}><h5 className='ms-md-2 py-3'>My Order</h5></Link>
                                    <hr />
                                    <Link style={{ textDecoration: "none", color: '#1E3163' }} to={`/dashboard/payment`}><h5 className='ms-md-2 py-3'>Payment</h5></Link>
                                    <hr />
                                    <Link style={{ textDecoration: "none", color: '#1E3163' }} to={`/dashboard/addReviews`}><h5 className='ms-md-2 py-3'>Add Feedback</h5></Link>
                                    <hr />
                                </div>
                        }
                        <Nav.Link>
                            <Button  style={{
                        backgroundColor: '#1E3163'
                    }}  onClick={logOut} className="py-1 px-4 my-2 border-0"><h5 className='pt-1'><b>Logout</b></h5></Button>
                        </Nav.Link>
                    </div>

                    <div  style={{
                        backgroundColor: 'aliceBlue', borderLeft:'2px solid #D3DEDC'
                    }}  className="col-md-9 col-sm-10">
                        <Outlet></Outlet>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Dashboard;