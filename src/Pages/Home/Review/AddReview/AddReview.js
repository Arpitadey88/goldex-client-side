import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddReview.css';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-review border m-4">
            <h3 className="text-center mt-2" style={{ color: 'saddleBrown' }}>Please Give Your Feedback</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img")} placeholder="image url" />
                <input {...register("name", { required: true })} placeholder="Your Name" />
                <textarea {...register("description")} placeholder="Give Feedback" />
                {/* <input {...register("description")} /> */}
                <input type="submit" />
            </form>

        </div >
    );
};

export default AddReview;