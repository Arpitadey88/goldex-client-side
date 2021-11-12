import React from 'react';

const Footer = () => {
    return (

        <div className="container-fluid pt-2 pb-0 bg-dark text-white">
            <hr />
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 pb-3">
                <div className="col border-0">
                    <h4 className="fw-bold text-warning pb-2">PRODUCTS</h4>
                    <h6>Features</h6>
                    <h6>Pricing</h6>
                    <h6>Training</h6>
                    <h6>Blog</h6>
                </div>
                <div className="col border-0">
                    <h4 className="fw-bold text-warning pb-2">DOCS</h4>
                    <h6>Getting Started</h6>
                    <h6>Libraries</h6>
                    <h6>Guides</h6>
                    <h6>Simple Apps</h6>
                </div>
                <div className="col border-0">
                    <h4 className="fw-bold text-warning pb-2">HELP</h4>
                    <h6>FAQ</h6>
                    <h6>Payment Sequrity</h6>
                    <h6>Privacy Policy</h6>
                    <h6>EMI</h6>
                </div>
                <div className="col border-0">
                    <h5 className="text-warning fw-bold">Terms and Conditions</h5>
                    <form className="row g-3 pt-1">
                        <div className="col-auto">
                            <input type="email" className="form-control text-secondary fw-bold border-0"
                                id="inputPassword2" placeholder="Enter Email" aria-label="Search" />
                        </div>
                    </form>
                    <br />
                    <h6>In The press</h6>
                    <h6>Press Releases</h6>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <span><i className="fab fa-facebook fs-2" style={{
                        color: 'dodgerBlue'
                    }}></i></span>
                    <span><i className="fab fa-twitter fs-2 ps-3" style={{
                        color: 'dodgerBlue'
                    }}></i></span>
                    <span><i className="fab fa-youtube fs-2 ps-3" style={{
                        color: 'dodgerBlue'
                    }}></i></span>
                    <span><i className="fab fa-instagram fs-2 ps-3" style={{
                        color: 'dodgerBlue'
                    }}></i></span>
                </div>
                <div className="col-md-6">
                    <h6>Terms of Use   |   Privacy   | Copyright © All Rights Reserved by <span
                        className="text-primary fw-bold">Goldex WatchShop 2021</span></h6>
                </div>
            </div>
        </div>
    );
};

export default Footer;