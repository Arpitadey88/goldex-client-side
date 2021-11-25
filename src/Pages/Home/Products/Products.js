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
        <div id="products" className="">
            <h2 className="text-center" style={{ color: 'orange' }}>Latest Watches You Can't Resist </h2>
            <div className="row row-cols-1 row-cols-md-3">
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

// https://i.ibb.co/RTs5Lwn/L1.png
// https://i.ibb.co/8jqkz37/L2.png
// https://i.ibb.co/Y02mXd1/L3.png
// https://i.ibb.co/8rfn1Sy/L4.png
// https://i.ibb.co/cbVPN5M/L5.png
// https://i.ibb.co/JjR1CV6/L6.png
// https://i.ibb.co/Rcy6sXP/L7.png
// https://i.ibb.co/gmkRrv5/L8.png
// https://i.ibb.co/KKYGbBW/L9.png
// https://i.ibb.co/1T9FqpV/M1.png
// https://i.ibb.co/rdxFBn4/M2.png
// https://i.ibb.co/hLzLR8t/M3.png
// https://i.ibb.co/YfzvRBX/M4.png
// https://i.ibb.co/8rM4wJs/M5.png
// https://i.ibb.co/B240brr/M6.png
// https://i.ibb.co/f03gYz4/M7.png
// https://i.ibb.co/CV83h4r/M8.png