import React from 'react';
import { Button, Card } from 'react-bootstrap';
import image from '../../../watch-img/Bg2.jpg';

const Banner = () => {
    return (
        <Card className=" rounded-2 mt-2">
            <Card.Img style={{ height: '400px' }} className="banner-img" src={image} alt="Card image" />
            <Card.ImgOverlay>
                <div className="container-fluid mb-5">
                    <h3 className="text-white mt-5 mb-3"><b>THE RETURN OF A GREAT CLASSIC</b></h3>
                    <h2 className="text-white mt-5 mb-3"><b>VINTAGE DESIGN</b></h2>
                    <br />
                    <h6 className="text-white mb-3"> <b>SHOP OUR COLLECTION OF DESIGNER WATCHES FOR WOMEN AND MEN</b>
                    </h6>
                    <Button style={{
                        backgroundColor: 'goldenRod'
                    }} className="py-2 px-3 mt-4"><h4>Shop Now</h4></Button>
                </div>
            </Card.ImgOverlay>
        </Card>
    );
};

export default Banner;