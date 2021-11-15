import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import AddReview from '../Review/AddReview/AddReview';
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

            <div id="products" className="my-3">
                <h2 className="text-center"> <b>Latest <span style={{ color: 'orange' }} >Watches</span> You Can't Resist </b></h2>
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}>
                        </Product>)
                    }
                </div>
            </div>

            <Review></Review>
            {/* <AddReview></AddReview> */}

        </div>
    );
};

export default Home;