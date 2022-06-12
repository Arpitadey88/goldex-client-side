import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Product.css';


const Product = (props) => {
    const { _id, name, description, img, price } = props.product;
    return (
        <div style={{ width: '310px' }} className='card p-0 my-3 col mx-auto' data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <div style={{ backgroundColor: '#111b36'}} className="watch-img w3-container w3-center w3-animate-zoom"><img className="py-3" style={{
                height: '220px'
            }} src={img} alt="" />
            </div>

            <div className="p-3 card-content">
                <h4 style={{ color: '#1E3163' }}> {name} </h4>
                <h5 style={{ color: 'slategrey' }}>{description}</h5>
                <h3 className='fw-bold' style={{ color: '#1E3163' }}> {price}</h3>
            </div>
            <div className='btn-area'>
                <Link to={`/purchase/${_id}`}><button style={{ backgroundColor: '#111b36', color: 'white' }} className="btn buy-btn w-100"><h5> Buy Now </h5></button></Link>
            </div>
        </div >
    );
};

export default Product;



