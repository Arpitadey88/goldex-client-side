import React, { useEffect } from 'react';
import { useRef, useState } from 'react';
import { useParams } from 'react-router';
import './Purchase.css';


const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    const nameRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();

    const handleAddProduct = e => {
        const userName = nameRef.current.value;
        const userEmail = emailRef.current.value;
        const userNumber = numberRef.current.value;

        const newOrder = { userName, userEmail, userNumber };

        fetch(`http://localhost:5000/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order Confirmed Successfully')
                    e.target.reset();
                }
            })

        e.preventDefault();

    };


    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])


    return (
        <div id="purchase" className="border px-3">
            <h2>PURCHASE : {productId}{product.name}</h2>
            <h2 className="text-center" style={{ color: 'crimson' }} >Details Information</h2>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-6 border px-5" style={{ backgroundColor: 'whiteSmoke' }} >
                        <div className="m-3">
                            <img src={product.img} style={{ height: '350px', backgroundColor: 'whiteSmoke' }} className="img-fluid rounded-start ms-5" alt="..." />
                        </div>
                        <div className="card-body">
                            <h2 style={{ color: 'brown' }} className="card-title">{product.name}</h2>
                            <h5 style={{ color: 'brown' }} className="card-text"><small className="text-muted">{product.description}</small></h5>
                            <h5 style={{ color: 'brown' }} className="card-text"><small className="text-muted">{product.price}</small></h5>
                        </div>
                    </div>
                    <div className="col-md-6 submit-order border">
                        <h2 className="text-center" style={{ color: 'chocolate' }}>Confirm Your Order</h2>
                        <form className="border mx-3 py-5" onSubmit={handleAddProduct}>
                            <input type="text" defaultValue={product.name} />
                            <br />
                            <input type="text" ref={nameRef} placeholder="Enter Name" />
                            <br />
                            <input type="email" ref={emailRef} name="" id="" placeholder="Enter Your Email" />
                            <br />
                            <input type="number" ref={numberRef} placeholder="Enter Phone Number" />
                            <br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Purchase;