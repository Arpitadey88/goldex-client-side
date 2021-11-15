import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import image from '../../../watch-img/COVER1.jpg';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
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
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="m-5 border p-3">
            <h2 className="text-center py-2" style={{ color: 'chocolate' }}> <b>Please Log In To Explore More</b></h2>
            <div className="row g-0">

                <div className="col-md-6 border container-fluid">
                    <img className="img-fluid" src={image} alt="" />
                </div>

                <div className="col-md-6 border p-5 justify-content-center align-items-center">
                    <h2 className="text-center pb-4" style={{ color: 'brown' }}> <b>Login Form</b></h2>

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
                            <Button className="px-5" variant="primary" size="lg" active type="submit">Login</Button>
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
                        <Button onClick={handleGoogleLogin} className="mt-1" variant="danger" size="lg" active>Google Sign In</Button>

                        <p className="my-2">new user? Please <Link to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;