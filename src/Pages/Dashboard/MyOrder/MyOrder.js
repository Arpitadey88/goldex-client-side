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
            <td className="text-primary">{status}</td>
            <td>
                <button className="btn-danger rounded-3 px-3"
                    onClick={handleDeleteOrder}> Delete
                </button>
            </td>
        </tr>
    );
};

export default MyOrder;
