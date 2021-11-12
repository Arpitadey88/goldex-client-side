import React from 'react';
import image1 from '../../../watch-img/sports.jpeg';
import image2 from '../../../watch-img/about.png';
import image3 from '../../../watch-img/shipping.jpg';
import { Card } from 'react-bootstrap';


const About = () => {
    return (
        <Card className=" border-0">
            <div class="card-group mx-3 ">
                <div style={{ height: '175px' }} class="card mb-3 border border-4 border-secondary ">
                    <div class="row g-0 ">
                        <div class="col-md-4">
                            <img style={{ height: '130px' }} src={image1} class="img-fluid rounded-start m-3" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h4 className="text-warning"><b>COOL</b></h4>
                                <h3 style={{ color: 'orange' }}><b>SPORTS</b></h3>
                                <h4 className="text-secondary"><b>WATCHES</b></h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ height: '175px' }} class="card mb-3  border border-5 border-warning mx-3">
                    <div class="row g-0">
                        <div class="col-md-3">
                            <img style={{ height: '130px' }} src={image2} class="img-fluid rounded-start m-3" alt="..." />
                        </div>
                        <div class="col-md-9">
                            <div class="card-body">
                                <h3 className="text-secondary"><b>SAVE UPTO</b></h3>
                                <h4 className="text-warning"><b>50% OFF</b></h4>
                                <p className="text-secondary"><b>THIS OFFER IS VALID ON ALL OUR STOCK ITEMS</b></p>

                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ height: '175px' }} class="card mb-3  border border-5 border-secondary">
                    <div class="row g-0">
                        <div class="col-md-3">
                            <img style={{ height: '110px' }} src={image3} class="img-fluid rounded-start m-3 mx-2" alt="..." />
                        </div>
                        <div class="col-md-9 ps-4">
                            <div class="card-body">
                                <h5 className="text-secondary"><b>FREE SHIPPING</b></h5>
                                <h3 style={{ color: 'orange' }}> <b>ON ORDERS OVER  $99</b></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>


    );
};

export default About;