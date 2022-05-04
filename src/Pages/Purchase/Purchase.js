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
        <div id="purchase" className="rounded-2 px-3 mt-5 container">
            <h1 className="text-center fw-bold pt-4 " style={{ color: '#111b36' }} >Details Information</h1>
            <div className="card border-0 my-4">
                <div className="row g-0">
                    <div className="col-md-6 px-md-5 px-3 text-center img-box py-3" style={{ backgroundColor: '#111b36', height: '480px' }} >
                        <div className="my-2">
                            <img src={product.img} style={{ height: '270px' }} className="img-fluid mb-3  bg-white rounded rounded-3" alt="..." />
                            <h3 style={{ color: '#fff' }}>{product.name}</h3>
                            <h5 className="text-secondary">{product.description}</h5>
                            <h3 className="text-white">{product.price}</h3>
                        </div>
                    </div>
                    <div className="col-md-6 submit-order">
                        <h2 className="text-center py-3" style={{ color: '#111b36' }}>Confirm Your Order</h2>
                        <form className=" rounded-3 mx-3 my-0" onSubmit={handleAddProduct}>

                            <input className='py-2 ps-2 rounded-3 fw-bold' type="text" ref={productRef} defaultValue={product.name} />
                            <br />
                            <input className='py-2 ps-2 rounded-3 fw-bold' type="text" ref={nameRef} defaultValue={user.displayName} />
                            <br />
                            <input className='py-2 ps-2 rounded-3 fw-bold' type="email" ref={emailRef} name="" id="" defaultValue={user.email} />
                            <br />
                            <input className='py-2 ps-2 rounded-3 fw-bold' type="number" ref={numberRef} placeholder="Enter Phone Number" />
                            <br />
                            <input style={{ backgroundColor: '#111b36' }} className='py-2 ps-2 fs-5 border-0 rounded-3 fw-bold text-white' type="submit" value="Order Now" />
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Purchase;