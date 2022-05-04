import React, { useEffect } from 'react';
// import { Button } from 'react-bootstrap';
// import heroImg from '../../../watch-img/bg-hero.png';
import { useLocation, useNavigate } from 'react-router';
import './Banner.css';

const Banner = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || './home';

    const handleViewAllProducts = () => {
       navigate('/explore');
    }

    useEffect(() => {
        document.title = "Goldex watchShop"
    }, []);
    return (
        <div className="">
        <section className="home border-0 pt-3 ps-4" id="home">

            <div className="content p-md-5 m-md-5">
                <h1 className="dancingFont">Goldex WatchShop</h1>
                <h3 className="dancingFont text-warning">Extrordinary Timepieces</h3>
                <h2 className="dancingFont">Vintage Design</h2>
                <button onClick={handleViewAllProducts} className="btn rounded border-0 hero-btn mt-md-3">View All Products</button>
            </div>

        </section>


    </div>
        // <div className="banner-bg mt-5 py-5" id='banner'>
        //     <div className=" container px-0">
        //         <div className="row d-flex align-items-center justify-content-center mb-lg-2">
        //             <div className="col-12 col-lg-6 order-lg-0 order-1">
        //                 <div className="text-lg-start ani-text ps-3">
        //                     <h1 className="text-white mt-md-5 mb-3 mt-3"><b>THE RETURN OF A GREAT CLASSIC</b></h1>
        //                     <h1 className="text-warning mt-md-5 mt-2"><b>VINTAGE DESIGN</b></h1>
        //                     <br />
        //                     <h4 className="text-white mt-2 mb-lg-3"> <b>SHOP OUR COLLECTION OF DESIGNER WATCHES <br />
        //                         <br /> FOR WOMEN AND MEN</b>
        //                     </h4>
        //                     <br />
        //                     <Button className="py-2 px-5 hero-btn"><h4>Shop Now</h4></Button>
        //                 </div>
        //             </div>
        //             <div className="col-12 col-lg-6 d-flex mt-md-4 justify-content-center" style={{ cursor: 'pointer' }}>
        //                 <img className="image-hover ani-img hero-img" src={heroImg} alt="" />
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Banner;