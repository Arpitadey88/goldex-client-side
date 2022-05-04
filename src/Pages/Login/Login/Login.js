import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import image from '../../../watch-img/bg.jpg';
import google from '../../../watch-img/google.png';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || './home'

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle(location, navigate);
    }

    return (
        <div className="pt-4 mt-5 container">
            <h2 className="text-center py-2" style={{ color: '#1E3163' }}> <b>Please Log In To Explore More</b></h2>
            <div className="row g-0">

                <div className="col-md-6">
                    <img style={{ height:'460px', width:'700px' }}  className="img-fluid " src={image} alt="" />
                </div>

                <div className="col-md-6 p-5 justify-content-center align-items-center">
                    <h2 className="text-center pb-4" style={{ color: '#1E3163' }}> <b>Login Form</b></h2>

                    <form onSubmit={handleLoginSubmit}>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" placeholder="Your Email" name="email" onChange={handleOnChange} required />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" name="password" onChange={handleOnChange} required />
                            </div>
                        </div>

                        <div className="text-center py-3">
                            <Button className="px-5 py-2 border-0" variant="danger" size="lg" active type="submit">Login</Button>
                        </div>
                    </form>
                    {isLoading && <div className=" text-center"><Spinner animation="border" variant="info" /></div>}

                    {user?.email && <Alert variant="success">
                        Login Successfully !!
                    </Alert>}

                    {authError && <Alert variant="danger">{authError}</Alert>}
                    <br />
                    <div className="text-center fw-bold">-------------------OR--------------------</div>

                    <div className="text-center my-4">
                        <div>
                        <img className='border border-1 border-primary rounded-start'  style={{ height:'45px' }} src={google} alt="" />
                        <Button onClick={handleGoogleLogin} className=" px-5 rounded-0 rounded-end" variant="primary" size="lg" active>Google Sign In</Button>
                        </div>

                        <p className="my-2">new user? Please <Link to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;