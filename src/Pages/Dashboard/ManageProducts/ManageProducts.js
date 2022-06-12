import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://powerful-caverns-46584.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure,you want to delete?')
        if (proceed) {
            fetch(`https://powerful-caverns-46584.herokuapp.com/products/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingProducts = products.filter(user => user._id !== id);
                        setProducts(remainingProducts);
                    }
                })
        }
    }

    return (
        <div id="manageOrders">
            <h2 className="py-2 text-center">Total Products : {products.length}</h2>
            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-4 g-4 py-2 pb-md-4">
                {
                    products?.map(product =>
                        <div key={product._id} style={{ width: '270px', height: '390px' }} className='card p-0 col mx-auto'>
                            <div style={{ backgroundColor: '#21325e' }} className="watch-img w3-container w3-center w3-animate-zoom">
                                <img className="py-3" style={{
                                    height: '170px'
                                }} src={product?.img} alt="" />
                            </div>
                            <div className="p-3">
                                <h4 style={{ color: '#1E3163' }}>{product?.name}</h4>
                                <h6 style={{ color: '#1E3163' }}>{product?.description}</h6>
                                <div className='row mt-3'>
                                    <div className="col-md-6"> <h3 style={{ color: '#1E3163', fontWeight:'700' }}>{product?.price}</h3></div>
                                    <div className="col-md-6">
                                        <button onClick={() => handleDelete(product._id)} style={{ color: 'white', backgroundColor: '#1E3163' }} className="px-4 py-1 border-0 rounded-3"><h6 className='pt-1'>Delete</h6></button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;