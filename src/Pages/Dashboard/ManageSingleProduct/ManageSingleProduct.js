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
        <div style={{ width: '440px' }} className="col mx-2">
            <Card className="p-2 m-3" style={{ height: '470px', backgroundColor: 'ghostWhite' }}>
                <Card.Img className="border border-2" style={{ height: '240px', width: '360px' }} variant="top" src={img} />
                <Card.Body>
                    <h4 style={{ color: 'chocolate' }}>{name}</h4>
                    <h6 style={{ color: 'chocolate' }}>{price}</h6>
                    <p style={{ color: 'slategrey' }}>{description}</p>
                    {/* <button className="btn btn-primary"> Buy Now </button> */}
                    <Button onClick={() => handleDeleteOrder(order._id)} style={{ color: 'white', backgroundColor: 'brown' }} className="px-3 py-2 m-1">Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ManageSingleProduct;
