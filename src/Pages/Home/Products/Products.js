import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://powerful-caverns-46584.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className="container mt-0" id="products">
            <h1 className='text-center' style={{ color: '#1E3163' }}> Latest <span style={{ color: 'orange' }} >Watches</span> You Can't Resist</h1>
            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-4 g-4 mx-1 py-md-5 py-2">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}>
                    </Product>)
                }
            </div>
        </div>
    );
};
export default Products;
