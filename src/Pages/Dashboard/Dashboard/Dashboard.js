import React from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import AddProduct from '../../AddProduct/AddProduct';
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageOrder from '../ManageOrder/ManageOrder';
import Reviews from '../Reviews/Reviews';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import wave from '../../../watch-img/wave1.png';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth();
    return (
        <div className='mt-5 pt-4 rounded-3'>
            <Navbar>
                <Container style={{
                    backgroundColor: 'aliceBlue'
                }}>
                    <Navbar.Brand style={{
                        color: 'chocolate'
                    }} href="#home"><h4><b>DashBoard</b></h4></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="#login"><h5 style={{
                            color: 'chocolate', fontWeight: 'bold'
                        }}>{user?.displayName}</h5></Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <div className=" row border rounded-3">
                    <div style={{
                        backgroundColor: 'aliceBlue'
                    }} className="col-md-3 border">
                        <Link style={{ textDecoration: "none" }} to={`${url}`}><h5 className='ms-5 pt-4 pb-3'>Dashboard</h5></Link>
                        <hr />
                        {
                            admin ? <div>
                                <Link style={{ textDecoration: "none" }} to={`${url}/manageOrder`}><h5 className='ms-5 py-3'>Manage All Order</h5></Link>
                                <hr />
                                <Link style={{ textDecoration: "none" }} to={`${url}/addProduct`}><h5 className='ms-5 py-3'>Add New Product</h5></Link>
                                <hr />
                                <Link style={{ textDecoration: "none" }} to={`${url}/manageProducts`}><h5 className='ms-5 py-3'>Manage Products</h5></Link>
                                <hr />
                                <Link style={{ textDecoration: "none" }} to={`${url}/makeAdmin`}><h5 className='ms-5 py-3'>Make Admin</h5></Link>
                                <hr />
                            </div>
                                :
                                <div>
                                    <Link style={{ textDecoration: "none" }} to={`${url}/myOrder`}><h5 className='ms-5 py-3'>My Order</h5></Link>
                                    <hr />
                                    <Link style={{ textDecoration: "none" }} to={`${url}/payment`}><h5 className='ms-5 py-3'>Payment</h5></Link>
                                    <hr />
                                    <Link style={{ textDecoration: "none" }} to={`${url}/addReviews`}><h5 className='ms-5 py-3'>Add Feedback</h5></Link>
                                    <hr />
                                </div>
                        }
                        <Nav.Link>
                            <Button onClick={logOut} className="py-1 px-4 my-2 ms-4"><h5><b>Logout</b></h5></Button>
                        </Nav.Link>
                    </div>

                    <div className="col-md-9 border">
                        <Switch>
                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <Route path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </Route>
                            <Route path={`${path}/manageOrder`}>
                                <ManageOrder></ManageOrder>
                            </Route>
                            <Route path={`${path}/manageProducts`}>
                                <ManageProducts></ManageProducts>
                            </Route>
                            <Route path={`${path}/myOrder`}>
                                <MyOrder></MyOrder>
                            </Route>
                            <Route path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>
                            <Route path={`${path}/addReviews`}>
                                <Reviews></Reviews>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Dashboard;