import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
// import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const ManageOrder = () => {

    const [orders, setOrders] = useState([]);
    const { register, handleSubmit } = useForm();

    const [status, setStatus] = useState("");
    const [orderId, setOrderId] = useState("");
    console.log(status);

    useEffect(() => {
        fetch(`https://powerful-caverns-46584.herokuapp.com/orders`)
            .then((res) => res.json())
            .then((data) => setOrders(data))
    }, [orders]);


    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure , you want to delete?');
        if (proceed) {
            const url = `https://powerful-caverns-46584.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orders)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCounted > 0) {
                        alert('Deleted Successfully');
                        // const remaining = orders.filter(order => order._id !== id);
                        // setOrders(remaining);
                    }
                });
        }
    }
    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
    };

    const onSubmit = (data) => {
        console.log(data, orderId);
        fetch(`https://powerful-caverns-46584.herokuapp.com/statusUpdate/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => setStatus(result));
    };


    return (
        <div className="container p-0">
            <h1>All orders {orders.length}</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th >Product Title</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((order) => (
                    <tbody key={order._id}>
                        <tr>
                            <td>{order.userProduct}</td>
                            <td>{order.userName}</td>
                            <td>{order.userEmail}</td>
                            <td>{order.userNumber}</td>
                            <td>Pending</td>
                            {/* <td>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <select
                                        onClick={() => handleOrderId(order?._id)}
                                        {...register("status")}
                                    >
                                        <option value={order?.status}>{order?.status}</option>
                                        <option value="approve">approve</option>
                                        <option value="done">Done</option>
                                    </select>
                                    <input type="submit" />
                                </form>
                            </td> */}
                            <td>
                                <Button style={{ color: 'white', backgroundColor: 'darkGreen' }} className="px-3 py-2 m-1 border-0">Update</Button>

                                <Button onClick={() => handleDeleteOrder(order._id)} style={{ color: 'white', backgroundColor: 'brown' }} className="px-3 py-2 m-1 border-0">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </Table>

            <div className="text-center my-3">
                <Link to="/dashboard"><Button className="mx-5 px-5 py-2 my-3">Go Dashboard</Button></Link>
            </div>
        </div>
    );
};

export default ManageOrder;
