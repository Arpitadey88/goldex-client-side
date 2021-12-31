import React from 'react';
import { Button, Card } from 'react-bootstrap';
import image from '../../../watch-img/Bg2.jpg';

const Banner = () => {
    return (
        <Card className="rounded-2 mt-2 w3-animate-left">
            <Card.Img style={{ height: '590px' }} className="banner-img" src={image} alt="Card image" />
            <Card.ImgOverlay>
                <div className="container-fluid mb-5">
                    <h2 className="text-white mt-5 mb-3"><b>THE RETURN OF A GREAT CLASSIC</b></h2>
                    <h1 className="text-white mt-5 mb-3"><b>VINTAGE DESIGN</b></h1>
                    <br />
                    <h4 className="text-white mb-3"> <b>SHOP OUR COLLECTION OF DESIGNER WATCHES <br />
                        <br /> FOR WOMEN AND MEN</b>
                    </h4>
                    <br />
                    <Button style={{
                        backgroundColor: 'goldenRod'
                    }} className="py-2 px-4 mt-5"><h4>Shop Now</h4></Button>
                </div>
            </Card.ImgOverlay>
        </Card>
    );
};

export default Banner;