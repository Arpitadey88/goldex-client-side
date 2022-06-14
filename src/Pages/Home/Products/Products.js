import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './ProductsHeader/ProductHeader'


const Products = () => {

    const [products, setProducts] = useState([]);
    // const [watches, setWatches] = useState([]);
    const [selection, setSelection] = useState(0);
    const [btnAll, setBtnAll] = useState(false);
    const [btnMen, setBtnMen] = useState(false);
    const [btnWomen, setBtnWomen] = useState(false);
    const [btnSports, setBtnSports] = useState(false);

    useEffect(() => {
        fetch('https://powerful-caverns-46584.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => {
                console.log(error.message);
            });
    }, []);

    let Products = products;

    if (selection === 1) {
        Products = products?.slice(0, 21);
    }

    else if (selection === 2) {
        Products = products?.slice(0, 8);
    }

    else if (selection === 3) {
        Products = products?.slice(8, 17);
    }
    else if (selection === 4) {
        Products = products?.slice(17, 22);
    }


    return (
        <div className="container mt-md-5" id="products">
            <h1 className='text-center' style={{ color: '#1E3163' }}> Latest <span style={{ color: 'orange' }} >Watches</span> You Can't Resist</h1>

            <div className="d-flex justify-content-center align-items-center text-center displayDesign">
                <div className="bgColor px-3 py-2 rounded-pill mt-2 ">

                    <button onClick={() => { setSelection(1); setBtnAll(true); setBtnMen(false); setBtnWomen(false);  setBtnSports(false) }} className={btnAll ? "btnHeader dBlock activeBtn" : "btnHeader dBlock"} >
                        Watch
                    </button>
                    <button onClick={() => { setSelection(2); setBtnAll(false); setBtnMen(true); setBtnWomen(false);  setBtnSports(false) }} className={btnMen ? "btnHeader dBlock activeBtn" : "btnHeader dBlock"} >
                        Men
                    </button>

                    <button onClick={() => { setSelection(3); setBtnAll(false); setBtnMen(false); setBtnWomen(true);  setBtnSports(false) }} className={btnWomen ? "btnHeader dBlock activeBtn" : "btnHeader dBlock"}>
                        Women
                    </button>

                    <button onClick={() => { setSelection(4); setBtnAll(false); setBtnMen(false); setBtnWomen(false);  setBtnSports(true)}} className={btnSports ? "btnHeader dBlock activeBtn" : "btnHeader dBlock"}>
                        Sports
                    </button>

                </div>
            </div>


            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 g-4 mx-1 py-md-5 py-2">
                {
                    Products?.map(watch => <Product
                        key={watch._id}
                        product={watch}>
                    </Product>)
                }
            </div>
        </div>
    );
};
export default Products;
