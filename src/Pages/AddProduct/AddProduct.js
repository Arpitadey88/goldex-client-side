import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/products', data)
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
            <h1 className="text-center mb-2" style={{ color: 'chocolate' }}>Add New Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img")} placeholder="image url" />
                <input {...register("name", { required: true })} placeholder="Title" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("price")} placeholder="Price" />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddProduct;