import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://powerful-caverns-46584.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div id="products" className="my-3">
            <h2 className="text-center" style={{ color: 'orange' }}>Latest Watches You Can't Resist </h2>
            <div className="row row-cols-1 row-cols-md-3">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}>
                    </Product>)
                }
            </div>
        </div>
    );
};
export default Products;

// [

//     {
//         id: 1,
//         img: 'https://i.ibb.co/yBshrvq/M1.png',
//         name: 'Casio Edifice EFR-547D-1AV',
//         description: 'Super illuminator,Stainless Steel Band',
//         price: '111$'

//     },
//     {
//         id: 2,
//         img: 'https://i.ibb.co/DCj1Zpf/M2.jpg',
//         name: 'Japan Movt. Original Edifice Watch',
//         description: 'Stainless Steel Band,Regular timekeeping',
//         price: '99$'

//     },
//     {
//         id: 3,
//         img: 'https://i.ibb.co/tPXNPLL/L2.jpg',
//         name: 'Michael Women Bradshaw Gold-Tone Watch MK5605',
//         description: 'Metal, Round,suitable for swimming and snorkeling',
//         price: '85$'

//     },
//     {
//         id: 4,
//         img: 'https://i.ibb.co/C2T4VZD/L9.jpg',
//         name: 'Titan Raga Viva Analog Beige Watch-25YM01',
//         description: 'Beige,Round, Metal,1-Year Warranty',
//         price: '71$'

//     },
//     {
//         id: 5,
//         img: 'https://i.ibb.co/YDKKDsb/M3.jpg',
//         name: 'Original Leather Belt Watches (3089SL05)',
//         description: 'Analog,Leather,2 Years warranty',
//         price: '60$'

//     },
//     {
//         id: 6,
//         img: 'https://i.ibb.co/6m8dw4J/M4.png',
//         name: 'MTP-VD300SG Multi Dial Men Watch',
//         description: 'Strap Material Stainless Steel, 2-Year Warranty',
//         price: '74$'

//     },
//     {
//         id: 7,
//         img: 'https://i.ibb.co/tq2HDsw/M5.png',
//         name: 'Enticer Men MTP-1314D Analog Men Watch',
//         description: 'Leather,Imported, 2-Year Warranty',
//         price: '88$'

//     },
//     {
//         id: 8,
//         img: 'https://i.ibb.co/HBx5wGS/L3.png',
//         name: 'Casio MTP-E320D-9EVDF(A1920) Multi Dial',
//         description: 'Gold, Band Material: Stainless Steel',
//         price: '79$'

//     },
//     {
//         id: 9,
//         img: 'https://i.ibb.co/MNBwFc9/L4.jpg',
//         name: 'Raga Viva Women Metal Watch (78YM01)',
//         description: 'Strap Material Stainless Steel, 2-Year Warranty',
//         price: '65$'

//     },
//     {
//         id: 10,
//         img: 'https://i.ibb.co/tzHZk3P/L5.jpg',
//         name: 'Raga Viva Analog Silver Watch-78SM02',
//         description: 'Silver, Analog,Jewellery Clasp,1-years warranty',
//         price: '73$'

//     },
//     {
//         id: 11,
//         img: 'https://i.ibb.co/BV4CQsj/L6.png',
//         name: 'Elegant Watch By Fastrack (6111SP02)',
//         description: 'Beige, Analog,2-Year Warranty ',
//         price: '55$'

//     },

//     {
//         id: 12,
//         img: 'https://i.ibb.co/RCPVWMZ/M6.png',
//         name: 'Fastrack Formal Watch (NG3039SM01C)',
//         description: 'Analog,Sheet Metal, 1 Year Warranty',
//         price: '58$'

//     },
//     {
//         id: 13,
//         img: 'https://i.ibb.co/7tPqcqQ/M7.jpg',
//         name: 'Casio Edifice EFR-547D-1AV',
//         description: 'Stainless steel / Aluminum',
//         price: '135$'

//     },
//     {
//         id: 14,
//         img: 'https://i.ibb.co/KGXRHzD/M8.jpg',
//         name: 'Everett Chronograph Two-Tone Watch',
//         description: 'Stainless Steel, Metal, Round',
//         price: '124$'

//     },
//     {
//         id: 15,
//         img: ' https://i.ibb.co/R6vXMVm/L7.jpg',
//         name: 'Diesel NH2401YM04 Analog Watch',
//         description: 'Leather,Imported,2-Year Warranty',
//         price: '65$'

//     },

// ]
