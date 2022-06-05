import React from 'react';
import { useEffect, useState } from 'react';
import ManageSingleProduct from '../ManageSingleProduct/ManageSingleProduct';


const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://powerful-caverns-46584.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <div id="products" className="my-3">
                <h2 className="text-center" style={{ color: '#1E3163' }}>Total Products :  {products.length}</h2>
                <div className="row row-cols-2 row-cols-md-4 row-cols-lg-4 g-4 mx-1 py-4">
                    {
                        products.map(product => <ManageSingleProduct
                            key={product._id}
                            product={product}>
                        </ManageSingleProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;