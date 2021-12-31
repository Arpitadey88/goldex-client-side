import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Product.css';


const Product = (props) => {
    const { _id, name, description, img, price } = props.product;
    return (
        <Card style={{ width: '310px' }} className="mx-5 my-4 p-0 cart rounded-3">
            <div className="bg-dark cart watch-img w3-container w3-center w3-animate-zoom"><img className="py-3" style={{
                height: '220px'
            }} src={img} alt="" />
            </div>

            <div className="p-3">
                <h4 style={{ color: 'chocolate' }}> <b>{name}</b> </h4>
                <h5 style={{ color: 'slategrey' }}>{description}</h5>
                <h4 style={{ color: 'chocolate' }}> <b>{price}</b> </h4>
            </div>
            <div>
                <Link to={`/purchase/${_id}`}><button style={{ backgroundColor: 'sienna', color: 'white' }} className="btn w-100"><h5> Buy Now </h5></button></Link>
            </div>
        </Card >
    );
};

export default Product;



