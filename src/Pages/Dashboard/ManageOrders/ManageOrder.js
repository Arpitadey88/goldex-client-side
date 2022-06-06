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
            <td className="py-2">{name}</td>
            <td className="py-2">{product?.name}</td>
            <td className="py-2">{email}</td>
            <td className="py-2">{status}</td>
            <td className="py-2">
                <select className="btn-primary rounded-3 pb-1" defaultValue={status} onChange={handleChange}>
                    <option value="Decline">Decline</option>
                    <option value="Pending">Pending</option>
                    <option value="Approve">Approve</option>
                </select>
            </td>
            <td className="py-2">
                <button className="btn-danger rounded-3 px-3"
                    onClick={handleDeleteOrder}>Delete
                </button>
            </td>
        </tr>
    );
};

export default ManageOrder;
