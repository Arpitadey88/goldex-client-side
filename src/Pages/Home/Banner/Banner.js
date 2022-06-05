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
        <div>
        <section className="home border-0 pt-3 ps-4" id="banner">

            <div className="content p-md-5 m-md-5">
                <h1 className="dancingFont">Goldex WatchShop</h1>
                <h3 className="dancingFont text-warning">Extrordinary Timepieces</h3>
                <h2 className="dancingFont">Vintage Design</h2>
                <button onClick={handleViewAllProducts} className="btn rounded border-0 hero-btn mt-md-3">View All Products</button>
            </div>

        </section>
    </div>
        
    );
};

export default Banner;