import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <section className="home_blog border-0" id="home">

                <div className="content p-5 barBoxDesign d-flex">
                    <div>
                        <h3 className="barDesign robotoFont fw-normal">|</h3>
                    </div>
                    <div>
                        <h2 className="text-white robotoFont fw-normal">Best Sellers</h2>
                        <h6 className="text-white robotoFont fw-light">Discover the timepieces trending around the world.</h6>
                        <button className="btn rounded border-0 px-5 mt-3 btn-design">Shop Now</button>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Blog;