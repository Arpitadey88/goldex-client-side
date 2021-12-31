import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Product from '../Product/Product';


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://powerful-caverns-46584.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
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
    );
};
export default Products;
