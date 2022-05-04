import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import image from '../../../watch-img/COVER1.jpg';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("password didn't match")
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate)
        e.preventDefault();
    }
    return (
        <div className="mt-5 container pt-5">
            <h2 className="text-center pb-4" style={{ color: '#1E3163' }}> Please Register & Stay Tuned</h2>
            <div className="row g-0  d-flex justify-content-around align-items-center">

                <div style={{ height: '500px' }} className="col-md-6 py-5 mb-5 pe-md-4 order-lg-0 order-1">
                    <h2 className="text-center" style={{ color: '#1E3163' }}> Register Form</h2>

                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="name" className="form-control" id="inputEmail3" placeholder="Your Name" name="name" onBlur={handleOnBlur} required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" placeholder="Your Email" name="email" onBlur={handleOnBlur} required />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" name="password" onBlur={handleOnBlur} required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" placeholder="Confirm Password" name="password2" onBlur={handleOnBlur} required />
                            </div>
                        </div>

                        <div className="text-center py-3">
                            <Button style={{backgroundColor:'#111b36'}} className="px-5 border-0"  size="lg" active type="submit">Register</Button>
                        </div>
                    </form>}
                    {isLoading && <div className=" text-center"><Spinner animation="border" variant="info" /></div>}

                    {user?.email && <Alert variant="success">
                        User Created Succesasfully !!
                    </Alert>}

                    {authError && <Alert variant="danger">{authError}</Alert>}


                    <div className="text-center my-2">
                        {/* <Button className="mt-1" variant="danger" size="lg" active>Google Sign In</Button> */}

                        <p className="">already registerd? Please <Link to="/login">Login</Link></p>
                    </div>
                </div>

                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <img  style={{ height:'460px', width:'520px' }}  className="img-fluid" src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;