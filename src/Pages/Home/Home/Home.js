import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Blogs from '../Blogs/Blogs';
// import Product from '../Product/Product';
import Products from '../Products/Products';
import Review from '../Review/Review/Review';

const Home = () => {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch('https://powerful-caverns-46584.herokuapp.com/products')
    //         .then(res => res.json())
    //         .then(data => setProducts(data.slice(1, 10)));
    // }, [])

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Products></Products>
            {/* <div className="container my-md-5 my-2" id="products">
                <h1 className='text-center' style={{ color: '#1E3163' }}> Latest <span style={{ color: 'orange' }} >Watches</span> You Can't Resist</h1>
                <div className="row row-cols-2 row-cols-md-4 row-cols-lg-4 g-4 mx-1 py-4">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}>
                        </Product>)
                    }
                </div>
            </div> */}
            <Blog></Blog>
            <Blogs></Blogs>
            <Review></Review>

        </div>
    );
};

export default Home;