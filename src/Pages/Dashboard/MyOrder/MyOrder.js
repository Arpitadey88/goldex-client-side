import React from "react";
import deleteOrder from "../Actions/deleteOrder";

const MyOrder = ({
    order: {_id,name,product,email,status},
    action: { myOrders, setMyOrders },}) => {
    const handleDeleteOrder = () => {
        deleteOrder(_id, myOrders, setMyOrders);
    };
    return (
        <tr>
            <td>{name}</td>
            <td>{product.name}</td>
            <td>{email}</td>
            <td>{product.price}</td>
            <td>{status}</td>
            <td>
                <button className="btn btn-danger"
                    onClick={handleDeleteOrder}> Delete
                </button>
            </td>
        </tr>
    );
};

export default MyOrder;
