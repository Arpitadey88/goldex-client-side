import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://powerful-caverns-46584.herokuapp.com/products', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-product">
            <h1 className="text-center my-2" style={{ color: '#1E3163' }}>Add New Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img")} placeholder="Enter Image Url" />
                <input {...register("name", { required: true })} placeholder="Title" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("price")} placeholder="Price" />
                <input type="submit" />
            </form>
            <div className="text-center">
                <Link to="/dashboard"><Button 
                 style={{ backgroundColor: '#1E3163' }} className="mx-5 px-5 py-2 border-0">Go Dashboard</Button></Link>
            </div>
        </div>
    );
};

export default AddProduct;