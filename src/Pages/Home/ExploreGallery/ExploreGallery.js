import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import image1 from '../../../watch-img/COVER2.jpg';
import image2 from '../../../watch-img/COVER3.jpg';
import image3 from '../../../watch-img/COVER4.jpg';
import Blog from '../Blog/Blog';
// import Product from '../Product/Product';
import Products from '../Products/Products';

const ExploreGallery = () => {
    
    return (
        <div>
            <h1  style={{ color: '#1E3163' }} className="text-center mt-5 pt-5 pb-3"><b>Exclusive <span className="text-warning">Collection</span> Of Watches</b></h1>
            <Blog></Blog>
            {/* <CardGroup>
                <Card>
                    <Card.Img style={{ height: '380px' }} variant="top" src={image1} />
                </Card>
                <Card>
                    <Card.Img style={{ height: '380px' }} variant="top" src={image2} />
                </Card>
                <Card>
                    <Card.Img style={{ height: '380px' }} variant="top" src={image3} />
                </Card>
            </CardGroup> */}
            <div className="mt-5">
                <Products></Products>
            </div>
        </div>
    );
};

export default ExploreGallery;