import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import ManageOrder from "./ManageOrder";

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch(`https://powerful-caverns-46584.herokuapp.com/orders`)
            .then((res) => res.json())
            .then((data) => setAllOrders(data))
            .catch((err) => console.log(err.message));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="container my-3">
            <h2 className="text-center">
                Manage All Orders: {allOrders.length}
            </h2>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Product</th>
                            <th scope="col">Email</th>
                            <th scope="col">Status</th>
                            <th scope="col">Update</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrders.length === 0 ? (
                            <Card style={{ width: '500px' }} className='border-0 text-center mx-auto my-md-5 w-100 py-md-4'>
                                <h2>Ooops 😥!!</h2>
                                <h3>You didn't books any package yet!!</h3>
                                <h5 className="google-font my-1">please see our lattest model 🙂!</h5>
                            </Card>
                        ) : (
                            allOrders.map((order) => (
                                <ManageOrder
                                    key={order._id}
                                    order={order}
                                    action={{ allOrders, setAllOrders }}
                                />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;
