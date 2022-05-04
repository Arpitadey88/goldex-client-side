import React from 'react';

const Footer = () => {
    return (

        <div  style={{ backgroundColor: '#111b36'}}   className="text-white border">
        <div className="container pt-2 pb-0">
            <hr />
            <div className="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-4 pb-3">
                <div className="col border-0">
                    <h4 className="fw-bold text-warning pb-2">Company</h4>
                    <h6>About</h6>
                    <h6>General</h6>
                </div>
                <div className="col border-0">
                    <h4 className="fw-bold text-warning pb-2">Explore</h4>
                    <h6>FAQ</h6>
                    <h6>Spin To Win</h6>
                    <h6>Leader Board</h6>
                </div>
                <div className="col border-0">
                    <h4 className="fw-bold text-warning pb-2">Help</h4>
                    <h6>Support Center</h6>
                    <h6>Payment Sequrity</h6>
                    <h6>Privacy Policy</h6>
                </div>
                <div className="col border-0">
                    <h4 className="text-warning fw-bold">Terms and Conditions</h4>
                    <form className="row g-3 pt-1">
                        <div className="col-auto">
                            <input type="email" className="form-control text-secondary fw-bold border-0 w-75"
                                id="inputPassword2" placeholder="Enter Email" aria-label="Search" />
                        </div>
                    </form>
                </div>
            </div>
            <hr />
            <div className="text-center">
                <h6>Contact Us   |   About Us   | Corporate Customer   |   Resources   |  Account Terms And Conditions   |   Privacy Statement</h6>
            </div>
            <div className="text-center">
                <h6 className="text-warning">FOLLOW US</h6>
                <span><i className="fab fa-facebook fs-6 text-white"></i></span>
                <span><i className="fab fa-twitter fs-6 text-white ps-2"></i></span>
                <span><i className="fab fa-youtube fs-6 text-white ps-2"></i></span>
                <span><i className="fab fa-instagram fs-6 text-white ps-2"></i></span>
            </div>

            <div className="copyright">
                <p><small><span className="text-secondary fw-bold">Copyright © All Rights Reserved by</span> <span
                    className="text-warning fw-bold">Goldex Watchshop</span></small></p>
            </div>
        </div>
    </div>
    );
};

export default Footer;