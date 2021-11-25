import React from 'react';
import image1 from '../../../watch-img/sports.jpeg';
import image2 from '../../../watch-img/about.png';
import image3 from '../../../watch-img/shipping.jpg';
import { Card } from 'react-bootstrap';
import './About.css';


const About = () => {
    return (
        <Card className="border-0">
            <div className="card-group mx-3 ">
                <div style={{ height: '190px' }} className="card mb-3 border border-5 border-secondary">
                    <div className="row m-4">
                        <div className="col-md-4 w-50">
                            <img style={{ height: '130px' }} src={image1} className="img-fluid" alt="..." />
                        </div>
                        <div className="col-md-8 w-50">
                            <h4 className="text-warning"><b>COOL</b></h4>
                            <h3 style={{ color: 'orange' }}><b>SPORTS</b></h3>
                            <h4 className="text-secondary"><b>WATCHES</b></h4>

                        </div>
                    </div>
                </div>

                <div style={{ height: '190px' }} className="card mb-3  rounded-2  border border-5 border-warning mx-3">
                    <div className="row my-4">
                        <div className="col-md-4 w-25">
                            <img style={{ height: '130px' }} src={image2} className="img-fluid mx-2" alt="..." />
                        </div>
                        <div className="col-md-8 w-75">

                            <h3 className="text-secondary"><b>SAVE UPTO</b></h3>
                            <h4 className="text-warning"><b>50% OFF</b></h4>
                            <h5 className="text-secondary"><b>THIS OFFER IS VALID ON ALL OUR STOCK ITEMS</b></h5>

                        </div>
                    </div>
                </div>

                <div style={{ height: '190px' }} className="card mb-3 border border-5 border-secondary">
                    <div className="row my-4 ">
                        <div className="col-md-4 w-25">
                            <img style={{ height: '110px', width: '120px' }} src={image3} className="img-fluid mx-2 border" alt="..." />
                        </div>
                        <div className="col-md-8 w-75">
                            <h4 className="text-secondary"><b>FREE SHIPPING</b></h4>
                            <h3 style={{ color: 'orange' }}> <b>ON ORDERS OVER  $99</b></h3>
                        </div>
                    </div>
                </div>
            </div>
        </Card>


    );
};

export default About;