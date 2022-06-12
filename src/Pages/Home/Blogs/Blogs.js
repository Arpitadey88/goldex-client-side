import React from 'react';
import './Blogs.css';
import imgOne from '../../../watch-img/default.jpg';
import imgTwo from '../../../watch-img/COVER2.jpg';
import imgThree from '../../../watch-img/COVER3.jpg';
import imgFour from '../../../watch-img/COVER7.jpg';

const Blogs = () => {
    return (
        <div className="container" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000">
            <div className="row g-0 my-5">
                <div className="col-6 imgContainer">
                    <img src={imgOne} alt="" className="blogHero pe-md-1 pe-1" />

                    <div className="middle">
                        <p>Luxury watches are made to be displayed - not in a box, but on a gentleman's wrist. </p>
                        <button className="btn blogButton">Details</button>
                    </div>

                </div>
                <div className="col-6">
                    <div className="row g-0">
                        <div className="col-6 imgContainer">
                            <img src={imgTwo} alt="" className="blogImage ps-1 pb-1 pb-md-2" />
                            <div className="middle">
                                <p>Provides one-stop quality service to its clients. </p>
                                <button className="btn blogButton">Details</button>
                            </div>

                        </div>
                        <div className="col-6 imgContainer">
                            <img src={imgThree} alt="" className="blogImage ps-2 pb-1 pb-md-2" />
                            <div className="middle">
                                <p>Provides one-stop quality service to its clients</p>
                                <button className="btn blogButton">Details</button>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 imgContainer">
                            <img src={imgFour} alt="" className="blogImage ps-1" />
                            <div className="middle">
                                <p>Provides one-stop quality service to its clients. </p>
                                <button className="btn blogButton">Details</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Blogs;