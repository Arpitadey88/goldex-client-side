import React, { useEffect, useState } from "react";
// import useAuth from "../../../hooks/useAuth";
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import useAuth from "../../../hooks/useAuth";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const MyOrder = () => {
    const { user } = useAuth();
    console.log(user.email)
    const [myOrder, setMyOrder] = useState([]);
    // //    added 
    fetch(`https://powerful-caverns-46584.herokuapp.com/myOrder?email=${user.email}`, {
        method: 'GET',
    })
        .then(res => res.json())
        .then(data => setMyOrder(data))
    console.log(myOrder)

    // added 2 
    // useEffect(() => {
    //     const url = `https://powerful-caverns-46584.herokuapp.com/myOrder?email=${user?.email}`;
    //     fetch(url, {
    //         headers: {
    //             method: 'GET',
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => setMyOrder(data));

    // }, []);
    // useEffect(() => {
    //     const url = `https://powerful-caverns-46584.herokuapp.com/myOrder/${user?.email}`;
    //     console.log(url)
    //     fetch(`https://powerful-caverns-46584.herokuapp.com/myOrder/${user?.email}`)
    //         .then((res) => res.json())
    //         .then((data) => console.log(data));
    // }, [user?.email]);



    return (
        <div>
            <div>
                <h2 style={{}}>Your Total Orders: {myOrder.length}</h2>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="My Order Table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Client Name</TableCell>
                                <TableCell align="right">Order Product</TableCell>
                                <TableCell align="right">Email</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {/*
userName
userProduct
userEmail */}

                            {myOrder.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.userName}
                                    </TableCell>
                                    <TableCell align="right">{row.userProduct}</TableCell>
                                    <TableCell align="right">{row.userEmail}</TableCell>

                                    <TableCell sx={{ width: '10px', height: '10px' }} align="right">

                                    </TableCell>
                                    <TableCell align="right">{row.date}</TableCell>
                                    {/* <TableCell align="right"><Button onClick={() => handleOrderDelete(row?._id)} style={{ backgroundColor: 'red', color: 'white' }}>Cancel</Button></TableCell> */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </div>
    );
};

export default MyOrder;
