import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Product.css';


const Product = (props) => {
    const { _id, name, description, img, price } = props.product;
    return (
        <div style={{ width: '260px' }} className='p-0 my-3 col mx-auto watch-card' data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <div style={{ backgroundColor: 'whitesmoke'}} className="watch-img text-center"><img className="py-3" style={{
                height: '220px'
            }} src={img} alt="" />
            </div>

            <div className="px-1 pt-3">
                <h5 style={{ color: '#111b36' }}> {name} </h5>
                <h6 style={{ color: 'slategrey' }}>{description}</h6>
                <h4 className='fw-bold' style={{ color: '#111b36' }}> {price}</h4>
            </div>
            <div className='btn-area'>
                <Link to={`/purchase/${_id}`}><button style={{ backgroundColor: '#111b36', color: 'white' }} className="btn buy-btn w-100"><h5> Buy Now </h5></button></Link>
            </div>
        </div >
    );
};

export default Product;



