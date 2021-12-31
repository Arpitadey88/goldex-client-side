import React from 'react';
import Rating from 'react-rating';
import comma from '../../../../watch-img/comma.png';
import './SingleReview.css';

const SingleReview = (props) => {
    const { star, name, description, img } = props.review;
    return (
        <div className="d-flex align-item-center justify-content-center">
            <div className="p-3 review-cart" style={{ width: '340px', height: '290px', backgroundColor: 'ghostWhite' }}>
                <div >
                    <span><img style={{ height: '30px' }} src={comma} alt="" /></span>
                    <span className="ms-3" style={{ color: 'slategrey' }}>{description}</span>
                </div>

                <div className="row mx-2 mt-5">
                    <div className="col-md-6"> <img style={{ height: '80px', width: '80px' }} src={img} alt="" /></div>
                    <div className="col-md-6 mt-3">
                        <h5 style={{ color: 'crimson' }}>{name}</h5>
                        <Rating
                            initialRating={star}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly>
                        </Rating>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;