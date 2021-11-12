import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


const Product = (props) => {
    const { _id, name, description, img, price } = props.product;
    return (
        <div style={{ width: '440px' }} className="col mx-2">
            <Card className="p-2 m-3" style={{ height: '470px', backgroundColor: 'ghostWhite' }}>
                <Card.Img className="border border-2" style={{ height: '240px', width: '360px' }} variant="top" src={img} />
                <Card.Body>
                    <h4 style={{ color: 'chocolate' }}>{name}</h4>
                    <h6 style={{ color: 'chocolate' }}>{price}</h6>
                    <p style={{ color: 'slategrey' }}>{description}</p>
                    {/* <button className="btn btn-primary"> Buy Now </button> */}
                    <Link to={`/purchase/${_id}`}><button className="btn btn-primary"> Buy Now </button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;



// https://i.ibb.co/tsRrrMx/BG1.jpg
// https://i.ibb.co/tJDs3ws/C1.jpg
// https://i.ibb.co/tHL5PgF/C2.jpg
// https://i.ibb.co/L8Zbrxj/C3.jpg
// https://i.ibb.co/cDqYMBG/C4.jpg
// https://i.ibb.co/vvdDNDW/C5.png
// https://i.ibb.co/D7MgW8Z/C6.jpg
// https://i.ibb.co/LN0FyqB/COVER1.jpg
// https://i.ibb.co/mHBgKF9/COVER1.png
// https://i.ibb.co/xLdm6gw/COVER2.jpg
// https://i.ibb.co/9wjRS7y/Watches.jpg
// https://i.ibb.co/0nskWWh/COVER4.jpg
// https://i.ibb.co/Nj4dbJc/COVER5.jpg
// https://i.ibb.co/M18Tqft/L1.jpg
// https://i.ibb.co/tPXNPLL/L2.jpg
// https://i.ibb.co/HBx5wGS/L3.png
// https://i.ibb.co/MNBwFc9/L4.jpg
// https://i.ibb.co/tzHZk3P/L5.jpg
// https://i.ibb.co/BV4CQsj/L6.png
// https://i.ibb.co/R6vXMVm/L7.jpg
// https://i.ibb.co/vh6ns43/L8.png
// https://i.ibb.co/C2T4VZD/L9.jpg
// https://i.ibb.co/Xzq3mrk/logo-1.png
// https://i.ibb.co/1X7j2x8/logo-N.png
// https://i.ibb.co/0QhC2fQ/logo-w.jpg
// https://i.ibb.co/yBshrvq/M1.png
// https://i.ibb.co/DCj1Zpf/M2.jpg
// https://i.ibb.co/YDKKDsb/M3.jpg
// https://i.ibb.co/6m8dw4J/M4.png
// https://i.ibb.co/tq2HDsw/M5.png
// https://i.ibb.co/RCPVWMZ/M6.png
// https://i.ibb.co/7tPqcqQ/M7.jpg
// https://i.ibb.co/KGXRHzD/M8.jpg
// https://i.ibb.co/c60Sq16/watch.jpg