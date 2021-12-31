import React, { useEffect } from 'react';
import { useRef, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Purchase.css';


const Purchase = () => {
    const { user } = useAuth();
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    const nameRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();
    const productRef = useRef();


    const handleAddProduct = e => {
        const userName = nameRef.current.value;
        const userEmail = emailRef.current.value;
        const userNumber = numberRef.current.value;
        const userProduct = productRef.current.value;

        const newOrder = { userName, userEmail, userNumber, userProduct };
        // console.log(newOrder);

        fetch(`https://powerful-caverns-46584.herokuapp.com/orders`, {
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
        fetch(`https://powerful-caverns-46584.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])


    return (
        <div id="purchase" className="border rounded-2 px-3">
            <h1 className="text-center fw-bold py-4" style={{ color: 'crimson' }} >Details Information</h1>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-6 border px-5 text-center py-5" style={{ backgroundColor: 'black' }} >
                        <div className="m-3">
                            <img src={product.img} style={{ height: '350px' }} className="img-fluid rounded-start ms-5" alt="..." />
                        </div>
                        <div className="card-body">
                            <h2 style={{ color: 'brown' }} className="card-title">{product.name}</h2>
                            <h4 className="card-text"><small className="text-muted">{product.description}</small></h4>
                            <h4 className="card-text"><small className="text-muted">{product.price}</small></h4>
                        </div>
                    </div>
                    <div className="col-md-6 submit-order border rounded-2">
                        <h2 className="text-center" style={{ color: 'chocolate' }}>Confirm Your Order</h2>
                        <form className="border rounded-3 mx-3 py-5" onSubmit={handleAddProduct}>

                            <input className='py-2 ps-2 rounded-3 fw-bold' type="text" ref={productRef} defaultValue={product.name} />
                            <br />
                            <input className='py-2 ps-2 rounded-3 fw-bold' type="text" ref={nameRef} defaultValue={user.displayName} />
                            <br />
                            <input className='py-2 ps-2 rounded-3 fw-bold' type="email" ref={emailRef} name="" id="" defaultValue={user.email} />
                            <br />
                            <input className='py-2 ps-2 rounded-3 fw-bold' type="number" ref={numberRef} placeholder="Enter Phone Number" />
                            <br />
                            <input style={{ backgroundColor: 'chocolate' }} className='py-2 ps-2 fs-5 border-0 rounded-3 fw-bold text-white' type="submit" value="Order Now" />
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Purchase;