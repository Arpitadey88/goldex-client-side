import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Purchase.css';
import { Link } from 'react-router-dom';


const Purchase = () => {
    const { user } = useAuth();
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [error, setError] = useState("");


    useEffect(() => {
        fetch(`https://powerful-caverns-46584.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch((err) => setError("Invalid Request to server"));
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const order = data;
        order.status = "Pending";
        order.product = product;

        // send data to server
        axios
            .post("https://powerful-caverns-46584.herokuapp.com/order", order)
            .then((res) => {
                if (res.data.insertedId) {
                    alert("order added successfully\nWait for approve");
                    reset();
                }
            })
            .catch((err) => console.log(err.message));
    };
    if (!product._id) {
        return (
            <div>
                {error ? (
                    <>
                        <div className="h4 text-center my-5 fw-bold text-orange">
                            {error}
                        </div>
                        <Link to="/">
                            <div className="text-center">
                                &#8592; Back to home
                            </div>
                        </Link>
                    </>
                ) : (
                    <div className="text-center my-5">
                        <div
                            className="spinner-border text-orange"
                            role="status"
                        ></div>
                    </div>
                )}
            </div>
        );
    }

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
                        <form onSubmit={handleSubmit(onSubmit)} className="rounded-3 mx-3 my-0">
                            <input className='py-2 ps-2 rounded-3' type="text" value={product.name} />
                            <br />
                            <input className='py-2 ps-2 rounded-3' value={user.displayName} {...register("name", { required: true })} />
                            <br />
                            <input className='py-2 ps-2 rounded-3' value={user.email}  {...register("email", { required: true })} />
                            <br />
                            <input className='py-2 ps-2 rounded-3' placeholder="Enter Phone Number" {...register("phone", { required: true })} />
                            <br />
                            <input style={{ backgroundColor: '#111b36' }} className='py-2 ps-2 fs-5 border-0 rounded-3 text-white' type="submit" value="Order Now" />
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Purchase;