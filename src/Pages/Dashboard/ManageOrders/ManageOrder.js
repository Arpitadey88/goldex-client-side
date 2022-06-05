import axios from "axios";
import React from "react";
import deleteOrder from "../Actions/deleteOrder";

const ManageOrder = ({
    action: { allOrders, setAllOrders },
    
    order: { _id,  name, email, product, status},}) => {
    const handleChange = (e) => {
        const status = e.target.value;
        axios
            .put(`https://powerful-caverns-46584.herokuapp.com/order/${_id}`, { status })
            .then((res) => {
                if (res.data.result.modifiedCount) {
                    alert("Status updated successfully\nUpdating UI");
                    setAllOrders(res.data.orders);
                }
            })
            .catch((err) => console.log(err.message));
    };

    // delete order
    const handleDeleteOrder = () => {
        deleteOrder(_id, allOrders, setAllOrders);
    };
    return (
        <tr>
            <td>{name}</td>
            <td>{product?.name}</td>
            <td>{email}</td>
            <td>{status}</td>
            <td>
                <select defaultValue={status} onChange={handleChange}>
                    <option value="Decline">Decline</option>
                    <option value="Pending">Pending</option>
                    <option value="Approve">Approve</option>
                </select>
            </td>
            <td>
                <button className="btn btn-danger"
                    onClick={handleDeleteOrder}>Delete
                </button>
            </td>
        </tr>
    );
};

export default ManageOrder;
