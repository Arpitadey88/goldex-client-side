import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
// import AddReview from '../Review/AddReview/AddReview';
import Review from '../Review/Review/Review';
// import Products from '../Products/Products';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://powerful-caverns-46584.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(1, 7)));
    }, [])

    return (
        <div>
            <Banner></Banner>
            <About></About>

            <CardGroup id="products">
                <h2 className='ms-5'> <b>Latest <span style={{ color: 'orange' }} >Watches</span> You Can't Resist </b></h2>
                <Card.Body className="row row-cols-1 row-cols-md-3 d-flex align-item-center justify-content-center">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}>
                        </Product>)
                    }
                </Card.Body>
            </CardGroup>

            <Review></Review>
            {/* <AddReview></AddReview> */}

        </div>
    );
};

export default Home;