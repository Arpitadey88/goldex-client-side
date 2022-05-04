import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
// import { Link, Button } from 'react-router-dom';
// import { Link } from 'react-router-dom';


const ManageSingleProduct = (props) => {

    const { name, description, img, price } = props.product;
    const [order, setOrder] = useState([]);

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure , you want to delete?');
        if (proceed) {
            const url = `https://powerful-caverns-46584.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCounted > 0) {
                        alert('Deleted Successfully');
                    }
                });
        }
    }


    return (
        <div style={{ width: '330px' }} className='card p-0 my-3 col mx-auto'>
            <div style={{ backgroundColor: '#21325e' }} className="watch-img w3-container w3-center w3-animate-zoom">
                <img className="py-3" style={{
                    height: '220px'
                }} src={img} alt="" />
            </div>
                <div className="p-3">
                    <h4 style={{ color: '#1E3163' }}>{name}</h4>
                    <h4 style={{ color: 'orange' }}>{price}</h4>
                    <h6 style={{ color: '#1E3163' }}>{description}</h6>
                    {/* <button className="btn btn-primary"> Buy Now </button> */}
                   <div>
                   <Button onClick={() => handleDeleteOrder(order._id)} style={{ color: 'white', backgroundColor: '#1E3163' }} className="px-5 pb-0 border-0 my-2"><h6 className='py-1'>Delete</h6></Button>
                   </div>
                </div>
        </div>
        // <div style={{ backgroundColor: '#21325e'}} className="watch-img w3-container w3-center w3-animate-zoom"><img className="py-3" style={{
        //     height: '220px'
        // }} src={img} alt="" />
        // </div>

        // <div className="p-3 card-content">
        //     <h4 style={{ color: '#1E3163' }}> {name} </h4>
        //     <h5 style={{ color: 'slategrey' }}>{description}</h5>
        //     <h4 style={{ color: '#1E3163' }}> {price}</h4>
        // </div>
        // <div className='btn-area'>
        //     <Link to={`/purchase/${_id}`}><button style={{ backgroundColor: '#1E3163', color: 'white' }} className="btn buy-btn w-100"><h5> Buy Now </h5></button></Link>
        // </div>
    );
};

export default ManageSingleProduct;
