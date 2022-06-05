import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import MyOrder from "./MyOrder";


const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`https://powerful-caverns-46584.herokuapp.com/orders/${user.email}`)
            .then((res) => res.json())
            .then((data) => setMyOrders(data))
            .catch((err) => console.log(err.message));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="container my-3">
            <h2 className="text-center">
                All Orders: {myOrders.length}
            </h2>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Product</th>
                            <th scope="col">Email</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myOrders.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center fw-bold">
                                    No orders yet
                                </td>
                            </tr>
                        ) : (
                            myOrders.map((order) => (
                                <MyOrder
                                    key={order._id}
                                    order={order}
                                    action={{ myOrders, setMyOrders }}
                                />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
